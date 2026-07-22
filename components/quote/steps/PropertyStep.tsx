import React from 'react';
import { SQFT_OPTIONS, type QuoteAnswers } from '../quoteTypes';
import { Field, OptionCard, inputClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const PropertyStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-7">
    <div>
      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        Approximate square footage
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SQFT_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.sqftBand === opt.id}
            title={opt.title}
            onClick={() => onChange({ sqftBand: opt.id })}
          />
        ))}
      </div>
      {errors.sqftBand && <p className="mt-2 text-sm text-secondary">{errors.sqftBand}</p>}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Restrooms" htmlFor="quote-restrooms">
        <input
          id="quote-restrooms"
          type="number"
          min={0}
          max={99}
          inputMode="numeric"
          className={inputClass}
          value={answers.restrooms}
          onChange={(e) => onChange({ restrooms: e.target.value })}
          placeholder="e.g. 4"
        />
        {errors.restrooms && <p className="mt-2 text-sm text-secondary">{errors.restrooms}</p>}
      </Field>
      <Field label="Floors / levels" htmlFor="quote-floors">
        <input
          id="quote-floors"
          type="number"
          min={1}
          max={99}
          inputMode="numeric"
          className={inputClass}
          value={answers.floors}
          onChange={(e) => onChange({ floors: e.target.value })}
          placeholder="e.g. 2"
        />
        {errors.floors && <p className="mt-2 text-sm text-secondary">{errors.floors}</p>}
      </Field>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
        {errors.city && <p className="mt-2 text-sm text-secondary">{errors.city}</p>}
      </Field>
      <Field label="ZIP / Postal code" htmlFor="quote-zip">
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
        {errors.zip && <p className="mt-2 text-sm text-secondary">{errors.zip}</p>}
      </Field>
    </div>

    <Field label="Special notes (optional)" htmlFor="quote-notes" hint="Access, security, sensitive areas, etc.">
      <textarea
        id="quote-notes"
        rows={3}
        className={`${inputClass} resize-y min-h-[88px]`}
        value={answers.notes}
        onChange={(e) => onChange({ notes: e.target.value })}
        placeholder="Anything providers should know…"
      />
    </Field>
  </div>
);
