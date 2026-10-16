import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, ORGANISATION, SOCIAL_LINKS } from '../../data/site';

const Footer = () => (
  <footer className="mx-auto bg-black py-8 text-white md:px-[9rem]">
    <div className="container px-3 md:px-20">
      <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-toofan-yellow">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Address</h3>
          <address className="text-sm not-italic leading-relaxed">
            <span className="font-semibold uppercase">{ORGANISATION.name}</span>
            {ORGANISATION.addressLines.map((line) => (
              <React.Fragment key={line}>
                <br />
                {line}
              </React.Fragment>
            ))}
          </address>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Connect with Us</h3>
          <p className="mb-1 text-sm leading-relaxed">{ORGANISATION.tagline}</p>
          <span className="font-semibold">{ORGANISATION.hashtags}</span>
          <ul className="mt-3 flex space-x-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-toofan-yellow"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
