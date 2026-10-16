import React from 'react';

/**
 * Sponsor logo in a fixed-size, centred box so logos with different source
 * dimensions and padding line up on a common baseline.
 */
const SponsorLogo = ({ name, logo, href, className = 'h-24 w-56' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex shrink-0 items-center justify-center p-2 ${className}`}
    title={name}
  >
    <img src={logo} alt={name} className="max-h-full max-w-full object-contain" loading="lazy" />
  </a>
);

export default SponsorLogo;
