import React from 'react';
import {
  ADDON_OPTIONS,
  AREA_OPTIONS,
  FREQUENCY_OPTIONS,
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  toggleMulti,
  type QuoteAnswers,
} from '../quoteTypes';
import { ErrorText, Field, OptionCard, OptionChip, Section, selectClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const ServiceStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-8">
    <Section title="Service type">
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
      <ErrorText>{errors.service}</ErrorText>
    </Section>

    <Field label="Industry / facility type" htmlFor="quote-industry">
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
      <ErrorText>{errors.industry}</ErrorText>
    </Field>

    <Section title="Cleaning frequency" hint="How often do you want service?">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
      <ErrorText>{errors.frequency}</ErrorText>
    </Section>

    <Section title="Areas to include" hint="Select all that apply.">
      <div className="flex flex-wrap gap-2">
        {AREA_OPTIONS.map((opt) => (
          <OptionChip
            key={opt.id}
            selected={answers.areas.includes(opt.id)}
            title={opt.title}
            onClick={() => onChange({ areas: toggleMulti(answers.areas, opt.id) })}
          />
        ))}
      </div>
      <ErrorText>{errors.areas}</ErrorText>
    </Section>

    <Section title="Add-on services" hint="Optional extras for this quote.">
      <div className="flex flex-wrap gap-2">
        {ADDON_OPTIONS.map((opt) => (
          <OptionChip
            key={opt.id}
            selected={answers.addons.includes(opt.id)}
            title={opt.title}
            onClick={() => onChange({ addons: toggleMulti(answers.addons, opt.id, true) })}
          />
        ))}
      </div>
    </Section>
  </div>
);
