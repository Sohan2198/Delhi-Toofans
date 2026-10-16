import sharesquare from '../pages/Sponsors/Sponsors/Sharesquare logo.png';
import arrival from '../pages/Sponsors/Sponsors/Arrival logo.png';
import stae from '../pages/Sponsors/Sponsors/Stae Hotel logo.png';
import gaana from '../pages/Sponsors/Sponsors/Gaana logo.png';
import rysum from '../pages/Sponsors/Sponsors/Rysum logo.png';
import exicom from '../pages/Sponsors/Sponsors/exicom logo.png';

// Grouped by partnership tier, in display order.
export const SPONSOR_TIERS = [
  {
    tier: 'Principal Sponsors',
    sponsors: [{ name: 'ShareSquare', logo: sharesquare, href: 'https://sharesquare.ae/' }],
  },
  {
    tier: 'Comfort Partners',
    sponsors: [
      { name: 'The Arrival Hotels', logo: arrival, href: 'https://www.thearrivalhotels.com/' },
      { name: 'Stae Hotels', logo: stae, href: 'https://staehotels.com/' },
    ],
  },
  { tier: 'Entertainment Partner', sponsors: [{ name: 'Gaana', logo: gaana, href: 'https://gaana.com/' }] },
  { tier: 'Kit Partner', sponsors: [{ name: 'Rysum Sports', logo: rysum, href: 'https://rysumsports.com/' }] },
  {
    tier: 'Associate Sponsors',
    sponsors: [{ name: 'Exicom Tele-Systems', logo: exicom, href: 'https://www.exicom.com/' }],
  },
];

export const ALL_SPONSORS = SPONSOR_TIERS.flatMap(({ sponsors }) => sponsors);
