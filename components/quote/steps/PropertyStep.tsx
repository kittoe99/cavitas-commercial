import React, { useState } from 'react';
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

const SQFT_STEP = 500;
const SQFT_MAX_PRESET = 50000;
const SQFT_CUSTOM = 'custom';

const SQFT_PRESETS = Array.from(
  { length: SQFT_MAX_PRESET / SQFT_STEP },
  (_, i) => (i + 1) * SQFT_STEP,
);

function parseSqftDigits(raw: string): number | null {
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

function formatSqftInput(raw: string): string {
  const n = parseSqftDigits(raw);
  if (n === null) return '';
  return n.toLocaleString('en-US');
}

function isSqftPreset(sqft: string): boolean {
  const n = parseSqftDigits(sqft);
  return n !== null && n >= SQFT_STEP && n <= SQFT_MAX_PRESET && n % SQFT_STEP === 0;
}

export const PropertyStep: React.FC<Props> = ({ answers, onChange, errors }) => {
  const [customSqft, setCustomSqft] = useState(
    () => Boolean(answers.sqft.trim()) && !isSqftPreset(answers.sqft),
  );

  const selectValue = customSqft
    ? SQFT_CUSTOM
    : isSqftPreset(answers.sqft)
      ? String(parseSqftDigits(answers.sqft))
      : '';

  const onSqftSelect = (value: string) => {
    if (value === SQFT_CUSTOM) {
      setCustomSqft(true);
      if (isSqftPreset(answers.sqft)) onChange({ sqft: '' });
      return;
    }
    setCustomSqft(false);
    onChange({ sqft: formatSqftInput(value) });
  };

  return (
    <div className="space-y-8">
      <Field
        label="Exact square footage"
        htmlFor="quote-sqft"
        hint="Choose the closest size in 500 sq ft steps, or enter a custom amount. Check your lease or floor plan if unsure."
      >
        <div className="max-w-sm space-y-3">
          <select
            id="quote-sqft"
            className={selectClass}
            value={selectValue}
            onChange={(e) => onSqftSelect(e.target.value)}
          >
            <option value="">Select square footage</option>
            {SQFT_PRESETS.map((n) => (
              <option key={n} value={String(n)}>
                {n.toLocaleString('en-US')} sq ft
              </option>
            ))}
            <option value={SQFT_CUSTOM}>Enter custom square footage</option>
          </select>

          {customSqft && (
            <div className="relative">
              <input
                id="quote-sqft-custom"
                type="text"
                inputMode="numeric"
                className={`${inputClass} pr-16`}
                value={answers.sqft}
                onChange={(e) => onChange({ sqft: formatSqftInput(e.target.value) })}
                placeholder="e.g. 4,250"
                autoComplete="off"
                aria-label="Custom square footage"
              />
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#6b6b6b]">
                sq ft
              </span>
            </div>
          )}
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
};
