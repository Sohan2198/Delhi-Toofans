import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { ORGANISATION, SOCIAL_LINKS } from '../../data/site';
import { submitContactForm } from '../../services/contactForm';

const ENQUIRY_TYPES = ['General enquiry', 'Sponsorship & partnerships', 'Tickets & events', 'Media & press'];

const address = ORGANISATION.addressLines.join(' ');
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ORGANISATION.name}, ${address}`)}`;

const CONTACT_ITEMS = [
  { Icon: MapPin, label: 'Visit us', value: address, href: mapsUrl, external: true },
  { Icon: Mail, label: 'Email', value: ORGANISATION.email, href: `mailto:${ORGANISATION.email}` },
  { Icon: Phone, label: 'Call', value: ORGANISATION.phone, href: `tel:${ORGANISATION.phone.replace(/\s/g, '')}` },
];

const buildMailto = ({ name, email, mobile, enquiry, message }) => {
  const body = [message, '', '—', `Name: ${name}`, `Email: ${email}`, mobile ? `Mobile: ${mobile}` : null]
    .filter((line) => line !== null)
    .join('\n');
  const params = new URLSearchParams({ subject: `${enquiry} — Delhi Toofans website`, body });
  // URLSearchParams encodes spaces as '+', which mail clients show literally.
  return `mailto:${ORGANISATION.email}?${params.toString().replace(/\+/g, '%20')}`;
};

const inputClass =
  'mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 transition focus:border-toofan-purple focus:outline-none focus:ring-2 focus:ring-toofan-purple/30';

const Field = ({ id, label, required, hint, as: Component = 'input', className = '', ...props }) => (
  <div className={className}>
    <label htmlFor={id} className="text-sm font-semibold text-gray-800">
      {label}
      {required ? (
        <span className="text-red-600" aria-hidden="true">
          {' '}
          *
        </span>
      ) : (
        <span className="font-normal text-gray-500"> (optional)</span>
      )}
    </label>
    <Component id={id} name={id} required={required} className={inputClass} {...props} />
    {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
  </div>
);

const ContactInfo = () => (
  <aside className="rounded-2xl bg-toofan-purple bg-gradient-to-b from-white/10 to-transparent p-6 text-white shadow-xl ring-1 ring-white/15 sm:p-8">
    <h2 className="text-2xl font-extrabold">Delhi Toofans</h2>
    <p className="mt-1 text-sm font-semibold text-toofan-yellow">{ORGANISATION.name}</p>

    <ul className="mt-8 space-y-5">
      {CONTACT_ITEMS.map(({ Icon, label, value, href, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex gap-4 rounded-xl p-2 -m-2 transition hover:bg-white/5"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-toofan-yellow text-toofan-purple">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white/60">{label}</span>
              <span className="block leading-snug group-hover:underline">{value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>

    <div className="mt-8 border-t border-white/15 pt-6">
      <p className="text-sm text-white/80">{ORGANISATION.tagline}</p>
      <p className="mt-1 font-bold text-toofan-yellow">{ORGANISATION.hashtags}</p>
      <ul className="mt-4 flex gap-3">
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition hover:border-toofan-yellow hover:bg-toofan-yellow hover:text-toofan-purple"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

const ContactForm = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  // When the form service is unavailable, offer the same message as a pre-filled email instead.
  const [fallbackMailto, setFallbackMailto] = useState('');

  // Submit in the background so visitors stay on the page.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { _honeypot: honeypot, ...data } = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await submitContactForm({ ...data, page: window.location.href, _honeypot: honeypot });
      form.reset();
      setStatus('sent');
    } catch (error) {
      console.error(error);
      setFallbackMailto(buildMailto(data));
      setStatus('error');
    }
  };

  return (
    <>
      <header className="bg-toofan-purple text-white">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 md:pb-28 md:pt-16">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1 w-8 rounded-full bg-toofan-yellow" aria-hidden="true" />
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            Get in <span className="text-toofan-yellow">touch</span>
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Partnerships, tickets, media or just want to say hello — send us a message and the team will get back to
            you.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="relative z-10 -mt-16 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-toofan-purple">Send us a message</h2>
            <p className="mt-1 text-sm text-gray-600">
              Fields marked <span className="text-red-600">*</span> are required.
            </p>

            {status === 'sent' ? (
              <div
                className="mt-8 flex flex-col items-center rounded-xl bg-green-50 px-6 py-10 text-center"
                role="status"
              >
                <CheckCircle2 size={48} className="text-green-600" aria-hidden="true" />
                <p className="mt-4 text-lg font-bold text-gray-900">Thanks — your message is on its way!</p>
                <p className="mt-1 text-sm text-gray-600">The team will get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-semibold text-toofan-purple underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <Field id="name" label="Full name" type="text" autoComplete="name" required className="sm:col-span-2" />
                <Field id="email" label="Email" type="email" autoComplete="email" required />
                <Field
                  id="mobile"
                  label="Mobile number"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern={String.raw`\+?[0-9 ]{7,20}`}
                  title="Digits and spaces, optionally starting with +"
                />
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry" className="text-sm font-semibold text-gray-800">
                    What is this about?
                  </label>
                  <select id="enquiry" name="enquiry" defaultValue={ENQUIRY_TYPES[0]} className={inputClass}>
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <Field
                  id="message"
                  label="Message"
                  as="textarea"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="How can we help?"
                  className="sm:col-span-2"
                />

                {/* Spam trap: hidden from people, filled in by bots. */}
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <p
                    className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2"
                    role="alert"
                  >
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      We couldn&apos;t send your message right now.{' '}
                      <a href={fallbackMailto || `mailto:${ORGANISATION.email}`} className="font-bold underline">
                        Send it by email instead
                      </a>{' '}
                      — your message will be filled in for you.
                    </span>
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 rounded-lg bg-toofan-yellow px-8 py-3 font-bold text-toofan-purple shadow transition hover:bg-toofan-purple hover:text-toofan-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-toofan-purple focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    ) : (
                      <Send size={18} aria-hidden="true" />
                    )}
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
