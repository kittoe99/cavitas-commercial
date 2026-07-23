import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { estimateQuote, formatMoney, type QuoteEstimate } from './quote/quotePricing';
import {
  EMPTY_QUOTE,
  SERVICE_OPTIONS,
  type QuoteAnswers,
  type ServiceType,
} from './quote/quoteTypes';
import { normalizePostalInput, parsePostalCode } from '../lib/postalCode';
import { submitAdsPricingLead } from '../lib/submissions';
import { SITE_PHONE, SITE_PHONE_DISPLAY } from '../seo';

const PHONE_TEL = SITE_PHONE.replace(/\D/g, '');
const SQFT_STEP = 500;
const SQFT_MAX_PRESET = 50000;
const SQFT_CUSTOM = 'custom';
const SQFT_PRESETS = Array.from({ length: SQFT_MAX_PRESET / SQFT_STEP }, (_, i) => (i + 1) * SQFT_STEP);

const inputClass =
  'w-full rounded-xl border border-[#c8c8c8] bg-[#f0f0f0] px-3.5 py-3 text-sm text-[#1a1a1a] outline-none transition-shadow placeholder:text-[#6b6b6b] hover:border-[#a8a8a8] hover:bg-[#f5f5f5] focus:border-secondary focus:bg-[#fafafa]';

type FormState = {
  service: ServiceType | '';
  sqft: string;
  zip: string;
  name: string;
  phone: string;
  email: string;
};

const EMPTY: FormState = {
  service: '',
  sqft: '',
  zip: '',
  name: '',
  phone: '',
  email: '',
};

function formatSqftInput(raw: string): string {
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return '';
  const n = Number(digits);
  return Number.isFinite(n) ? n.toLocaleString('en-US') : '';
}

function isSqftPreset(sqft: string): boolean {
  const n = Number(String(sqft).replace(/,/g, ''));
  return Number.isFinite(n) && n >= SQFT_STEP && n <= SQFT_MAX_PRESET && n % SQFT_STEP === 0;
}

function buildAnswers(form: FormState): QuoteAnswers {
  return {
    ...EMPTY_QUOTE,
    service: form.service,
    industry: 'Office Spaces',
    frequency: '3x-week',
    areas: ['offices', 'restrooms', 'floors', 'trash'],
    sqft: form.sqft,
    occupants: '1-10',
    restrooms: '2',
    floors: '1',
    zip: form.zip,
    name: form.name,
    email: form.email,
    phone: form.phone,
    contactPref: 'either',
  };
}

const steps = [
  { title: 'Tell us about your space', blurb: 'Service type, size, and where you’re located.' },
  { title: 'See your pricing range', blurb: 'Instant estimate based on real commercial rates.' },
  { title: 'Get matched with providers', blurb: 'We connect you with vetted independents nearby.' },
];

const trusts = [
  { title: 'Top Rated', sub: 'Trusted locally', badge: '5.0' },
  { title: 'Quality', sub: 'Vetted providers', badge: null },
  { title: '24-Hour', sub: 'Fast resolution', badge: '24h' },
];

