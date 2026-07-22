import React from 'react';
import {
  ACCESS_OPTIONS,
  START_OPTIONS,
  SUPPLIES_OPTIONS,
  TIME_WINDOW_OPTIONS,
  WEEKDAY_OPTIONS,
  type QuoteAnswers,
  type Weekday,
} from '../quoteTypes';
import { ErrorText, Field, OptionCard, Section, inputClass } from '../QuoteField';

type Props = {
  answers: QuoteAnswers;
  onChange: (patch: Partial<QuoteAnswers>) => void;
  errors: Partial<Record<keyof QuoteAnswers, string>>;
};

export const ScheduleStep: React.FC<Props> = ({ answers, onChange, errors }) => {
  const toggleDay = (day: Weekday) => {
    const has = answers.preferredDays.includes(day);
    onChange({
      preferredDays: has
        ? answers.preferredDays.filter((d) => d !== day)
        : [...answers.preferredDays, day],
    });
  };

  return (
    <div className="space-y-8">
      <Section title="Preferred days" hint="Select every day that could work.">
        <div className="flex flex-wrap gap-2">
          {WEEKDAY_OPTIONS.map((d) => {
            const selected = answers.preferredDays.includes(d.id);
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => toggleDay(d.id)}
                aria-pressed={selected}
                className={`min-w-[3.25rem] rounded-lg border px-3 py-2.5 text-sm font-bold transition-colors ${
                  selected
                    ? 'border-secondary bg-secondary text-[#f5f5f5]'
                    : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-white/20'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
        <ErrorText>{errors.preferredDays}</ErrorText>
      </Section>

      <Section title="Preferred time window">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TIME_WINDOW_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.id}
              selected={answers.timeWindow === opt.id}
              title={opt.title}
              blurb={opt.blurb}
              onClick={() => onChange({ timeWindow: opt.id })}
            />
          ))}
        </div>
        <ErrorText>{errors.timeWindow}</ErrorText>
      </Section>

      <Section title="When do you want to start?">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {START_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.id}
              selected={answers.startTimeframe === opt.id}
              title={opt.title}
              onClick={() => onChange({ startTimeframe: opt.id })}
            />
          ))}
        </div>
        <ErrorText>{errors.startTimeframe}</ErrorText>
      </Section>

      <Section title="Site access" hint="How will providers get into the building?">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ACCESS_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.id}
              selected={answers.access === opt.id}
              title={opt.title}
              blurb={opt.blurb}
              onClick={() => onChange({ access: opt.id })}
            />
          ))}
        </div>
        <ErrorText>{errors.access}</ErrorText>
      </Section>

      <Section title="Cleaning supplies">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SUPPLIES_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.id}
              selected={answers.supplies === opt.id}
              title={opt.title}
              blurb={opt.blurb}
              onClick={() => onChange({ supplies: opt.id })}
            />
          ))}
        </div>
        <ErrorText>{errors.supplies}</ErrorText>
      </Section>

      <Field
        label="Special notes"
        htmlFor="quote-notes"
        optional
        hint="Security rules, off-limits areas, hazards, preferred products, parking, etc."
      >
        <textarea
          id="quote-notes"
          rows={3}
          className={`${inputClass} resize-y min-h-[96px]`}
          value={answers.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          placeholder="Anything providers should know before quoting…"
        />
      </Field>
    </div>
  );
};
