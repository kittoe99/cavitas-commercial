import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { normalizePostalInput, parsePostalCode } from '../lib/postalCode';

const CHECK_MS = 1500;
const FOUND_MS = 500;

type Phase = 'idle' | 'checking' | 'found';

export const ZipFinder: React.FC = () => {
  const navigate = useNavigate();
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [resolvedZip, setResolvedZip] = useState('');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phase !== 'idle') return;

    const parsed = parsePostalCode(zip);
    if (parsed.ok === false) {
      setError(parsed.error);
      return;
    }

    setError('');
    setZip(parsed.formatted);
    setResolvedZip(parsed.formatted);
    setPhase('checking');

    timerRef.current = window.setTimeout(() => {
      setPhase('found');
      timerRef.current = window.setTimeout(() => {
        const params = new URLSearchParams({ zip: parsed.formatted });
        navigate(`/quote?${params.toString()}`);
      }, FOUND_MS);
    }, CHECK_MS);
  };

  const busy = phase !== 'idle';

  return (
    <section id="contact" className="bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="relative rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
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

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 mb-2 max-w-lg" noValidate>
                <label className="relative flex-1">
                  <span className="sr-only">Zip / Postal Code</span>
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>
                  </span>
                  <input
                    type="text"
                    inputMode="text"
                    autoComplete="postal-code"
                    maxLength={12}
                    value={zip}
                    disabled={busy}
                    onChange={(e) => {
                      setZip(normalizePostalInput(e.target.value));
                      if (error) setError('');
                    }}
                    placeholder="Enter Zip/Postal Code"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'zip-error' : undefined}
                    className={`w-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border border-b-0 sm:border-b sm:border-r-0 bg-[#f0f0f0] pl-10 pr-4 py-3.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#6b6b6b] hover:bg-[#f5f5f5] focus:border-secondary focus:bg-[#fafafa] disabled:opacity-70 ${
                      error ? 'border-secondary' : 'border-[#c8c8c8]'
                    }`}
                    required
                  />
                </label>
                <button
                  type="submit"
                  disabled={busy}
                  className="shrink-0 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none bg-secondary px-5 py-3.5 text-sm font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors disabled:opacity-70 disabled:cursor-wait"
                >
                  Find Providers Near Me
                </button>
              </form>

              {error && (
                <p id="zip-error" className="mb-3 text-sm font-semibold text-secondary" role="alert">
                  {error}
                </p>
              )}

              <p className="text-sm font-bold text-[#d4d4d4]">
                Call us at{' '}
                <a href="tel:8336931311" className="text-secondary hover:underline">
                  (833) 693-1311
                </a>
                {' '}or{' '}
                <a href="/quote" className="text-secondary hover:underline">
                  View Pricing
                </a>
              </p>
            </div>
          </div>

          {busy && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(12,12,12,0.88)] backdrop-blur-[2px] px-6"
              role="status"
              aria-live="polite"
            >
              <div className="w-full max-w-sm text-center zip-check-panel">
                {phase === 'checking' && (
                  <>
                    <div className="relative mx-auto mb-5 h-20 w-20">
                      <span className="absolute inset-0 rounded-full border-2 border-secondary/25 zip-check-ring" />
                      <span className="absolute inset-2 rounded-full border-2 border-transparent border-t-secondary zip-check-spin" />
                      <span className="absolute inset-0 flex items-center justify-center text-secondary">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                      </span>
                    </div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">
                      Checking coverage
                    </p>
                    <p className="font-serif text-[1.45rem] sm:text-[1.65rem] text-white tracking-tight leading-tight mb-2">
                      Looking for providers near {resolvedZip}…
                    </p>
                    <p className="text-sm text-[#b0b0b0]">Confirming service availability in your area.</p>
                    <div className="mt-5 mx-auto h-1 max-w-[200px] overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-secondary zip-check-bar" />
                    </div>
                  </>
                )}

                {phase === 'found' && (
                  <>
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary zip-check-pop">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-secondary mb-2">
                      Providers available
                    </p>
                    <p className="font-serif text-[1.45rem] sm:text-[1.65rem] text-white tracking-tight leading-tight mb-2">
                      Great news — we serve {resolvedZip}.
                    </p>
                    <p className="text-sm text-[#b0b0b0]">Taking you to pricing…</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
