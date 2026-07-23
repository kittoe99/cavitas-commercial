import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parsePostalCode } from '../../lib/postalCode';
import { submitQuoteRequest } from '../../lib/submissions';
import { SITE_PHONE_DISPLAY } from '../../seo';
import {
  EMPTY_QUOTE,
  QUOTE_STEPS,
  type QuoteAnswers,
  type QuoteStepId,
} from './quoteTypes';
import { ServiceStep } from './steps/ServiceStep';
import { PropertyStep } from './steps/PropertyStep';
import { ScheduleStep } from './steps/ScheduleStep';
import { ContactStep } from './steps/ContactStep';
import { ReviewStep } from './steps/ReviewStep';

const PHONE_TEL = '2067462523';

type Errors = Partial<Record<keyof QuoteAnswers, string>>;

function validateStep(step: QuoteStepId, answers: QuoteAnswers): Errors {
  const errors: Errors = {};

  if (step === 'service') {
    if (!answers.service) errors.service = 'Select a service.';
    if (!answers.industry) errors.industry = 'Select an industry.';
    if (!answers.frequency) errors.frequency = 'Select a frequency.';
    if (!answers.areas.length) errors.areas = 'Select at least one area.';
  }

  if (step === 'property') {
    const sqft = Number(String(answers.sqft).replace(/,/g, ''));
    if (!answers.sqft.trim() || !Number.isFinite(sqft) || sqft < 100) {
      errors.sqft = 'Select or enter square footage (at least 100).';
    } else if (sqft > 500000) {
      errors.sqft = 'Enter a square footage under 500,000.';
    }
    if (!answers.occupants) errors.occupants = 'Select typical occupancy.';
    if (!answers.restrooms) {
      errors.restrooms = 'Select number of restrooms.';
    }
    if (!answers.floors) {
      errors.floors = 'Select number of floors.';
    }
    if (!answers.address.trim()) errors.address = 'Enter the street address.';
    if (!answers.city.trim()) errors.city = 'Enter your city.';
    if (!answers.state) errors.state = 'Select a state.';
    const postal = parsePostalCode(answers.zip);
    if (postal.ok === false) errors.zip = postal.error;
  }

  if (step === 'schedule') {
    if (!answers.preferredDays.length) errors.preferredDays = 'Pick at least one day.';
    if (!answers.timeWindow) errors.timeWindow = 'Select a time window.';
    if (!answers.startTimeframe) errors.startTimeframe = 'Select a start timeframe.';
    if (!answers.access) errors.access = 'Select how providers will access the site.';
    if (!answers.supplies) errors.supplies = 'Select a supplies preference.';
  }

  if (step === 'contact') {
    if (!answers.name.trim()) errors.name = 'Enter your name.';
    if (!answers.businessName.trim()) errors.businessName = 'Enter your business name.';
    if (!answers.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) {
      errors.email = 'Enter a valid email.';
    }
    if (!answers.phone.trim() || answers.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Enter a valid phone number.';
    }
    if (!answers.contactPref) errors.contactPref = 'Select a preferred contact method.';
  }

  return errors;
}

function initialAnswersFromParams(searchParams: URLSearchParams): QuoteAnswers {
  const raw = searchParams.get('zip')?.trim() ?? '';
  if (!raw) return EMPTY_QUOTE;
  const parsed = parsePostalCode(raw);
  return { ...EMPTY_QUOTE, zip: parsed.ok ? parsed.formatted : raw };
}

export const QuoteWizard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuoteAnswers>(() => initialAnswersFromParams(searchParams));
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const step = QUOTE_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === QUOTE_STEPS.length - 1;
  const progress = ((stepIndex + 1) / QUOTE_STEPS.length) * 100;

  useEffect(() => {
    const raw = searchParams.get('zip')?.trim();
    if (!raw) return;
    const parsed = parsePostalCode(raw);
    const zip = parsed.ok ? parsed.formatted : raw;
    setAnswers((prev) => (prev.zip === zip ? prev : { ...prev, zip }));
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIndex, submitted]);

  const patch = (next: Partial<QuoteAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...next }));
  };

  const goNext = () => {
    const nextErrors = validateStep(step.id, answers);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStepIndex((i) => Math.min(i + 1, QUOTE_STEPS.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const submit = async () => {
    if (submitting) return;
    setSubmitError('');
    setSubmitting(true);
    try {
      await submitQuoteRequest(answers);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Could not submit your quote. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10 md:p-12">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
          Quote received
        </p>
        <h2 className="font-serif text-[1.85rem] sm:text-[2.25rem] text-[var(--text)] tracking-tight leading-tight mb-3">
          Thanks, {answers.name.split(' ')[0] || 'there'}. We’ll follow up shortly.
        </h2>
        <p className="text-[var(--text-muted)] text-[15px] leading-relaxed max-w-xl mb-8">
          Your request is in. A Cavitas coordinator will review your details and confirm pricing with
          matched providers. Prefer to talk now? Call us anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
          >
            Call {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <div className="border-b border-[var(--border)] bg-[var(--bg-alt)]/60 px-5 sm:px-8 pt-5 sm:pt-6 pb-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary">
            Step {stepIndex + 1} of {QUOTE_STEPS.length}
          </p>
          <p className="text-sm font-semibold text-[var(--text-muted)]">{step.label}</p>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--bg)] overflow-hidden mb-5">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ol className="hidden sm:grid grid-cols-5 gap-2 mb-5">
          {QUOTE_STEPS.map((s, i) => {
            const active = i === stepIndex;
            const done = i < stepIndex;
            return (
              <li key={s.id} className="flex flex-col items-center gap-1.5 text-center">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
                    done
                      ? 'bg-secondary text-white'
                      : active
                        ? 'bg-white text-[#111]'
                        : 'bg-[var(--bg)] text-[#6a6a6a] border border-[var(--border)]'
                  }`}
                >
                  {done ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide ${
                    i <= stepIndex ? 'text-[var(--text)]' : 'text-[#6a6a6a]'
                  }`}
                >
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>
        <h2 className="font-serif text-[1.55rem] sm:text-[1.85rem] text-[var(--text)] tracking-tight leading-tight">
          {step.title}
        </h2>
        <p className="mt-1.5 text-[14px] text-[var(--text-muted)] leading-relaxed max-w-xl">
          {step.subtitle}
        </p>
      </div>

      <div className="px-5 sm:px-8 py-7 sm:py-9">
        {step.id === 'service' && <ServiceStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'property' && <PropertyStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'schedule' && <ScheduleStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'contact' && <ContactStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'review' && <ReviewStep answers={answers} />}
      </div>

      <div className="sticky bottom-0 border-t border-[var(--border)] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-3 bg-[var(--surface)]/95 backdrop-blur-md">
        <button
          type="button"
          onClick={goBack}
          disabled={isFirst}
          className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
            isFirst
              ? 'text-[#555] cursor-not-allowed'
              : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5'
          }`}
        >
          Back
        </button>
        {isLast ? (
          <div className="flex flex-col items-end gap-2">
            {submitError && (
              <p className="text-sm font-semibold text-secondary text-right max-w-sm" role="alert">
                {submitError}
              </p>
            )}
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors disabled:opacity-70 disabled:cursor-wait"
            >
              {submitting ? 'Submitting…' : 'Submit quote request'}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
          >
            Continue
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
