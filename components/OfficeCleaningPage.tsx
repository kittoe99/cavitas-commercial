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
    description="Match your workplace with independent office cleaning providers. Desks, restrooms, common areas, and breakrooms—scheduled around your hours through Cavitas."
    detailsTitle="Office cleaning providers, matched to your space."
    Art={ArtOffice}
    features={[
      { title: 'Workstation Care', desc: 'Desks, keyboards, phones, and high-touch surfaces cleaned so your team can stay focused.' },
      { title: 'Trash & Recycling', desc: 'Bins emptied, liners replaced, and recyclables handled per your facility’s program.' },
      { title: 'Floor Attention', desc: 'Carpets vacuumed and hard floors damp-mopped, with spot treatment as needed.' },
      { title: 'Restroom Upkeep', desc: 'Fixtures, sinks, mirrors, and counters cleaned. Soap and paper goods restocked.' },
      { title: 'Glass & Surfaces', desc: 'Interior glass, partitions, and common-area surfaces polished to a streak-free finish.' },
      { title: 'Detail Touch-Ups', desc: 'Switches, handles, baseboards, and vents get regular attention for a polished workplace.' },
    ]}
    checklist={[
      'Empty trash and recycling; replace liners',
      'Dust and sanitize desks, workstations, and keyboards',
      'Wipe door handles, light switches, and high-touch areas',
      'Vacuum carpets and floor mats',
      'Damp-mop hard surface flooring',
      'Clean restroom fixtures and counters',
      'Restock soap, paper towels, and toilet paper',
      'Clean interior glass partitions and entry glass',
      'Wipe breakroom counters and appliances',
      'Note and report any maintenance issues observed',
    ]}
    faqs={[
      {
        q: 'How does Cavitas office cleaning work?',
        a: 'You tell us about your workplace and schedule. We match you with an independent provider suited to your space, then coordinate scope and follow-up.',
      },
      {
        q: 'How often should my office be cleaned?',
        a: 'Most offices do well with daily or 3x/week service for high-traffic areas and restrooms. We’ll help match cadence to size, headcount, and foot traffic.',
      },
      {
        q: 'What hours can cleaning happen?',
        a: 'Providers commonly offer after-hours, early morning, and weekend scheduling so work isn’t disrupted.',
      },
      {
        q: 'What if something isn’t up to standard?',
        a: 'Tell us by the next business day—we coordinate 24-hour resolution with your provider to make it right.',
      },
      {
        q: 'Who actually does the cleaning?',
        a: 'Independent service providers matched through Cavitas—vetted for quality and fit to your facility.',
      },
    ]}
  />
);
