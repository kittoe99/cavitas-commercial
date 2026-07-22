import React from 'react';

type OptionCardProps = {
  selected: boolean;
  title: string;
  blurb?: string;
  onClick: () => void;
};

export const OptionCard: React.FC<OptionCardProps> = ({ selected, title, blurb, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-none text-left w-full rounded-xl border px-4 py-3.5 transition-colors ${
      selected
        ? 'border-secondary bg-secondary/10 text-[var(--text)]'
        : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-white/20'
    }`}
  >
    <span className="block text-sm font-bold tracking-tight">{title}</span>
    {blurb && <span className="mt-1 block text-[13px] text-[var(--text-muted)] leading-snug">{blurb}</span>}
  </button>
);

type FieldProps = {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  hint?: string;
};

export const Field: React.FC<FieldProps> = ({ label, htmlFor, children, hint }) => (
  <label className="block" htmlFor={htmlFor}>
    <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
      {label}
    </span>
    {children}
    {hint && <span className="mt-1.5 block text-[12px] text-[var(--text-muted)]">{hint}</span>}
  </label>
);

export const inputClass =
  'w-full rounded-lg border border-white/12 bg-[var(--bg)] px-3.5 py-3 text-sm text-[var(--text)] outline-none';

export const selectClass = inputClass;
