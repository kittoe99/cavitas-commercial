import React from 'react';
import { ServicePage } from './ServicePage';

const ArtJanitorial = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="janPageBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#141414" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
      <radialGradient id="janPageGlow" cx="30%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="200" fill="url(#janPageBg)" />
    <ellipse cx="90" cy="80" rx="100" ry="80" fill="url(#janPageGlow)" />
    <path d="M20 170h280" stroke="#2a2a2a" strokeWidth="2" />
    <path d="M40 178h100" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M118 100h70l-8 58H126z" fill="#1c1c1c" stroke="#333" strokeWidth="1.5" />
    <ellipse cx="153" cy="100" rx="35" ry="10" fill="#242424" stroke="#333" strokeWidth="1.5" />
    <ellipse cx="153" cy="100" rx="24" ry="5" fill="#DC2626" fillOpacity="0.35" />
    <path d="M130 92c0-14 46-14 46 0" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round" />
    <line x1="210" y1="36" x2="248" y2="148" stroke="#3a3a3a" strokeWidth="4" strokeLinecap="round" />
    <path d="M236 138c8 4 22 10 28 22-12 2-24 0-34-6-6-8-4-16 6-16z" fill="#DC2626" />
    <rect x="48" y="48" width="52" height="64" rx="6" fill="#1a1a1a" stroke="#2e2e2e" />
    <rect x="58" y="62" width="24" height="3" rx="1.5" fill="#DC2626" />
    <rect x="58" y="74" width="32" height="2.5" rx="1" fill="#3a3a3a" />
    <rect x="58" y="84" width="28" height="2.5" rx="1" fill="#3a3a3a" />
    <rect x="58" y="94" width="30" height="2.5" rx="1" fill="#3a3a3a" />
  </svg>
);

export const JanitorialPage: React.FC = () => (
  <ServicePage
    title="Janitorial Services"
    description="Full-service janitorial programs through independent providers built around your facility. From nightly cleaning to supply support, we help match you with pros who keep your building ready."
    detailsTitle="A complete program—not just a checklist."
    Art={ArtJanitorial}
    features={[
      { title: 'Evening & Off-Hours', desc: 'Cleaning happens after business hours so there’s zero disruption to your operations.' },
      { title: 'Scheduled Consistency', desc: 'A reliable cadence with familiar providers—efficiency that builds over time in your space.' },
      { title: 'Supply Management', desc: 'Providers can track consumables like paper, soap, and liners so you don’t run out mid-week.' },
      { title: 'Green Options', desc: 'Eco-friendly products are available on request—safe for people and the environment.' },
      { title: 'Dedicated Providers', desc: 'We aim to match you with consistent independent pros who learn your facility.' },
      { title: 'Quality Follow-Up', desc: 'If standards slip, Civitas helps coordinate a make-it-right visit quickly.' },
    ]}
    checklist={[
      'Consistent provider match for your account',
      'Custom scope tailored to your facility type',
      'Evening, overnight, or weekend service',
      'Supplies, equipment, and consumables support',
      'Trash, recycling, and waste handling',
      'Vacuuming, mopping, and hard-surface care',
      'Restroom cleaning and supply restocking',
      'High-touch disinfection throughout',
      'Ongoing quality check-ins as needed',
      'Next-business-day callback on missed items',
    ]}
    faqs={[
      {
        q: 'What’s the difference between office cleaning and janitorial?',
        a: 'Office cleaning is typically a set task list each visit. Janitorial is a fuller program—supplies, scheduling, quality follow-up, and special projects—coordinated through Civitas with independent providers.',
      },
      {
        q: 'Can providers work with our security requirements?',
        a: 'Yes. We help coordinate access, keys, and alarm protocols with your matched provider. Pros can carry photo ID and be added to your approved vendor list.',
      },
      {
        q: 'How do you handle special requests?',
        a: 'Reach out to Civitas and we’ll coordinate with your provider. Post-event cleanup or extra visits before a meeting can usually be scheduled quickly.',
      },
      {
        q: 'Do you offer day porter services?',
        a: 'Yes. We can connect you with providers who offer day porter coverage for spot cleaning, restrooms, lobby upkeep, and on-demand needs during business hours.',
      },
      {
        q: 'Are providers insured and bonded?',
        a: 'We connect businesses with independent providers who meet insurance expectations. Certificates of insurance can be requested for your facility.',
      },
    ]}
  />
);
