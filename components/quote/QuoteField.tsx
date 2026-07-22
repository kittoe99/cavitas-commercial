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
    aria-pressed={selected}
    className={`group relative w-full rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
      selected
        ? 'border-secondary bg-secondary/[0.12] shadow-[inset_0_0_0_1px_rgba(220,38,38,0.35)]'
        : 'border-[var(--border)] bg-[var(--bg)] hover:border-white/18 hover:bg-white/[0.02]'
    }`}
  >
    <span
      className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
        selected ? 'border-secondary bg-secondary text-white' : 'border-white/15 text-transparent'
      }`}
      aria-hidden
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
    <span className="block pr-7 text-sm font-bold tracking-tight text-[var(--text)]">{title}</span>
    {blurb && (
      <span className="mt-1 block pr-6 text-[13px] leading-snug text-[var(--text-muted)]">{blurb}</span>
    )}
  </button>
);

type ChipProps = {
  selected: boolean;
  title: string;
  onClick: () => void;
};

export const OptionChip: React.FC<ChipProps> = ({ selected, title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={`rounded-lg border px-3.5 py-2.5 text-left text-[13px] font-semibold transition-colors ${
      selected
        ? 'border-secondary bg-secondary text-[#f5f5f5]'
        : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-white/20'
    }`}
  >
    {title}
  </button>
);

type FieldProps = {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  hint?: string;
  optional?: boolean;
};

export const Field: React.FC<FieldProps> = ({ label, htmlFor, children, hint, optional }) => (
  <div className="block">
    <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline gap-2">
      <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </span>
      {optional && <span className="text-[11px] font-medium text-[#6a6a6a]">Optional</span>}
    </label>
    {children}
    {hint && <p className="mt-1.5 text-[12px] leading-snug text-[var(--text-muted)]">{hint}</p>}
  </div>
);

type SectionProps = {
  title: string;
  hint?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ title, hint, children }) => (
  <div className="space-y-3">
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">{title}</h3>
      {hint && <p className="mt-1 text-[13px] text-[var(--text-muted)] leading-snug">{hint}</p>}
    </div>
    {children}
  </div>
);

export const inputClass =
  'w-full rounded-xl border border-[#c8c8c8] bg-[#f0f0f0] px-3.5 py-3 text-sm text-[#1a1a1a] outline-none transition-shadow placeholder:text-[#6b6b6b] hover:border-[#a8a8a8] hover:bg-[#f5f5f5] focus:border-secondary focus:bg-[#fafafa]';

export const selectClass = inputClass;

export const ErrorText: React.FC<{ children?: string }> = ({ children }) =>
  children ? <p className="mt-2 text-sm text-secondary">{children}</p> : null;
