import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ZipFinder } from './ZipFinder';
import { useServicePageSchema } from './SeoManager';
import {
  SERVICE_SEO,
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
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-8 md:gap-10 lg:gap-14">
            <div className="animate-slide-up">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">Services</p>
              <h1 className="font-serif text-[2rem] sm:text-[2.35rem] md:text-[2.75rem] font-semibold text-[var(--text)] tracking-tight leading-[1.1] mb-4">
                {title}
              </h1>
              <p className="text-[15px] sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-md">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-[15px] font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                >
                  Get a free quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#details" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                  See what’s included
                </a>
              </div>
            </div>

            <div className="justify-self-center md:justify-self-end w-full max-w-md md:max-w-none animate-fade-in delay-200">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <Art />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="py-14 md:py-16 lg:py-20 bg-[var(--bg-alt)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="max-w-2xl mb-10 md:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">What we do</p>
            <h2 className="font-serif text-[1.65rem] sm:text-[1.85rem] md:text-[2.1rem] font-semibold text-[var(--text)] tracking-tight leading-tight">
              {detailsTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-bold text-[15px] text-[var(--text)] mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">What’s included</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-[var(--text)] tracking-tight mb-8 leading-tight">
                A clear scope on every visit.
              </h2>
              <ul className="space-y-3.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                    <svg className="w-5 h-5 shrink-0 text-secondary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">FAQs</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-[var(--text)] tracking-tight mb-8 leading-tight">
                Common questions.
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-sm text-[var(--text)] mb-1.5">{faq.q}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
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
