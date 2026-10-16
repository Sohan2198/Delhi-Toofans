import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export const ORGANISATION = {
  name: 'Resolute Sports Private Limited',
  addressLines: ['10th Floor, Kataria Arcade, Off SG Highway,', 'Post: Makarba, Ahmedabad - 380051, Gujarat, India'],
  email: 'contact@resolutesports.in',
  phone: '+91 79 4992 0484',
  tagline: 'The newest addition to the Rupay Prime Volleyball League',
  hashtags: '#DilSeToofan | #DelhiToofans',
};

export const NAV_LINKS = [
  { name: 'About Us', to: '/About' },
  { name: 'Toofani Squad', to: '/Squad' },
  { name: 'Fixtures & Results', to: '/Fixtures&Results' },
  { name: 'Gallery', to: '/Gallery' },
  { name: 'Sponsors', to: '/Sponsors' },
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61555001505743', Icon: FaFacebook },
  { label: 'X (Twitter)', href: 'https://x.com/DelhiToofans', Icon: FaXTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com/delhitoofansofficial/', Icon: FaInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@DelhiToofans', Icon: FaYoutube },
];

const ADD_EVENT_ID = 'cR26582037';
export const CALENDAR_PROVIDERS = [
  { label: 'Google', provider: 'google', color: '#4285F4', icon: 'calendar' },
  { label: 'Outlook.com', provider: 'outlookcom', color: '#0072C6', icon: 'mail' },
  { label: 'Outlook (Desktop)', provider: 'outlook', color: '#0072C6', icon: 'monitor' },
  { label: 'Microsoft 365', provider: 'office365', color: '#F25022', icon: 'building' },
  { label: 'Apple', provider: 'apple', color: '#000000', icon: 'apple' },
  { label: 'Yahoo', provider: 'yahoo', color: '#720E9E', icon: 'calendar' },
].map((option) => ({ ...option, href: `https://www.addevent.com/event/${ADD_EVENT_ID}+${option.provider}` }));
