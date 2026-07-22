import React from 'react';
import {
  START_OPTIONS,
  TIME_WINDOW_OPTIONS,
  WEEKDAY_OPTIONS,
  type QuoteAnswers,
  type Weekday,
} from '../quoteTypes';
import { OptionCard } from '../QuoteField';

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
    <div className="space-y-7">
      <div>
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
          Preferred days
        </p>
        <div className="flex flex-wrap gap-2">
          {WEEKDAY_OPTIONS.map((d) => {
            const selected = answers.preferredDays.includes(d.id);
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => toggleDay(d.id)}
                className={`rounded-none min-w-[3.25rem] rounded-lg border px-3 py-2.5 text-sm font-bold transition-colors ${
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
        {errors.preferredDays && <p className="mt-2 text-sm text-secondary">{errors.preferredDays}</p>}
      </div>

      <div>
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
          Preferred time window
        </p>
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
        {errors.timeWindow && <p className="mt-2 text-sm text-secondary">{errors.timeWindow}</p>}
      </div>

      <div>
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
          When do you want to start?
        </p>
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
        {errors.startTimeframe && <p className="mt-2 text-sm text-secondary">{errors.startTimeframe}</p>}
      </div>
    </div>
  );
};
