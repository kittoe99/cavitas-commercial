import React from 'react';
import { estimateQuote, formatMoney } from '../quotePricing';
import {
  labelForDays,
  labelForFrequency,
  labelForService,
  labelForSqft,
  labelForStart,
  labelForTimeWindow,
  type QuoteAnswers,
} from '../quoteTypes';

type Props = {
  answers: QuoteAnswers;
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-2.5 border-b border-[var(--border)] last:border-0">
      <dt className="sm:w-40 shrink-0 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </dt>
      <dd className="text-sm font-medium text-[var(--text)]">{value || '—'}</dd>
    </div>
  );
}

export const ReviewStep: React.FC<Props> = ({ answers }) => {
  const estimate = estimateQuote(answers);

  return (
    <div className="space-y-6">
      <dl className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 sm:px-5">
        <Row label="Service" value={labelForService(answers.service)} />
        <Row label="Industry" value={answers.industry} />
        <Row label="Frequency" value={labelForFrequency(answers.frequency)} />
        <Row label="Size" value={labelForSqft(answers.sqftBand)} />
        <Row label="Restrooms" value={answers.restrooms} />
        <Row label="Floors" value={answers.floors} />
        <Row label="Location" value={[answers.city, answers.zip].filter(Boolean).join(', ')} />
        <Row label="Days" value={labelForDays(answers.preferredDays)} />
        <Row label="Time window" value={labelForTimeWindow(answers.timeWindow)} />
        <Row label="Start" value={labelForStart(answers.startTimeframe)} />
        <Row label="Contact" value={`${answers.name}${answers.businessName ? ` · ${answers.businessName}` : ''}`} />
        <Row label="Email" value={answers.email} />
        <Row label="Phone" value={answers.phone} />
        {answers.notes.trim() && <Row label="Notes" value={answers.notes.trim()} />}
      </dl>

      {estimate && (
        <div className="rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">
            Your estimate
          </p>
          <p className="font-serif text-[2rem] sm:text-[2.35rem] text-[var(--text)] tracking-tight leading-none mb-2">
            {formatMoney(estimate.low)} – {formatMoney(estimate.high)}
            {estimate.perVisit && (
              <span className="text-base font-sans font-semibold text-[var(--text-muted)] ml-2">/ month</span>
            )}
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-md">{estimate.label}</p>
        </div>
      )}
    </div>
  );
};
