import React from 'react';

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  /** `light` = dark wordmark for white backgrounds */
  variant?: 'dark' | 'light';
};

/** Cavitas mark — open C with a clean sparkle accent */
export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect width="40" height="40" rx="10" fill="#DC2626" />
    {/* Open C */}
    <path
      d="M28.5 12.2C26.4 10.5 23.8 9.5 20.8 9.5c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2c3 0 5.6-1 7.7-2.7"
      stroke="#fff"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    {/* Clean sparkle */}
    <path
      d="M30.2 9.2l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2 1.2-2.8z"
      fill="#fff"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = '',
  markClassName = 'w-9 h-9',
  showWordmark = true,
  wordmarkClassName = '',
  variant = 'dark',
}) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark className={markClassName} />
    {showWordmark && (
      <span
        className={`font-extrabold text-lg tracking-tight leading-none ${
          variant === 'light' ? 'text-[#111]' : 'text-[var(--text)]'
        } ${wordmarkClassName}`}
      >
        Cavitas
        <span
          className={`font-medium hidden sm:inline ${
            variant === 'light' ? 'text-[#555]' : 'text-[var(--text-muted)]'
          }`}
        >
          {' '}
          Cleaning
        </span>
      </span>
    )}
  </span>
);
