import React from 'react';
import { SITE_PHONE, SITE_PHONE_DISPLAY } from '../seo';

const badges = [
  {
    key: 'rated',
    title: 'Top Rated',
    sub: 'Trusted locally',
    icon: (
      <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 flex-col items-center justify-center rounded-md sm:rounded-lg bg-[var(--bg)] border border-[var(--border)]">
        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden>
          <path d="M12 2l2.9 6.6L22 10l-5 4.6L18.2 22 12 18.2 5.8 22 7 14.6 2 10l7.1-1.4L12 2z" />
        </svg>
        <span className="text-[8px] sm:text-[10px] font-extrabold text-[var(--text)] leading-none mt-0.5">5.0</span>
      </span>
    ),
  },
  {
    key: 'quality',
    title: 'Quality',
    sub: 'Vetted providers',
    icon: (
      <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-md sm:rounded-lg bg-secondary/15 text-secondary">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" strokeLinejoin="round" />
        </svg>
      </span>
    ),
  },
  {
    key: 'resolution',
    title: '24-Hour',
    sub: 'Fast resolution',
    icon: (
      <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-secondary text-secondary">
        <span className="text-[9px] sm:text-[11px] font-extrabold tracking-tight">24h</span>
      </span>
    ),
  },
];

export const HeroTrustBar: React.FC = () => {
  return (
    <div className="mt-5 sm:mt-8 w-full max-w-xl animate-fade-in-up delay-300 space-y-2 sm:space-y-3">
      <div className="rounded-r-lg sm:rounded-r-xl border border-[var(--border)] border-l-[3px] border-l-secondary bg-[var(--surface)] px-3 sm:px-4 py-2 sm:py-3">
        <p className="text-[12px] sm:text-sm text-[var(--text)] leading-snug">
          We serve 24/7. Call{' '}
          <a href={`tel:${SITE_PHONE.replace(/\D/g, '')}`} className="font-bold text-secondary hover:text-secondary-400 whitespace-nowrap">
            {SITE_PHONE_DISPLAY}
          </a>
          {' '}or{' '}
          <a href="/quote" className="font-bold text-secondary hover:text-secondary-400 whitespace-nowrap">
            View Pricing
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
        {badges.map((b) => (
          <div
            key={b.key}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2.5 rounded-lg sm:rounded-xl border border-[var(--border)] bg-[var(--surface)] px-1.5 sm:px-3 py-2 sm:py-2.5 text-left min-w-0"
          >
            {b.icon}
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-[var(--text)] tracking-tight leading-tight">{b.title}</p>
              <p className="text-[9px] sm:text-[11px] text-[var(--text-muted)] leading-snug">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
