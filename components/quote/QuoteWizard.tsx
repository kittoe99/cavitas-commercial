import React, { useState } from 'react';
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from '../../seo';
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

const PHONE_TEL = '8336931311';

type Errors = Partial<Record<keyof QuoteAnswers, string>>;

function validateStep(step: QuoteStepId, answers: QuoteAnswers): Errors {
  const errors: Errors = {};

  if (step === 'service') {
    if (!answers.service) errors.service = 'Select a service.';
    if (!answers.industry) errors.industry = 'Select an industry.';
    if (!answers.frequency) errors.frequency = 'Select a frequency.';
  }

  if (step === 'property') {
    if (!answers.sqftBand) errors.sqftBand = 'Select square footage.';
    if (answers.restrooms === '' || Number.isNaN(Number(answers.restrooms))) {
      errors.restrooms = 'Enter number of restrooms.';
    }
    if (!answers.floors || Number(answers.floors) < 1) {
      errors.floors = 'Enter number of floors.';
    }
    if (!answers.city.trim()) errors.city = 'Enter your city.';
    if (!answers.zip.trim() || answers.zip.trim().length < 3) errors.zip = 'Enter a valid ZIP.';
  }

  if (step === 'schedule') {
    if (!answers.preferredDays.length) errors.preferredDays = 'Pick at least one day.';
    if (!answers.timeWindow) errors.timeWindow = 'Select a time window.';
    if (!answers.startTimeframe) errors.startTimeframe = 'Select a start timeframe.';
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
  }

  return errors;
}

export const QuoteWizard: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuoteAnswers>(EMPTY_QUOTE);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const step = QUOTE_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === QUOTE_STEPS.length - 1;
  const progress = ((stepIndex + 1) / QUOTE_STEPS.length) * 100;

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

  const submit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 md:p-10 text-center sm:text-left">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">
          Quote received
        </p>
        <h2 className="font-serif text-[1.75rem] sm:text-[2.15rem] text-[var(--text)] tracking-tight leading-tight mb-3">
          Thanks, {answers.name.split(' ')[0] || 'there'}. We’ll follow up shortly.
        </h2>
        <p className="text-[var(--text-muted)] text-[15px] leading-relaxed max-w-xl mb-6">
          Your request is in. A Cavitas coordinator will review your details and confirm pricing with
          matched providers. Prefer to talk now? Call or email us anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
          >
            Call {SITE_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="inline-flex items-center justify-center text-sm font-bold text-secondary hover:text-secondary-400 transition-colors"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 sm:px-8 pt-5 sm:pt-6 pb-4">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary">
            Step {stepIndex + 1} of {QUOTE_STEPS.length}
          </p>
          <p className="text-sm font-semibold text-[var(--text)]">{step.label}</p>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--bg)] overflow-hidden">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ol className="mt-4 hidden sm:flex gap-1">
          {QUOTE_STEPS.map((s, i) => (
            <li
              key={s.id}
              className={`flex-1 text-center text-[11px] font-bold uppercase tracking-wide ${
                i <= stepIndex ? 'text-secondary' : 'text-[#6a6a6a]'
              }`}
            >
              {s.label}
            </li>
          ))}
        </ol>
      </div>

      <div className="px-5 sm:px-8 py-6 sm:py-8">
        {step.id === 'service' && <ServiceStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'property' && <PropertyStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'schedule' && <ScheduleStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'contact' && <ContactStep answers={answers} onChange={patch} errors={errors} />}
        {step.id === 'review' && <ReviewStep answers={answers} />}
      </div>

      <div className="border-t border-[var(--border)] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-3 bg-[var(--bg-alt)]">
        <button
          type="button"
          onClick={goBack}
          disabled={isFirst}
          className={`rounded-none px-4 py-2.5 text-sm font-semibold transition-colors ${
            isFirst
              ? 'text-[#555] cursor-not-allowed'
              : 'text-[var(--text-muted)] hover:text-[var(--text)]'
          }`}
        >
          Back
        </button>
        {isLast ? (
          <button
            type="button"
            onClick={submit}
            className="rounded-none inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
          >
            Submit quote request
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="rounded-none inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
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
