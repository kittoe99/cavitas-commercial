import React from 'react';

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  /** `light` = dark wordmark for white backgrounds */
  variant?: 'dark' | 'light';
  /** Compact = smaller subtitle for tight nav headers */
  size?: 'default' | 'compact';
};

/** Cavitas mark — open C with a clean sparkle accent */
export const LogoMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect width="48" height="48" rx="12" fill="#DC2626" />
    <path
      d="M34 14.5C31.4 12.4 28.2 11.2 24.6 11.2c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4c3.6 0 6.8-1.2 9.4-3.3"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M36.2 11l1.45 3.35 3.35 1.45-3.35 1.45L36.2 20.6l-1.45-3.35-3.35-1.45 3.35-1.45L36.2 11z"
      fill="#fff"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = '',
  markClassName,
  showWordmark = true,
  wordmarkClassName = '',
  variant = 'dark',
  size = 'default',
}) => {
  const isLight = variant === 'light';
  const compact = size === 'compact';
  const markSize = markClassName ?? (compact ? 'w-9 h-9' : 'w-10 h-10');

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 text-left ${className}`}>
      <LogoMark className={markSize} />
      {showWordmark && (
        <span className={`flex flex-col items-start justify-center text-left leading-none ${wordmarkClassName}`}>
          <span
            className={`font-extrabold tracking-tight ${
              compact ? 'text-[1.05rem] sm:text-[1.15rem]' : 'text-[1.15rem] sm:text-[1.3rem]'
            } ${isLight ? 'text-[#111]' : 'text-[var(--text)]'}`}
          >
            Cavitas
          </span>
          <span
            className={`mt-0.5 font-semibold uppercase tracking-[0.04em] ${
              compact ? 'text-[8.5px] sm:text-[9.5px]' : 'text-[9px] sm:text-[10.5px]'
            } ${isLight ? 'text-[#555]' : 'text-[var(--text-muted)]'}`}
          >
            Commercial Cleaning
          </span>
        </span>
      )}
    </span>
  );
};
