import React, { useState } from 'react';
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
  const [summaryOpen, setSummaryOpen] = useState(false);
  const estimate = estimateQuote(answers);
  const location = [answers.address, answers.city, answers.state, answers.zip].filter(Boolean).join(', ');

  return (
    <div className="space-y-5">
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
          <p className="mt-2 text-[13px] font-semibold text-[var(--text)]">
            {estimate.facilityLabel}: ${estimate.rateLow.toFixed(2)}–${estimate.rateHigh.toFixed(2)} per sq ft
          </p>
          <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed max-w-lg">{estimate.label}</p>
        </div>
      )}

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] overflow-hidden">
        <button
          type="button"
          onClick={() => setSummaryOpen((o) => !o)}
          aria-expanded={summaryOpen}
          className="flex w-full items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
        >
          <span>
            <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)] mb-0.5">
              Your details
            </span>
            <span className="block text-sm font-semibold text-[var(--text)]">
              {summaryOpen ? 'Hide summary' : 'Review your answers'}
            </span>
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
              summaryOpen ? 'rotate-180' : ''
            }`}
            aria-hidden
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {summaryOpen && (
          <dl className="border-t border-[var(--border)] px-4 sm:px-5 pb-1">
            <Row label="Service" value={labelForService(answers.service)} />
            <Row label="Industry" value={answers.industry} />
            <Row label="Frequency" value={labelForFrequency(answers.frequency)} />
            <Row label="Areas" value={labelForAreas(answers.areas)} />
            <Row label="Add-ons" value={labelForAddons(answers.addons.filter((a) => a !== 'none'))} />
            <Row label="Square footage" value={labelForSqft(answers.sqft)} />
            <Row label="Occupancy" value={labelForOccupants(answers.occupants)} />
            <Row label="Restrooms" value={answers.restrooms} />
            <Row label="Floors" value={answers.floors} />
            <Row label="Location" value={location} />
            <Row label="Days" value={labelForDays(answers.preferredDays)} />
            <Row label="Time window" value={labelForTimeWindow(answers.timeWindow)} />
            <Row label="Start" value={labelForStart(answers.startTimeframe)} />
            <Row label="Access" value={labelForAccess(answers.access)} />
            <Row label="Supplies" value={labelForSupplies(answers.supplies)} />
            <Row
              label="Contact"
              value={`${answers.name}${answers.businessName ? ` · ${answers.businessName}` : ''}`}
            />
            <Row label="Email" value={answers.email} />
            <Row label="Phone" value={answers.phone} />
            <Row label="Reach me by" value={labelForContactPref(answers.contactPref)} />
            <Row label="Budget" value={labelForBudget(answers.budget)} />
            {answers.notes.trim() && <Row label="Notes" value={answers.notes.trim()} />}
          </dl>
        )}
      </div>
    </div>
  );
};
