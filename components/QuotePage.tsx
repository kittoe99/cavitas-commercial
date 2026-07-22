import React from 'react';
import { SITE_PHONE_DISPLAY } from '../seo';
import { QuoteWizard } from './quote/QuoteWizard';

const PHONE_TEL = '8336931311';

export const QuotePage: React.FC = () => {
  return (
    <div className="bg-[var(--bg)]">
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
            Online quote
          </p>
          <h1 className="font-serif text-[1.85rem] sm:text-[2.5rem] md:text-[2.85rem] text-[var(--text)] tracking-tight leading-[1.1] mb-3 sm:mb-4 max-w-2xl">
            Get a commercial cleaning estimate in minutes.
          </h1>
          <p className="text-[var(--text-muted)] text-[15px] sm:text-base leading-relaxed max-w-xl mb-5">
            Tell us about your space, schedule, and service needs. We’ll show an estimated range and
            follow up to confirm pricing with matched providers.
          </p>
          <p className="text-sm font-semibold text-[#d4d4d4]">
            Prefer to talk?{' '}
            <a href={`tel:${PHONE_TEL}`} className="text-secondary hover:underline">
              {SITE_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
