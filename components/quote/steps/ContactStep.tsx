import React from 'react';
import {
  BUDGET_OPTIONS,
  CONTACT_PREF_OPTIONS,
  type QuoteAnswers,
} from '../quoteTypes';
import { ErrorText, Field, OptionCard, Section, inputClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const ContactStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Your name" htmlFor="quote-name">
        <input
          id="quote-name"
          type="text"
          className={inputClass}
          value={answers.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Jordan Lee"
          autoComplete="name"
        />
        <ErrorText>{errors.name}</ErrorText>
      </Field>
      <Field label="Business name" htmlFor="quote-business">
        <input
          id="quote-business"
          type="text"
          className={inputClass}
          value={answers.businessName}
          onChange={(e) => onChange({ businessName: e.target.value })}
          placeholder="Acme Co."
          autoComplete="organization"
        />
        <ErrorText>{errors.businessName}</ErrorText>
      </Field>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Email" htmlFor="quote-email">
        <input
          id="quote-email"
          type="email"
          className={inputClass}
          value={answers.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="you@company.com"
          autoComplete="email"
        />
        <ErrorText>{errors.email}</ErrorText>
      </Field>
      <Field label="Phone" htmlFor="quote-phone">
        <input
          id="quote-phone"
          type="tel"
          className={inputClass}
          value={answers.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="(206) 746-2523"
          autoComplete="tel"
        />
        <ErrorText>{errors.phone}</ErrorText>
      </Field>
    </div>

    <Section title="Preferred contact method">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {CONTACT_PREF_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.contactPref === opt.id}
            title={opt.title}
            onClick={() => onChange({ contactPref: opt.id })}
          />
        ))}
      </div>
      <ErrorText>{errors.contactPref}</ErrorText>
    </Section>

    <Section title="Monthly budget range" hint="Optional — helps us match the right providers.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {BUDGET_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            selected={answers.budget === opt.id}
            title={opt.title}
            onClick={() => onChange({ budget: opt.id })}
          />
        ))}
      </div>
    </Section>
  </div>
);
