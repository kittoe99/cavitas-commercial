import React from 'react';
import {
  FREQUENCY_OPTIONS,
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  type QuoteAnswers,
} from '../quoteTypes';
import { Field, OptionCard, selectClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const ServiceStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-7">
    <div>
      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        Service type
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {SERVICE_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.service === opt.id}
            title={opt.title}
            blurb={opt.blurb}
            onClick={() => onChange({ service: opt.id })}
          />
        ))}
      </div>
      {errors.service && <p className="mt-2 text-sm text-secondary">{errors.service}</p>}
    </div>

    <Field label="Industry" htmlFor="quote-industry">
      <select
        id="quote-industry"
        className={selectClass}
        value={answers.industry}
        onChange={(e) => onChange({ industry: e.target.value })}
      >
        <option value="">Select industry</option>
        {INDUSTRY_OPTIONS.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      {errors.industry && <p className="mt-2 text-sm text-secondary">{errors.industry}</p>}
    </Field>

    <div>
      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        Frequency
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {FREQUENCY_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.frequency === opt.id}
            title={opt.title}
            blurb={opt.blurb}
            onClick={() => onChange({ frequency: opt.id })}
          />
        ))}
      </div>
      {errors.frequency && <p className="mt-2 text-sm text-secondary">{errors.frequency}</p>}
    </div>
  </div>
);
