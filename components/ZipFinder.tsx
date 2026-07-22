import React, { useState } from 'react';

export const ZipFinder: React.FC = () => {
  const [zip, setZip] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            <div className="relative flex items-center justify-center min-h-[180px] md:min-h-[220px]">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
                <svg className="absolute inset-3 text-white/10" viewBox="0 0 100 100" fill="none" aria-hidden>
                  <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" />
                  <path d="M20 55 Q35 40 50 48 T80 42" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M25 70 Q45 58 60 65 T85 55" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg className="relative w-12 h-12 text-secondary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] text-[var(--text)] tracking-tight leading-tight mb-2">
                Find Providers Near You
              </h2>
              <p className="text-[var(--text-muted)] text-[15px] mb-5">
                Tell us where you are—we’ll connect you with independent cleaning pros in your area.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 mb-4 max-w-lg">
                <label className="relative flex-1">
                  <span className="sr-only">Zip / Postal Code</span>
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9A-Za-z ]{3,10}"
                    maxLength={10}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Enter Zip/Postal Code"
                    className="w-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border border-white/12 border-b-0 sm:border-b sm:border-r-0 bg-[var(--bg)] pl-10 pr-4 py-3.5 text-sm text-[var(--text)] outline-none focus:border-secondary"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="shrink-0 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none bg-secondary px-5 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors"
                >
                  Find Providers Near Me
                </button>
              </form>

              <p className="text-sm font-bold text-[#d4d4d4]">
                Call us at{' '}
                <a href="tel:8336931311" className="text-secondary hover:underline">
                  (833) 693-1311
                </a>
                {' '}or{' '}
                <a href="/quote" className="text-secondary hover:underline">
                  get a detailed quote
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
