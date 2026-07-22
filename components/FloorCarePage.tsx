import React from 'react';
import { ServicePage } from './ServicePage';

const ArtFloor = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="floorPageBg" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#121212" />
        <stop offset="100%" stopColor="#080808" />
      </linearGradient>
      <linearGradient id="floorPageShine" x1="0" y1="0.5" x2="1" y2="0.5">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
        <stop offset="45%" stopColor="#DC2626" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="floorPageTile" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#171717" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#floorPageBg)" />
    <g stroke="#2a2a2a" strokeWidth="1" fill="url(#floorPageTile)">
      <polygon points="40,110 120,110 100,160 10,160" />
      <polygon points="124,110 204,110 194,160 104,160" />
      <polygon points="208,110 288,110 310,160 198,160" />
      <polygon points="10,164 100,164 88,198 0,198" fill="#151515" />
      <polygon points="104,164 194,164 190,198 92,198" fill="#151515" />
      <polygon points="198,164 310,164 320,198 194,198" fill="#151515" />
    </g>
    <path d="M30 138 Q160 120 290 145" stroke="url(#floorPageShine)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="168" cy="92" r="28" fill="#1c1c1c" stroke="#333" strokeWidth="2" />
    <circle cx="168" cy="92" r="16" fill="#141414" stroke="#DC2626" strokeWidth="2.5" />
    <circle cx="168" cy="92" r="5" fill="#DC2626" />
    <rect x="162" y="48" width="12" height="28" rx="3" fill="#2a2a2a" />
    <rect x="156" y="40" width="24" height="10" rx="3" fill="#DC2626" />
  </svg>
);

export const FloorCarePage: React.FC = () => (
  <ServicePage
    title="Floor Care"
    description="Match your property with independent floor-care specialists for strip, wax, buff, and carpet extraction—coordinated through Cavitas."
    detailsTitle="Floor care specialists, matched to your surfaces."
    Art={ArtFloor}
    features={[
      { title: 'Strip & Wax', desc: 'Old finish removed and durable coats applied for a renewed, long-lasting shine.' },
      { title: 'Burnishing & Buffing', desc: 'High-speed burnishing restores gloss and clears scuffs between full refinishing cycles.' },
      { title: 'Carpet Extraction', desc: 'Hot-water extraction lifts dirt and stains—helping carpets look better longer.' },
      { title: 'Tile & Grout', desc: 'Rotary scrubbing restores tile and brings grout closer to its original color.' },
      { title: 'Hardwood Care', desc: 'Gentle cleaning and polishing for hardwood, engineered wood, and laminate.' },
      { title: 'Preventive Plans', desc: 'Scheduled programs recommend the right cadence for high-traffic commercial floors.' },
    ]}
    checklist={[
      'Strip and wax for VCT, vinyl, and linoleum',
      'High-speed burnishing between full refinishes',
      'Hot-water carpet extraction and spot treatment',
      'Tile and grout deep cleaning and sealing',
      'Hardwood cleaning, buffing, and recoating',
      'Entry mat cleaning and replacement support',
      'Concrete scrubbing and sealing where needed',
      'Pre- and post-treatment for high-traffic zones',
      'Floor condition assessment and care schedule',
      'Product options matched to your surface type',
    ]}
    faqs={[
      {
        q: 'How does Cavitas floor care work?',
        a: 'We learn your floor types and traffic patterns, then match you with an independent specialist who can handle the right services for your property.',
      },
      {
        q: 'How often should floors be stripped and waxed?',
        a: 'Most commercial VCT needs stripping every 6–12 months. High-traffic lobbies and halls may need it more often—we help assess and match the right schedule.',
      },
      {
        q: 'Will floor work disrupt our business?',
        a: 'Strip and wax is typically done after hours or weekends so floors are ready the next business day. Routine burnishing can fit into evening cleaning.',
      },
      {
        q: 'What’s the difference between buffing and burnishing?',
        a: 'Buffing is lower-speed cleaning and light shine. Burnishing uses high speed for a deeper gloss. Providers match the method to your floor type.',
      },
      {
        q: 'What if results aren’t right?',
        a: 'Tell Cavitas by the next business day—we coordinate 24-hour resolution with your provider.',
      },
    ]}
  />
);
