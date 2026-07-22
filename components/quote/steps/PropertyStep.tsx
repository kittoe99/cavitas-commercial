import React from 'react';
import {
  OCCUPANT_OPTIONS,
  SQFT_OPTIONS,
  US_STATES,
  type QuoteAnswers,
} from '../quoteTypes';
import { ErrorText, Field, OptionCard, Section, inputClass, selectClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const PropertyStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-8">
    <Section title="Approximate square footage">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SQFT_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.sqftBand === opt.id}
            title={opt.title}
            onClick={() => onChange({ sqftBand: opt.id })}
          />
        ))}
      </div>
      <ErrorText>{errors.sqftBand}</ErrorText>
    </Section>

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
        <ErrorText>{errors.restrooms}</ErrorText>
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
