// Site-wide facts. Edit here and every page updates.

export const site = {
  name: 'The Wish Centre',
  strapline: 'We listen. We support. We empower.',
  area: 'Blackburn with Darwen',
  founded: 1989,
  email: 'info@thewishcentre.org',
  address: ['Unit 21, Business Development Centre', 'Eanam Wharf', 'Blackburn', 'BB1 5BL'],
  hours: [
    { days: 'Monday to Thursday', time: '9am to 5pm' },
    { days: 'Friday', time: '9am to 4pm' },
  ],
  hoursShort: 'Mon–Thu 9am–5pm, Fri 9am–4pm',
  companyNo: '5834929',
  charityNo: '1116444',
  // Where the Exit button and the Escape key send people. A neutral, common page.
  exitUrl: 'https://www.bbc.co.uk/weather',
};

// Phone numbers. `tel` is the dialable form (no spaces).
export const phones = {
  wish: { label: 'The Wish Centre', number: '0300 561 0440', tel: '03005610440', note: 'Mon–Thu 9am–5pm, Fri 9am–4pm' },
  refuge: { label: 'Refuge referrals', number: '01254 55300', tel: '0125455300', note: 'Self-referral or agency referral' },
  national: { label: 'National Domestic Abuse Helpline', number: '0808 2000 247', tel: '08082000247', note: 'Free, 24 hours' },
  mens: { label: "Respect Men's Advice Line", number: '0808 801 0327', tel: '08088010327', note: 'For male survivors' },
  emergency: { label: 'Emergency services', number: '999', tel: '999', note: 'If you are in immediate danger' },
};

// Main navigation. `cloth` picks the section colour used for that page's header field.
export const nav = [
  { href: '/need-help/', label: 'Get help', cloth: 'madder' },
  { href: '/services/', label: 'Services', cloth: 'madder' },
  { href: '/learning-community/', label: 'Training', cloth: 'saffron' },
  { href: '/support-us/', label: 'Support us', cloth: 'indigo' },
  { href: '/about/', label: 'About', cloth: 'teal' },
  { href: '/contact/', label: 'Contact', cloth: 'teal' },
];

export const footerNav = [
  {
    heading: 'Get help',
    links: [
      { href: '/need-help/', label: 'I need help' },
      { href: '/need-help/#danger', label: 'Am I in danger?' },
      { href: '/services/', label: 'Our services' },
      { href: '/resources/', label: 'Resources and numbers' },
    ],
  },
  {
    heading: 'Get involved',
    links: [
      { href: '/learning-community/', label: 'Training' },
      { href: '/support-us/', label: 'Donate or partner' },
      { href: '/survivor-stories/', label: 'Survivor stories' },
      { href: '/work-volunteer/', label: 'Work or volunteer' },
    ],
  },
  {
    heading: 'About us',
    links: [
      { href: '/about/', label: 'Who we are' },
      { href: '/news/', label: 'News' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
];
