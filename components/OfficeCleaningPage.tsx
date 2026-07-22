import React from 'react';
import { ServicePage } from './ServicePage';

const ArtOffice = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="officePageBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <linearGradient id="officePageGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#officePageBg)" />
    <ellipse cx="260" cy="30" rx="90" ry="60" fill="url(#officePageGlow)" />
    <rect x="48" y="36" width="140" height="128" rx="6" fill="#141414" stroke="#2a2a2a" strokeWidth="1.5" />
    <rect x="62" y="50" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.85" />
    <rect x="102" y="50" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="142" y="50" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="62" y="86" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="102" y="86" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.45" />
    <rect x="142" y="86" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="62" y="122" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="102" y="122" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="142" y="122" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.25" />
    <rect x="200" y="118" width="88" height="8" rx="2" fill="#2e2e2e" />
    <rect x="208" y="126" width="6" height="28" fill="#242424" />
    <rect x="274" y="126" width="6" height="28" fill="#242424" />
    <rect x="220" y="98" width="48" height="20" rx="3" fill="#1f1f1f" stroke="#333" />
    <rect x="228" y="104" width="32" height="3" rx="1" fill="#DC2626" />
    <circle cx="195" cy="70" r="3" fill="#DC2626" />
    <path d="M292 58l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#DC2626" fillOpacity="0.7" />
  </svg>
);

export const OfficeCleaningPage: React.FC = () => (
  <ServicePage
    title="Office Cleaning"
    description="Daily, weekly, or custom office cleaning through independent providers matched to your workplace. Keep workstations, common areas, and restrooms spotless so your team can focus on work."
    detailsTitle="Everything your workplace needs to stay polished."
    Art={ArtOffice}
    features={[
      { title: 'Workstation Sanitizing', desc: 'Desks, keyboards, phones, and high-touch surfaces are cleaned and disinfected to reduce everyday germ spread.' },
      { title: 'Trash & Recycling', desc: 'Bins are emptied, liners replaced, and recyclables handled according to your facility’s program.' },
      { title: 'Floor Care', desc: 'Carpets are vacuumed and hard floors are damp-mopped, with spot treatment as needed.' },
      { title: 'Restroom Sanitation', desc: 'Fixtures, sinks, mirrors, and counters are cleaned and disinfected. Soap and paper goods are restocked.' },
      { title: 'Glass & Surfaces', desc: 'Interior glass, partitions, and common-area surfaces are polished to a streak-free finish.' },
      { title: 'Detail Touch-Ups', desc: 'Switches, handles, baseboards, and vents get regular attention for a thoroughly clean environment.' },
    ]}
    checklist={[
      'Empty trash and recycling; replace liners',
      'Dust and sanitize desks, workstations, and keyboards',
      'Wipe door handles, light switches, and high-touch areas',
      'Vacuum carpets and floor mats',
      'Damp-mop hard surface flooring',
      'Clean and disinfect restroom fixtures and counters',
      'Restock soap, paper towels, and toilet paper',
      'Clean interior glass partitions and entry glass',
      'Wipe breakroom counters and appliances',
      'Note and report any maintenance issues observed',
    ]}
    faqs={[
      {
        q: 'How often should my office be cleaned?',
        a: 'Most offices do well with daily or 3x/week service for high-traffic areas and restrooms. We’ll help match you with a provider and cadence based on size, headcount, and foot traffic.',
      },
      {
        q: 'Do providers bring equipment and supplies?',
        a: 'Yes. Independent providers typically arrive with commercial vacuums, microfiber, and EPA-registered solutions. Specific product preferences can often be accommodated.',
      },
      {
        q: 'What hours can cleaning happen?',
        a: 'Providers offer after-hours, early morning, and weekend scheduling to minimize disruption. Evening service commonly runs 6:00 PM – 1:00 AM.',
      },
      {
        q: 'Are providers background checked?',
        a: 'Civitas connects you with vetted independent providers. Background checks, training, and insurance expectations are part of how we match businesses with pros.',
      },
      {
        q: 'What if something gets missed?',
        a: 'Tell us by the next business day and we’ll coordinate with your provider to make it right at no extra cost.',
      },
    ]}
  />
);
