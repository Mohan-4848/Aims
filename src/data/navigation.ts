import type { NavItem, TopbarContact } from '../types/navigation';

export const TOPBAR_CONTACT: TopbarContact = {
  phone: '8055667888 / 906354147 / 0432',
  ambulance: '8179432491',
  email: 'arundathihospital@gmail.com',
  admissions: '8055778999',
};

export const BRAND_INFO = {
  name: 'Arundathi Institute of Medical Sciences',
  logoUrl: 'https://aims.ac.in/wp-content/uploads/2023/06/cropped-logo-final-1-1024x358.png',
  homeUrl: '#home',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About AIMS', href: '#about' },
  { label: 'Academics', href: '#programs' },
  { label: 'Campus Life', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_CTA = {
  label: 'Admissions ↗',
  href: '#admissions',
};
