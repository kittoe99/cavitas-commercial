import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ZipFinder } from './ZipFinder';
import { useServicePageSchema } from './SeoManager';
import {
  SERVICE_SEO,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '../seo';

export type ServiceFeature = {
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServicePageProps = {
  title: string;
  description: string;
  detailsTitle: string;
  features: ServiceFeature[];
  checklist: string[];
  faqs: ServiceFaq[];
  Art: React.FC;
};

const ServiceTrustStrip = () => (
  <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-1.5 sm:gap-2.5 max-w-lg">
    {[
      { title: 'Top Rated', icon: '★' },
      { title: 'Quality', icon: '◆' },
      { title: '24-Hour', icon: '24h' },
    ].map((b) => (
      <div
        key={b.title}
        className="flex flex-col items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-1.5 py-2 text-center"
      >
        <span className="text-[10px] sm:text-xs font-extrabold text-secondary leading-none">{b.icon}</span>
        <span className="text-[10px] sm:text-xs font-bold text-[var(--text)] tracking-tight">{b.title}</span>
      </div>
    ))}
  </div>
);

export const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  detailsTitle,
  features,
  checklist,
  faqs,
  Art,
}) => {
  const { pathname } = useLocation();
  const pageSeo = SERVICE_SEO[pathname];

  const schemas = useMemo(() => {
    if (!pageSeo) return [];
    return [
      serviceSchema(pageSeo, title),
      faqSchema(faqs),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/#services' },
        { name: title, path: pageSeo.path },
      ]),
    ];
  }, [pageSeo, title, faqs]);

  useServicePageSchema(schemas);

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-14 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-6 md:gap-10 lg:gap-14">
            <div className="animate-slide-up">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-2.5 sm:mb-3">Services</p>
              <h1 className="font-serif text-[1.75rem] sm:text-[2.5rem] md:text-[2.9rem] text-[var(--text)] tracking-tight leading-[1.1] mb-3 sm:mb-4">
                {title}
              </h1>
              <p className="text-[13px] sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-5 sm:mb-7 max-w-md">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                <a
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 sm:px-7 py-2.5 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                >
                  View Pricing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a
                  href={`tel:${SITE_PHONE.replace(/\D/g, '')}`}
                  className="text-[13px] sm:text-sm font-bold text-secondary hover:text-secondary-400 transition-colors"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-3 text-[12px] sm:text-sm text-[var(--text-muted)]">
                Or{' '}
                <a href="#details" className="font-medium text-[var(--text)] hover:text-secondary transition-colors">
                  see what’s included
                </a>
              </p>
              <ServiceTrustStrip />
            </div>

            <div className="justify-self-center md:justify-self-end w-full max-w-[280px] sm:max-w-md md:max-w-none animate-fade-in delay-200">
              <div className="aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <Art />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="details" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[var(--bg-alt)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl mb-7 sm:mb-10 md:mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-2 sm:mb-3">How Cavitas helps</p>
            <h2 className="font-serif text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] text-[var(--text)] tracking-tight leading-tight">
              {detailsTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-10">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-sans font-bold text-[14px] sm:text-[15px] text-[var(--text)] mb-1.5 sm:mb-2 tracking-tight">{f.title}</h3>
                <p className="text-[13px] sm:text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + FAQs */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-2 sm:mb-3">What’s included</p>
              <h2 className="font-serif text-[1.45rem] sm:text-[1.65rem] md:text-[1.9rem] text-[var(--text)] tracking-tight mb-5 sm:mb-8 leading-tight">
                A clear scope on every visit.
              </h2>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-secondary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-2 sm:mb-3">FAQs</p>
              <h2 className="font-serif text-[1.45rem] sm:text-[1.65rem] md:text-[1.9rem] text-[var(--text)] tracking-tight mb-5 sm:mb-8 leading-tight">
                Common questions.
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-sans font-semibold text-[13px] sm:text-sm text-[var(--text)] mb-1 sm:mb-1.5">{faq.q}</h3>
                    <p className="text-[13px] sm:text-sm text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ZipFinder />
    </div>
  );
};
