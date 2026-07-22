import React from 'react';
import { QuoteWizard } from './quote/QuoteWizard';

export const QuotePage: React.FC = () => {
  return (
    <div className="relative bg-[var(--bg)] min-h-[calc(100svh-var(--site-header-height))]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_60%)]"
        aria-hidden
      />
      <h1 className="sr-only">Get a commercial cleaning quote</h1>
      <section className="relative py-8 sm:py-10 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
