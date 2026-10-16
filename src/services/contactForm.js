/**
 * Sends contact-form enquiries to whichever backend is configured at build time (first match wins):
 *
 *   REACT_APP_WEB3FORMS_KEY      → Web3Forms (free tier; key is public by design)
 *   REACT_APP_CONTACT_FORM_URL   → Microsoft 365 Power Automate flow (docs/contact-form-microsoft-365.md)
 *   (neither)                    → legacy Formspark form
 *
 * `data` holds the form fields: name, email, mobile, enquiry, message, plus the `_honeypot` spam trap.
 */

const LEGACY_FORMSPARK_URL = 'https://submit-form.com/prZT6IzeM';

const PROVIDERS = {
  web3forms: {
    url: 'https://api.web3forms.com/submit',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: ({ _honeypot, ...data }) => ({
      access_key: process.env.REACT_APP_WEB3FORMS_KEY,
      subject: `[Website] ${data.enquiry} — ${data.name}`,
      from_name: 'Delhi Toofans website',
      replyto: data.email,
      botcheck: _honeypot,
      // CC is a Web3Forms Pro feature, so it's only sent when configured (separate several addresses with ";").
      ...(process.env.REACT_APP_WEB3FORMS_CC ? { ccemail: process.env.REACT_APP_WEB3FORMS_CC } : {}),
      ...data,
    }),
  },
  powerAutomate: {
    url: process.env.REACT_APP_CONTACT_FORM_URL,
    // text/plain keeps this a CORS "simple request" (no preflight); the flow parses the JSON itself.
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: (data) => data,
  },
  formspark: {
    url: LEGACY_FORMSPARK_URL,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: (data) => data,
  },
};

export const CONTACT_PROVIDER = process.env.REACT_APP_WEB3FORMS_KEY
  ? 'web3forms'
  : process.env.REACT_APP_CONTACT_FORM_URL
    ? 'powerAutomate'
    : 'formspark';

/** Resolves on success; throws with the provider's explanation on failure. */
export const submitContactForm = async (data) => {
  const provider = PROVIDERS[CONTACT_PROVIDER];
  const response = await fetch(provider.url, {
    method: 'POST',
    headers: provider.headers,
    body: JSON.stringify(provider.body(data)),
  });
  const text = await response.text();

  // Web3Forms answers with { success, message }; the others signal failure through the status code.
  let payload = null;
  try {
    payload = JSON.parse(text);
  } catch {
    // Plain-text body (Formspark errors) — keep `text` for the error message.
  }
  if (!response.ok || payload?.success === false) {
    throw new Error(`Contact form rejected by ${CONTACT_PROVIDER} (${response.status}): ${payload?.message ?? text}`);
  }
};
