import React from 'react';

export const ContentSection: React.FC = () => {
  return (
    <section className="bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
          Commercial Cleaning
        </p>
        <h2 className="font-serif text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-semibold text-[var(--text)] tracking-tight leading-tight mb-6">
          Built for workplaces that need to stay clean.
        </h2>
        <div className="space-y-5 text-[15px] sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p>
            Civitas connects businesses with independent service providers for commercial cleaning across the metro area.
            We don’t push one-size-fits-all packages—we learn your layout, traffic patterns, and schedule, then match you
            with the right provider for the way your business actually runs.
          </p>
          <p>
            Whether you need recurring office cleaning, a full janitorial program, or specialized floor care,
            you get reliable coordination, clear communication, and results you can count on—visit after visit.
          </p>
        </div>
      </div>
    </section>
  );
};
