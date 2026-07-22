import React from 'react';
import { Logo } from './Logo';
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from '../seo';

const PHONE_TEL = '8336931311';

const locations = [
  {
    city: 'Denver',
    phone: SITE_PHONE_DISPLAY,
    address: '3600 S Yosemite St #750, Denver, CO 80237',
  },
  {
    city: 'Centennial',
    phone: SITE_PHONE_DISPLAY,
    address: '6909 S Holly Cir #200, Centennial, CO 80112',
  },
  {
    city: 'San Diego',
    phone: SITE_PHONE_DISPLAY,
    address: '402 W Broadway #400, San Diego, CA 92101',
  },
  {
    city: 'La Jolla',
    phone: SITE_PHONE_DISPLAY,
    address: '4225 Executive Square #600, La Jolla, CA 92037',
  },
];

const policies = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const SatisfactionBadge = () => (
  <div className="inline-flex items-center gap-2.5 rounded-md border border-[#c9a227]/50 bg-gradient-to-b from-[#2a2410] to-[#1a1608] px-3 py-2.5 shadow-sm">
    <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="#B8860B" stroke="#F5D76E" strokeWidth="2" />
      <circle cx="20" cy="20" r="13" fill="#1a1608" stroke="#F5D76E" strokeWidth="1.5" />
      <path d="M20 10l2.2 5.2 5.6.5-4.3 3.8 1.3 5.4L20 21.8l-4.8 3.1 1.3-5.4-4.3-3.8 5.6-.5L20 10z" fill="#F5D76E" />
    </svg>
    <div className="leading-tight">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#F5D76E]">100%</p>
      <p className="text-[11px] font-semibold text-[#f0e6c8]">Satisfaction Guaranteed</p>
    </div>
  </div>
);

const ResolutionBadge = () => (
  <div className="inline-flex items-center gap-2.5 rounded-md border border-secondary/40 bg-secondary/10 px-3 py-2.5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-secondary text-secondary">
      <span className="text-[11px] font-extrabold leading-none">24h</span>
    </span>
    <div className="leading-tight">
      <p className="text-[11px] font-bold text-white">24-Hour</p>
      <p className="text-[11px] font-medium text-[#cfcfcf]">Issue Resolution</p>
    </div>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* Top contact bar */}
      <div className="border-b border-white/10 bg-[#161616]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="flex items-center gap-3 min-w-0 hover:opacity-90 transition-opacity"
            >
              <span className="text-secondary shrink-0">
                <IconMail />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-[12px] font-semibold text-secondary">Email:</span>
                <span className="block truncate text-[13px] sm:text-sm font-bold uppercase tracking-wide text-white">
                  {SITE_EMAIL}
                </span>
              </span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <span className="text-secondary shrink-0">
                <IconPhone />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold text-secondary">Phone:</span>
                <span className="block text-[13px] sm:text-sm font-bold uppercase tracking-wide text-white">
                  {SITE_PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="text-secondary shrink-0">
                <IconClock />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-semibold text-secondary">Available:</span>
                <span className="block text-[13px] sm:text-sm font-bold uppercase tracking-wide text-white">
                  We Serve 24/7
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand + locations */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] gap-10 lg:gap-12">
          <div>
            <div className="mb-5 inline-flex rounded-md bg-white px-3 py-2.5">
              <Logo variant="light" markClassName="w-9 h-9" wordmarkClassName="!text-base" />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <SatisfactionBadge />
              <ResolutionBadge />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-6">
            {locations.map((loc) => (
              <div key={loc.city}>
                <h3 className="font-sans text-base font-bold text-white mb-2">{loc.city}</h3>
                <div className="h-px w-full bg-white/25 mb-4" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-2 text-sm text-white/90 hover:text-white mb-3 transition-colors"
                >
                  <span className="mt-0.5 text-secondary shrink-0">
                    <IconPhone />
                  </span>
                  <span>{loc.phone}</span>
                </a>
                <p className="flex items-start gap-2 text-sm text-white/80 leading-snug">
                  <span className="mt-0.5 text-secondary shrink-0">
                    <IconPin />
                  </span>
                  <span>{loc.address}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy links */}
        <div className="relative mt-12 md:mt-16">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-secondary" aria-hidden />
          <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {policies.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="rounded-sm bg-white px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold text-[#111] hover:bg-[#f3f3f3] transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-secondary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[12px] sm:text-[13px] font-medium text-white">
            &copy;{new Date().getFullYear()} All Rights Reserved. Cavitas Commercial Cleaning.
          </p>
        </div>
      </div>
    </footer>
  );
};
