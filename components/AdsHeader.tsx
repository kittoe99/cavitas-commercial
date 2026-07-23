import React, { useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { SITE_PHONE, SITE_PHONE_DISPLAY } from '../seo';

const PHONE_TEL = SITE_PHONE.replace(/\D/g, '');

type Props = {
  onCtaClick?: () => void;
};

/** Slim sticky header for Google Ads landing pages — logo, phone, one CTA. */
export const AdsHeader: React.FC<Props> = ({ onCtaClick }) => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const sync = () => {
      document.documentElement.style.setProperty('--ads-header-height', `${header.offsetHeight}px`);
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    window.addEventListener('resize', sync);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[60] border-b border-[var(--border)] bg-[#0f0f0f]/95 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <a href="/pricing" className="shrink-0" aria-label="Cavitas Commercial Cleaning">
          <Logo size="compact" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-[12px] sm:text-[13px] font-bold text-white hover:border-secondary/50 transition-colors"
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => {
              if (onCtaClick) onCtaClick();
              else document.getElementById('pricing-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-3.5 sm:px-5 py-2 text-[12px] sm:text-[13px] font-bold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
          >
            See my pricing
          </button>
        </div>
      </div>
    </header>
  );
};
