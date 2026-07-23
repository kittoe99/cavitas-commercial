import React from 'react';
import { Link } from 'react-router-dom';

type Section = {
  title: string;
  body: React.ReactNode;
};

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: Section[];
  related?: { label: string; to: string };
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  title,
  effectiveDate,
  intro,
  sections,
  related,
}) => {
  return (
    <div className="relative bg-[var(--bg)] min-h-[calc(100svh-var(--site-header-height))]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.07),transparent_60%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <header className="mb-10 sm:mb-12">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-secondary">
            Legal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text)] tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Effective date: {effectiveDate}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-[var(--text-muted)]">{intro}</p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sans text-lg font-bold tracking-tight text-[var(--text)] mb-3">
                {section.title}
              </h2>
              <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-muted)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-secondary">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        {related && (
          <p className="mt-12 pt-8 border-t border-white/10 text-sm text-[var(--text-muted)]">
            Also see our{' '}
            <Link to={related.to} className="text-white underline underline-offset-2 hover:text-secondary">
              {related.label}
            </Link>
            .
          </p>
        )}
      </article>
    </div>
  );
};