export const PricingLandingPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [customSqft, setCustomSqft] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [estimate, setEstimate] = useState<QuoteEstimate | null>(null);

  const selectValue = customSqft
    ? SQFT_CUSTOM
    : isSqftPreset(form.sqft)
      ? String(Number(String(form.sqft).replace(/,/g, '')))
      : '';

  const quotePath = useMemo(() => {
    const params = new URLSearchParams();
    if (form.zip.trim()) params.set('zip', form.zip.trim());
    const q = params.toString();
    return q ? `/quote?${q}` : '/quote';
  }, [form.zip]);

  const patch = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.service) next.service = 'Select a service.';
    const sqftN = Number(String(form.sqft).replace(/,/g, ''));
    if (!form.sqft.trim() || !Number.isFinite(sqftN) || sqftN < 100) {
      next.sqft = 'Select or enter square footage.';
    }
    const postal = parsePostalCode(form.zip);
    if (postal.ok === false) next.zip = postal.error;
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email.';
    }
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    if (submitting) return;

    const postal = parsePostalCode(form.zip);
    if (postal.ok === false) return;
    const answers = buildAnswers({ ...form, zip: postal.formatted });
    const est = estimateQuote(answers);
    if (!est) {
      setSubmitError('Could not calculate pricing. Please try again.');
      return;
    }

    setSubmitError('');
    setSubmitting(true);
    try {
      await submitAdsPricingLead(answers, est);
      setForm((prev) => ({ ...prev, zip: postal.formatted }));
      setEstimate(est);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Could not submit. Please call us.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--bg)] min-h-[calc(100svh-var(--ads-header-height,56px))]">
      {/* Hero + form */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_55%)]"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-[12px] sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
                Free commercial pricing
              </p>
              <h1 className="font-sans font-extrabold text-[1.65rem] sm:text-[2.35rem] md:text-[2.75rem] leading-[1.1] tracking-tight text-white mb-3 sm:mb-4 max-w-xl">
                Get your commercial cleaning price in under a minute.
              </h1>
              <p className="text-[14px] sm:text-base text-[var(--text-muted)] leading-relaxed max-w-md mb-6">
                Enter a few details for an instant monthly range. No commitment—just clear pricing so you can move forward.
              </p>

              <div className="mt-6 lg:mt-0 max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0">
                <img
                  src="/cavitas-commercial-cleaners.png"
                  alt="Commercial cleaner ready to help"
                  className="w-full h-auto max-h-[200px] sm:max-h-[260px] lg:max-h-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                  draggable={false}
                />
              </div>
            </div>

            <div id="pricing-form" className="scroll-mt-24">
              {estimate ? (
                <div className="rounded-2xl border border-secondary/35 bg-gradient-to-br from-secondary/15 to-[var(--surface)] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">
                    Your estimate
                  </p>
                  <p className="font-serif text-[2.1rem] sm:text-[2.5rem] text-white tracking-tight leading-none mb-2">
                    {formatMoney(estimate.low)} – {formatMoney(estimate.high)}
                    <span className="ml-2 font-sans text-base font-semibold text-[var(--text-muted)]">/ mo</span>
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    Based on {form.sqft} sq ft · 3× / week. Final pricing confirmed after a quick review.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                    >
                      Call {SITE_PHONE_DISPLAY}
                    </a>
                    <Link
                      to={quotePath}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
                    >
                      Get a detailed quote
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-4"
                >
                  <div>
                    <label htmlFor="ads-service" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Service
                    </label>
                    <select
                      id="ads-service"
                      className={inputClass}
                      value={form.service}
                      onChange={(e) => patch('service', e.target.value as ServiceType | '')}
                    >
                      <option value="">Select service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-sm text-secondary">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="ads-sqft" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Square footage
                    </label>
                    <select
                      id="ads-sqft"
                      className={inputClass}
                      value={selectValue}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v === SQFT_CUSTOM) {
                          setCustomSqft(true);
                          if (isSqftPreset(form.sqft)) patch('sqft', '');
                          return;
                        }
                        setCustomSqft(false);
                        patch('sqft', formatSqftInput(v));
                      }}
                    >
                      <option value="">Select size</option>
                      {SQFT_PRESETS.map((n) => (
                        <option key={n} value={String(n)}>
                          {n.toLocaleString('en-US')} sq ft
                        </option>
                      ))}
                      <option value={SQFT_CUSTOM}>Enter custom square footage</option>
                    </select>
                    {customSqft && (
                      <input
                        type="text"
                        inputMode="numeric"
                        className={`${inputClass} mt-2`}
                        value={form.sqft}
                        onChange={(e) => patch('sqft', formatSqftInput(e.target.value))}
                        placeholder="e.g. 4,250"
                        aria-label="Custom square footage"
                      />
                    )}
                    {errors.sqft && <p className="mt-1.5 text-sm text-secondary">{errors.sqft}</p>}
                  </div>

                  <div>
                    <label htmlFor="ads-zip" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      ZIP / Postal code
                    </label>
                    <input
                      id="ads-zip"
                      type="text"
                      autoComplete="postal-code"
                      maxLength={12}
                      className={inputClass}
                      value={form.zip}
                      onChange={(e) => patch('zip', normalizePostalInput(e.target.value))}
                      placeholder="80237"
                    />
                    {errors.zip && <p className="mt-1.5 text-sm text-secondary">{errors.zip}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ads-name" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                        Name
                      </label>
                      <input
                        id="ads-name"
                        type="text"
                        autoComplete="name"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => patch('name', e.target.value)}
                        placeholder="Jordan Lee"
                      />
                      {errors.name && <p className="mt-1.5 text-sm text-secondary">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="ads-phone" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                        Phone
                      </label>
                      <input
                        id="ads-phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => patch('phone', e.target.value)}
                        placeholder={SITE_PHONE_DISPLAY}
                      />
                      {errors.phone && <p className="mt-1.5 text-sm text-secondary">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ads-email" className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Email
                    </label>
                    <input
                      id="ads-email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => patch('email', e.target.value)}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-secondary">{errors.email}</p>}
                  </div>

                  {submitError && (
                    <p className="text-sm font-semibold text-secondary" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors disabled:opacity-70 disabled:cursor-wait"
                  >
                    {submitting ? 'Calculating…' : 'See my pricing'}
                  </button>
                  <p className="text-center text-[12px] text-[var(--text-muted)]">
                    Free · No obligation · Takes under a minute
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {trusts.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 sm:px-4 py-3 text-center sm:text-left"
              >
                {t.badge && (
                  <p className="text-[11px] sm:text-xs font-extrabold text-secondary mb-0.5">{t.badge}</p>
                )}
                <p className="text-[12px] sm:text-sm font-bold text-white leading-tight">{t.title}</p>
                <p className="text-[10px] sm:text-[12px] text-[var(--text-muted)] mt-0.5">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h2 className="font-serif text-[1.65rem] sm:text-[2rem] text-white tracking-tight mb-2">
            How it works
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mb-8 max-w-lg">
            Three steps from curiosity to a clear monthly range.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white mb-3">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Guarantee */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">Our promise</p>
              <h2 className="font-serif text-[1.55rem] sm:text-[1.85rem] text-white tracking-tight leading-tight mb-2">
                Done right, or we make it right.
              </h2>
              <p className="text-sm text-[var(--text-muted)] max-w-md">
                Questions about your estimate? Call anytime—we serve 24/7.
              </p>
            </div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors shrink-0"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Minimal ads footer */}
      <footer className="bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[12px] text-[var(--text-muted)]">
            &copy;{new Date().getFullYear()} Cavitas Commercial Cleaning
          </p>
          <a href={`tel:${PHONE_TEL}`} className="text-[13px] font-bold text-secondary hover:text-secondary-400">
            {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
};
