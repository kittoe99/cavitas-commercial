import React from 'react';
import type { QuoteAnswers } from '../quoteTypes';
import { Field, inputClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const ContactStep: React.FC<Props> = ({ answers, onChange, errors }) => (
  <div className="space-y-5">
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
        {errors.name && <p className="mt-2 text-sm text-secondary">{errors.name}</p>}
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
        {errors.businessName && <p className="mt-2 text-sm text-secondary">{errors.businessName}</p>}
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
        {errors.email && <p className="mt-2 text-sm text-secondary">{errors.email}</p>}
      </Field>
      <Field label="Phone" htmlFor="quote-phone">
        <input
          id="quote-phone"
          type="tel"
          className={inputClass}
          value={answers.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="(833) 693-1311"
          autoComplete="tel"
        />
        {errors.phone && <p className="mt-2 text-sm text-secondary">{errors.phone}</p>}
      </Field>
    </div>
  </div>
);
