import React from 'react';

const PromiseArt = () => (
  <svg
    viewBox="0 0 480 400"
    className="w-full h-auto max-w-lg mx-auto lg:max-w-none promise-art"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <linearGradient id="promiseGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="shieldFill" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#1f1f1f" />
        <stop offset="100%" stopColor="#121212" />
      </linearGradient>
    </defs>

    <ellipse cx="240" cy="200" rx="180" ry="160" fill="url(#promiseGlow)" className="promise-glow" />

    <circle cx="240" cy="200" r="148" fill="none" stroke="#2a2a2a" strokeWidth="1.5" />
    <circle
      cx="240"
      cy="200"
      r="132"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2"
      strokeOpacity="0.35"
      strokeDasharray="6 10"
      className="promise-ring"
      style={{ transformOrigin: '240px 200px' }}
    />

    <path
      d="M240 78c-48 18-92 22-112 24v86c0 62 42 108 112 134 70-26 112-72 112-134v-86c-20-2-64-6-112-24z"
      fill="url(#shieldFill)"
      stroke="#3a3a3a"
      strokeWidth="2"
    />
    <path
      d="M240 98c-36 14-70 17-86 18v68c0 48 32 84 86 106 54-22 86-58 86-106v-68c-16-1-50-4-86-18z"
      fill="#161616"
      stroke="#DC2626"
      strokeWidth="2"
      strokeOpacity="0.5"
    />

    <path
      d="M188 198l28 28 64-68"
      fill="none"
      stroke="#DC2626"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="promise-check"
    />

    <path d="M92 120l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#DC2626" className="hero-sparkle" />
    <path d="M380 148l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#DC2626" fillOpacity="0.7" className="hero-sparkle-delay" />
    <circle cx="360" cy="280" r="4" fill="#DC2626" fillOpacity="0.5" className="hero-sparkle" />
    <circle cx="110" cy="260" r="3" fill="#fff" fillOpacity="0.25" />

    <g className="promise-badge">
      <rect x="318" y="292" width="88" height="36" rx="18" fill="#1a1a1a" stroke="#DC2626" strokeWidth="1.5" />
      <text x="362" y="315" textAnchor="middle" fill="#DC2626" fontSize="12" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="700">
        GUARANTEED
      </text>
    </g>
  </svg>
);

export const PromiseSection: React.FC = () => {
  return (
    <section className="bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-secondary mb-3">Our Promise</p>
            <h2 className="font-serif text-[1.85rem] sm:text-[2.15rem] md:text-[2.4rem] text-[var(--text)] tracking-tight leading-tight mb-5">
              Done right, or we make it right.
            </h2>
            <p className="text-[var(--text-muted)] text-[15px] sm:text-base leading-relaxed mb-6 max-w-md">
              If something isn’t up to standard, tell us by the next business day and we’ll work with your provider to make it right—at no extra cost. That’s the Cavitas guarantee.
            </p>
            <ul className="space-y-3 mb-8">
              {['Vetted independent providers', 'Insured pros for peace of mind', 'Matched to your facility—not one-size-fits-all'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#d4d4d4]">
                  <svg className="w-5 h-5 shrink-0 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-400 transition-colors group/link">
              Get a free quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="animate-fade-in-up delay-100">
            <PromiseArt />
          </div>
        </div>
      </div>
    </section>
  );
};
