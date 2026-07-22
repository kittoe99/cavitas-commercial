import React from 'react';
import { estimateQuote, formatMoney } from '../quotePricing';
import {
  labelForAccess,
  labelForAddons,
  labelForAreas,
  labelForBudget,
  labelForContactPref,
  labelForDays,
  labelForFrequency,
  labelForOccupants,
  labelForService,
  labelForSqft,
  labelForStart,
  labelForSupplies,
  labelForTimeWindow,
  type QuoteAnswers,
} from '../quoteTypes';

type Props = {
  answers: QuoteAnswers;
};

function Row({ label, value }: { label: string; value: string }) {
  if (!value || value === '—') return null;
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-3 border-b border-[var(--border)] last:border-0">
      <dt className="sm:w-44 shrink-0 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </dt>
      <dd className="text-sm font-medium text-[var(--text)] leading-snug">{value}</dd>
    </div>
  );
}

export const ReviewStep: React.FC<Props> = ({ answers }) => {
  const estimate = estimateQuote(answers);
  const location = [answers.address, answers.city, answers.state, answers.zip].filter(Boolean).join(', ');

  return (
    <div className="space-y-6">
      <dl className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 sm:px-5">
        <Row label="Service" value={labelForService(answers.service)} />
        <Row label="Industry" value={answers.industry} />
        <Row label="Frequency" value={labelForFrequency(answers.frequency)} />
        <Row label="Areas" value={labelForAreas(answers.areas)} />
        <Row label="Add-ons" value={labelForAddons(answers.addons.filter((a) => a !== 'none'))} />
        <Row label="Size" value={labelForSqft(answers.sqftBand)} />
        <Row label="Occupancy" value={labelForOccupants(answers.occupants)} />
        <Row label="Restrooms" value={answers.restrooms} />
        <Row label="Floors" value={answers.floors} />
        <Row label="Location" value={location} />
        <Row label="Days" value={labelForDays(answers.preferredDays)} />
        <Row label="Time window" value={labelForTimeWindow(answers.timeWindow)} />
        <Row label="Start" value={labelForStart(answers.startTimeframe)} />
        <Row label="Access" value={labelForAccess(answers.access)} />
        <Row label="Supplies" value={labelForSupplies(answers.supplies)} />
        <Row label="Contact" value={`${answers.name}${answers.businessName ? ` · ${answers.businessName}` : ''}`} />
        <Row label="Email" value={answers.email} />
        <Row label="Phone" value={answers.phone} />
        <Row label="Reach me by" value={labelForContactPref(answers.contactPref)} />
        <Row label="Budget" value={labelForBudget(answers.budget)} />
        {answers.notes.trim() && <Row label="Notes" value={answers.notes.trim()} />}
      </dl>

      {estimate && (
        <div className="rounded-2xl border border-secondary/35 bg-gradient-to-br from-secondary/15 to-secondary/[0.04] px-5 py-6 sm:px-7 sm:py-7">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">
            Your estimate
          </p>
          <p className="font-serif text-[2.15rem] sm:text-[2.5rem] text-[var(--text)] tracking-tight leading-none mb-2">
            {formatMoney(estimate.low)} – {formatMoney(estimate.high)}
            {estimate.perVisit && (
              <span className="ml-2 font-sans text-base font-semibold text-[var(--text-muted)]">/ month</span>
            )}
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-md">{estimate.label}</p>
        </div>
      )}
    </div>
  );
};
