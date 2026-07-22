import React from 'react';
import {
  OCCUPANT_OPTIONS,
  US_STATES,
  type QuoteAnswers,
} from '../quoteTypes';
import { ErrorText, Field, OptionCard, Section, inputClass, selectClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

function formatSqftInput(raw: string): string {
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return '';
  const n = Number(digits);
  if (!Number.isFinite(n)) return '';
  return n.toLocaleString('en-US');
}

export const PropertyStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-8">
    <Field
      label="Exact square footage"
      htmlFor="quote-sqft"
      hint="Enter the cleanable area in square feet for the most accurate estimate. Check your lease or floor plan if unsure."
    >
      <div className="relative max-w-sm">
        <input
          id="quote-sqft"
          type="text"
          inputMode="numeric"
          className={`${inputClass} pr-16`}
          value={answers.sqft}
          onChange={(e) => onChange({ sqft: formatSqftInput(e.target.value) })}
          placeholder="e.g. 4,500"
          autoComplete="off"
        />
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[var(--text-muted)]">
          sq ft
        </span>
      </div>
      <ErrorText>{errors.sqft}</ErrorText>
    </Field>

    <Section title="Typical occupancy" hint="How many people usually use the space?">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {OCCUPANT_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.occupants === opt.id}
            title={opt.title}
            onClick={() => onChange({ occupants: opt.id })}
          />
        ))}
      </div>
      <ErrorText>{errors.occupants}</ErrorText>
    </Section>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Restrooms" htmlFor="quote-restrooms">
        <select
          id="quote-restrooms"
          className={selectClass}
          value={answers.restrooms}
          onChange={(e) => onChange({ restrooms: e.target.value })}
        >
          <option value="">Select</option>
          {Array.from({ length: 21 }, (_, i) => (
            <option key={i} value={String(i)}>
              {i === 0 ? '0 — none' : i === 20 ? '20+' : String(i)}
            </option>
          ))}
        </select>
        <ErrorText>{errors.restrooms}</ErrorText>
      </Field>
      <Field label="Floors / levels" htmlFor="quote-floors">
        <select
          id="quote-floors"
          className={selectClass}
          value={answers.floors}
          onChange={(e) => onChange({ floors: e.target.value })}
        >
          <option value="">Select</option>
          {Array.from({ length: 20 }, (_, i) => {
            const n = i + 1;
            return (
              <option key={n} value={String(n)}>
                {n === 20 ? '20+' : String(n)}
              </option>
            );
          })}
        </select>
        <ErrorText>{errors.floors}</ErrorText>
      </Field>
    </div>

    <Field label="Street address" htmlFor="quote-address" hint="Where providers will clean.">
      <input
        id="quote-address"
        type="text"
        className={inputClass}
        value={answers.address}
        onChange={(e) => onChange({ address: e.target.value })}
        placeholder="3600 S Yosemite St #750"
        autoComplete="street-address"
      />
      <ErrorText>{errors.address}</ErrorText>
    </Field>

    <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
      <div className="sm:col-span-3">
        <Field label="City" htmlFor="quote-city">
          <input
            id="quote-city"
            type="text"
            className={inputClass}
            value={answers.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="Denver"
            autoComplete="address-level2"
          />
          <ErrorText>{errors.city}</ErrorText>
        </Field>
      </div>
      <div className="sm:col-span-1">
        <Field label="State" htmlFor="quote-state">
          <select
            id="quote-state"
            className={selectClass}
            value={answers.state}
            onChange={(e) => onChange({ state: e.target.value })}
            autoComplete="address-level1"
          >
            <option value="">—</option>
            {US_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
          <ErrorText>{errors.state}</ErrorText>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field label="ZIP" htmlFor="quote-zip">
          <input
            id="quote-zip"
            type="text"
            inputMode="numeric"
            maxLength={10}
            className={inputClass}
            value={answers.zip}
            onChange={(e) => onChange({ zip: e.target.value })}
            placeholder="80237"
            autoComplete="postal-code"
          />
          <ErrorText>{errors.zip}</ErrorText>
        </Field>
      </div>
    </div>
  </div>
);
