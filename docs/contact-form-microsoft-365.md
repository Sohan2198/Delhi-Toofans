# Contact form → Microsoft 365 (Power Automate)

The website's contact form posts each enquiry to a Power Automate flow. The flow saves it to a SharePoint list
(so nothing is ever lost) and emails the team. No third-party form service, no submission quota.

```
Website form ──POST──▶ Power Automate flow ──▶ SharePoint list "Website Enquiries"
                                            └─▶ Email from a@hdc.com to b@hdc.com (Reply-To = visitor)
```

## Before you start

- **Licence:** the _When an HTTP request is received_ trigger is a **premium** connector. The account that owns the
  flow needs a Power Automate Premium (or equivalent) licence. Confirm with your Microsoft 365 admin.
- **Owner:** create the flow under a service/shared account rather than a personal one, so it keeps running if staff
  change. See _Accounts and sharing_ below.

## Accounts and sharing

The example uses two accounts. Replace them with your real addresses.

| Role                  | Account     | What it does                                                           |
| --------------------- | ----------- | ---------------------------------------------------------------------- |
| **Flow owner/sender** | `a@hdc.com` | Owns the flow, list and connections; sends the notification email      |
| **Recipient**         | `b@hdc.com` | Receives every enquiry by email, replies to visitors, manages the list |

- **`a@hdc.com`** is the only account that needs the Power Automate Premium licence. Ideally it's a service account,
  not a person's mailbox, with a password managed by IT and MFA turned on.
- **Sending:** with this setup, step 5 below uses **Send an email (V2)** from `a@hdc.com`'s own mailbox, so no
  shared-mailbox permission is needed. Use _Send an email from a shared mailbox (V2)_ only if mail should come from an
  address like `contact@…`.
- **Receiving:** put `b@hdc.com` in **To**, and set **Reply To** to the visitor's email so that _Reply_ in Outlook goes
  straight to the visitor. To notify several people, use a distribution list or Microsoft 365 group instead of
  `b@hdc.com`.
- **Sharing the flow (backup owner):** in Power Automate → _My flows_ → the flow → **Share** → add `b@hdc.com` (or
  an IT group) as **co-owner**. Co-owners can view run history, fix errors and turn the flow on or off. The flow
  keeps using `a@hdc.com`'s connections, so `b@hdc.com` needs no extra licence. If `a@hdc.com` is ever removed, a
  co-owner can take over.
- **Sharing the list:** on the _Website Enquiries_ list → **Share** → give `b@hdc.com` **Edit**, so they can update the
  _Status_ column. Pin the list to a Teams channel if the team prefers working there.

## 1. Create the SharePoint list

In the Resolute Sports SharePoint site, create a list named **Website Enquiries** with these columns:

| Column  | Type                     | Notes                                                                        |
| ------- | ------------------------ | ---------------------------------------------------------------------------- |
| Title   | Single line of text      | Built-in; stores the visitor's name                                          |
| Email   | Single line of text      |                                                                              |
| Mobile  | Single line of text      |                                                                              |
| Enquiry | Choice                   | General enquiry, Sponsorship & partnerships, Tickets & events, Media & press |
| Message | Multiple lines (plain)   |                                                                              |
| Page    | Hyperlink or single line | Page the form was sent from                                                  |
| Status  | Choice                   | New (default), In progress, Closed                                           |

## 2. Build the flow

Power Automate → **Create** → **Instant cloud flow** → trigger **When an HTTP request is received**.

1. **Trigger – When an HTTP request is received**
   - _Who can trigger the flow_: **Anyone**.
   - _Method_: **POST**.
   - Leave the request body schema empty. The website sends the JSON as `text/plain`, which avoids a browser CORS
     preflight that the flow can't answer.

2. **Parse JSON**
   - _Content_: `triggerBody()`
   - _Schema_:

     ```json
     {
       "type": "object",
       "properties": {
         "name": { "type": "string" },
         "email": { "type": "string" },
         "mobile": { "type": "string" },
         "enquiry": { "type": "string" },
         "message": { "type": "string" },
         "page": { "type": "string" },
         "_honeypot": { "type": "string" }
       },
       "required": ["name", "email", "message"]
     }
     ```

3. **Condition – is it a real enquiry?** (spam filter)
   - `_honeypot` **is equal to** _(empty)_
   - **and** `length(body('Parse_JSON')?['message'])` **is less than or equal to** `2000`

   **If no:** add a **Response** action (status `200`, header `Access-Control-Allow-Origin: *`) and stop. Bots get a
   success reply, so they don't retry.

   **If yes:** continue with steps 4–6.

4. **SharePoint – Create item** in _Website Enquiries_: map Title ← `name`, Email ← `email`, Mobile ← `mobile`,
   Enquiry ← `enquiry`, Message ← `message`, Page ← `page`.

5. **Office 365 Outlook – Send an email (V2)** (signed in as the flow owner, `a@hdc.com`)
   - _To_: `b@hdc.com` (or a distribution list or group, to notify several people)
   - _Subject_: `[Website] @{body('Parse_JSON')?['enquiry']} — @{body('Parse_JSON')?['name']}`
   - _Reply To_: `@{body('Parse_JSON')?['email']}`, so the team can reply directly to the visitor
   - _Body_: message, name, email, mobile, page, plus a link to the SharePoint item.

6. **Response**
   - _Status code_: `200`
   - _Headers_: `Access-Control-Allow-Origin` = `https://delhitoofans.com` (use `*` while testing on localhost)
   - _Body_: `{"ok": true}`

7. **Error path:** add a second **Response** after step 5 with _Configure run after_ → **has failed / has timed
   out**, status `500`, the same `Access-Control-Allow-Origin` header, body `{"ok": false}`. The website then shows
   its "send it by email instead" fallback.

8. **Save** the flow, then copy the **HTTP URL** from the trigger. It contains a signature, so treat it like a
   password: share it only with whoever builds the site, and regenerate it if it leaks.

## 3. Connect the website

1. In the project root, create `.env.local` (it's git-ignored) from `.env.example`:

   ```
   REACT_APP_CONTACT_FORM_URL=<paste the flow's HTTP URL>
   ```

2. Rebuild and deploy (`npm run build` / `npm run deploy`). The URL is baked in at build time.
3. Send a test enquiry from the live Contact page and check that the SharePoint item and the email both arrive.

If `REACT_APP_CONTACT_FORM_URL` is empty, the site falls back to the legacy Formspark form.

## Troubleshooting

| Symptom on the site                          | Likely cause                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| Error message, console shows a CORS error    | The Response action is missing the `Access-Control-Allow-Origin` header |
| Error message, console shows `(401)`/`(403)` | The trigger isn't set to _Anyone_, or the URL was regenerated           |
| Error message, console shows `(400)`         | Parse JSON failed: check the schema matches the fields above            |
| Success on the site but no email             | Check the flow's run history, then `b@hdc.com`'s Junk folder            |
