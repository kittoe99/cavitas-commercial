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
            Civitas partners with offices, medical facilities, and commercial properties across the metro area.
            We don’t offer one-size-fits-all packages—we learn your layout, traffic patterns, and schedule, then
            build a cleaning plan that fits the way your business actually runs.
          </p>
          <p>
            Our trained, uniformed teams arrive prepared with commercial-grade equipment and supplies.
            Whether you need recurring janitorial coverage, detailed floor care, or a consistent office clean,
            you get reliable service, clear communication, and results you can count on—visit after visit.
          </p>
        </div>
      </div>
    </section>
  );
};
