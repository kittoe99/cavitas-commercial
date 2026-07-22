import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalMarkets } from '../hooks/useDetectedCity';
import { SITE_PHONE_DISPLAY } from '../seo';

const PHONE_TEL = '8336931311';

const inputClass =
  'w-full rounded-xl border border-white/12 bg-[var(--bg)] px-3.5 py-3 text-sm text-[var(--text)] outline-none transition-shadow placeholder:text-[#666]';

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: FormState = {
  name: '',
  business: '',
  email: '',
  phone: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const locations = useLocalMarkets();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const patch = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email.';
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please include a short message.';
    }
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[var(--bg)] min-h-[calc(100svh-var(--site-header-height))]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_60%)]"
        aria-hidden
      />

      <section className="relative border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
            Contact
          </p>
          <h1 className="font-serif text-[1.85rem] sm:text-[2.5rem] md:text-[2.85rem] text-[var(--text)] tracking-tight leading-[1.1] mb-3 max-w-2xl">
            We’re here to help.
          </h1>
          <p className="text-[var(--text-muted)] text-[15px] sm:text-base leading-relaxed max-w-xl">
            Reach Cavitas anytime—we serve 24/7. Prefer an instant estimate?{' '}
            <Link to="/quote" className="font-semibold text-secondary hover:text-secondary-400">
              View Pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="relative py-8 sm:py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-8 lg:gap-12">
            {/* Contact details */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 space-y-5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-3.5 group"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-secondary mb-0.5">
                      Phone
                    </span>
                    <span className="text-base font-bold text-[var(--text)] group-hover:text-secondary transition-colors">
                      {SITE_PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-secondary mb-0.5">
                      Available
                    </span>
                    <span className="text-base font-bold text-[var(--text)]">We serve 24/7</span>
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                <h2 className="font-serif text-[1.35rem] text-[var(--text)] tracking-tight mb-4">
                  Locations
                </h2>
                <ul className="space-y-4">
                  {locations.map((loc) => (
                    <li key={loc.city}>
                      <p className="text-sm font-bold text-[var(--text)] mb-0.5">{loc.city}</p>
                      <p className="text-[13px] text-[var(--text-muted)] leading-snug">{loc.address}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              {submitted ? (
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-[1.65rem] sm:text-[1.85rem] text-[var(--text)] tracking-tight leading-tight mb-3">
                    Thanks, {form.name.split(' ')[0] || 'there'}. We’ll be in touch.
                  </h2>
                  <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-6">
                    Your message was received. A Cavitas coordinator will follow up shortly. Need us sooner?
                    Call {SITE_PHONE_DISPLAY}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                    >
                      Call now
                    </a>
                    <Link
                      to="/quote"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] hover:border-white/25 transition-colors"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-[1.55rem] sm:text-[1.75rem] text-[var(--text)] tracking-tight leading-tight mb-1.5">
                    Send a message
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                    Tell us what you need—we’ll get back to you as soon as we can.
                  </p>

                  <form onSubmit={onSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                          Your name
                        </span>
                        <input
                          type="text"
                          className={inputClass}
                          value={form.name}
                          onChange={(e) => patch('name', e.target.value)}
                          autoComplete="name"
                          placeholder="Jordan Lee"
                        />
                        {errors.name && <p className="mt-1.5 text-sm text-secondary">{errors.name}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                          Business <span className="font-medium normal-case tracking-normal text-[#6a6a6a]">(optional)</span>
                        </span>
                        <input
                          type="text"
                          className={inputClass}
                          value={form.business}
                          onChange={(e) => patch('business', e.target.value)}
                          autoComplete="organization"
                          placeholder="Acme Co."
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                          Email
                        </span>
                        <input
                          type="email"
                          className={inputClass}
                          value={form.email}
                          onChange={(e) => patch('email', e.target.value)}
                          autoComplete="email"
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="mt-1.5 text-sm text-secondary">{errors.email}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                          Phone
                        </span>
                        <input
                          type="tel"
                          className={inputClass}
                          value={form.phone}
                          onChange={(e) => patch('phone', e.target.value)}
                          autoComplete="tel"
                          placeholder={SITE_PHONE_DISPLAY}
                        />
                        {errors.phone && <p className="mt-1.5 text-sm text-secondary">{errors.phone}</p>}
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                        Message
                      </span>
                      <textarea
                        rows={5}
                        className={`${inputClass} resize-y min-h-[120px]`}
                        value={form.message}
                        onChange={(e) => patch('message', e.target.value)}
                        placeholder="How can we help?"
                      />
                      {errors.message && <p className="mt-1.5 text-sm text-secondary">{errors.message}</p>}
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                    >
                      Send message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
