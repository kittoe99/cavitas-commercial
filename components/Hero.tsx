import React from 'react';

const HeroArt = () => (
  <svg
    viewBox="0 0 560 480"
    className="w-full h-auto max-h-[260px] sm:max-h-[300px] md:max-h-[420px] lg:max-h-none hero-art"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <linearGradient id="heroGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.38" />
        <stop offset="60%" stopColor="#DC2626" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="floorPlane" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e1e1e" />
        <stop offset="100%" stopColor="#141414" />
      </linearGradient>
      <linearGradient id="floorGloss" x1="0" y1="0.5" x2="1" y2="0.5">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
        <stop offset="40%" stopColor="#DC2626" stopOpacity="0.7" />
        <stop offset="70%" stopColor="#fff" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="glassFace" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#101010" />
      </linearGradient>
      <clipPath id="floorClip">
        <polygon points="48,300 280,248 512,300 512,420 48,420" />
      </clipPath>
    </defs>

    {/* Ambient wash */}
    <ellipse cx="310" cy="150" rx="200" ry="160" fill="url(#heroGlow)" />

    {/* Single clean glass wall — less busy than a skyline */}
    <rect x="210" y="72" width="200" height="210" rx="6" fill="url(#glassFace)" stroke="#2e2e2e" strokeWidth="1.5" />
    <line x1="310" y1="72" x2="310" y2="282" stroke="#262626" strokeWidth="1.25" />
    <line x1="210" y1="142" x2="410" y2="142" stroke="#262626" strokeWidth="1.25" />
    <line x1="210" y1="212" x2="410" y2="212" stroke="#262626" strokeWidth="1.25" />
    {/* Lit panes — deep clean glow */}
    <rect x="224" y="88" width="70" height="40" rx="2" fill="#DC2626" fillOpacity="0.55" className="hero-pane" />
    <rect x="326" y="88" width="70" height="40" rx="2" fill="#222" />
    <rect x="224" y="158" width="70" height="40" rx="2" fill="#1f1f1f" />
    <rect x="326" y="158" width="70" height="40" rx="2" fill="#DC2626" fillOpacity="0.28" className="hero-pane-delay" />
    <rect x="224" y="228" width="70" height="40" rx="2" fill="#1f1f1f" />
    <rect x="326" y="228" width="70" height="40" rx="2" fill="#1f1f1f" />

    {/* Diagonal shine on glass */}
    <path d="M250 78 L292 78 L268 276 L226 276 Z" fill="#fff" fillOpacity="0.05" className="hero-glass-shine" />

    {/* Polished floor — the deep-clean focal point */}
    <polygon points="48,300 280,248 512,300 512,420 48,420" fill="url(#floorPlane)" stroke="#2a2a2a" strokeWidth="1.5" />
    <g clipPath="url(#floorClip)">
      <line x1="120" y1="310" x2="280" y2="272" stroke="#262626" strokeWidth="1" />
      <line x1="200" y1="340" x2="280" y2="290" stroke="#262626" strokeWidth="1" />
      <line x1="280" y1="272" x2="440" y2="310" stroke="#262626" strokeWidth="1" />
      <line x1="280" y1="290" x2="360" y2="340" stroke="#262626" strokeWidth="1" />
      {/* Animated gloss streak */}
      <path
        d="M70 350 Q280 290 490 355"
        fill="none"
        stroke="url(#floorGloss)"
        strokeWidth="10"
        strokeLinecap="round"
        className="hero-gloss"
      />
      <path
        d="M90 380 Q280 330 470 385"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.08"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    {/* Soft reflection of building on floor */}
    <path d="M250 300 L310 286 L370 300 L350 340 L270 340 Z" fill="#DC2626" fillOpacity="0.06" />

    {/* Cleaning professional — foreground */}
    <g className="hero-cleaner">
      {/* Soft ground shadow */}
      <ellipse cx="148" cy="392" rx="52" ry="10" fill="#000" fillOpacity="0.35" />

      {/* Mop handle (behind body) */}
      <line x1="198" y1="168" x2="228" y2="355" stroke="#3a3a3a" strokeWidth="5" strokeLinecap="round" />
      {/* Mop head */}
      <path d="M214 348c10 6 28 14 36 28-14 3-30 1-44-8-8-10-4-20 8-20z" fill="#DC2626" />
      <path d="M220 354c8 8 18 14 24 24" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
      {/* Mop yarn strands */}
      <path d="M218 368c2 8 4 14 3 18M228 370c1 8 2 14 1 18M238 368c0 8 1 14 0 18" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" />

      {/* Legs */}
      <path d="M132 318 L124 378" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" />
      <path d="M158 318 L168 378" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" />
      {/* Shoes */}
      <path d="M110 376h22c4 0 6 3 6 6h-30c0-3 2-6 2-6z" fill="#0f0f0f" />
      <path d="M158 376h26c4 0 6 3 6 6h-34c0-3 2-6 2-6z" fill="#0f0f0f" />

      {/* Torso / uniform */}
      <path d="M118 210c0-4 8-12 28-12s28 8 28 12v98c0 8-10 14-28 14s-28-6-28-14V210z" fill="#1c1c1c" stroke="#333" strokeWidth="1.5" />
      {/* Red uniform accent stripe */}
      <path d="M146 200v108" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
      {/* Collar */}
      <path d="M132 200 L146 212 L160 200" fill="none" stroke="#2a2a2a" strokeWidth="2" />

      {/* Arms */}
      <path d="M118 220 C96 248 100 280 112 300" fill="none" stroke="#1c1c1c" strokeWidth="12" strokeLinecap="round" />
      <path d="M174 220 C188 240 200 270 210 300" fill="none" stroke="#1c1c1c" strokeWidth="12" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="112" cy="302" r="7" fill="#2a2a2a" />
      <circle cx="210" cy="302" r="7" fill="#2a2a2a" />

      {/* Head */}
      <circle cx="146" cy="168" r="28" fill="#2a2a2a" />
      {/* Face plane (softer) */}
      <ellipse cx="146" cy="174" rx="18" ry="20" fill="#333" />
      {/* Cap / visor */}
      <path d="M118 158c4-22 52-22 56 0v6H118z" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <path d="M116 162h60c2 0 4 2 4 4h-68c0-2 2-4 4-4z" fill="#DC2626" />
      {/* Cap brim */}
      <path d="M170 164h18c3 0 4 3 2 5h-20z" fill="#B91C1C" />
    </g>

    {/* Sparkles — deep clean */}
    <g className="hero-sparkle">
      <path d="M448 110l3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5z" fill="#DC2626" />
    </g>
    <g className="hero-sparkle-delay">
      <path d="M88 200l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#DC2626" fillOpacity="0.75" />
    </g>
    <g className="hero-sparkle">
      <circle cx="430" cy="330" r="3" fill="#fff" fillOpacity="0.4" />
    </g>
    <g className="hero-sparkle-delay">
      <path d="M248 340l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#DC2626" fillOpacity="0.85" />
    </g>
    <circle cx="100" cy="280" r="2.5" fill="#DC2626" fillOpacity="0.45" className="hero-sparkle-delay" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] md:h-[calc((100svh-var(--site-header-height))*0.65)] md:min-h-[365px] md:max-h-[560px]">
      {/* Desktop — art on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:flex w-[52%] lg:w-[48%] xl:w-[46%] items-center justify-end pr-4 lg:pr-10 xl:pr-16 animate-fade-in delay-200">
        <HeroArt />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end sm:justify-center gap-6 md:gap-0 px-4 sm:px-8 lg:px-14 xl:px-20 pt-10 pb-10 sm:pb-12 md:pb-0 md:pt-0">
        <div className="w-full max-w-[28rem] sm:max-w-[34rem] animate-slide-up">
          <p className="font-serif text-[2.4rem] sm:text-[2.9rem] font-semibold leading-none tracking-tight text-secondary mb-5 animate-fade-in">
            Civitas
          </p>
          <h1 className="font-serif text-[1.6rem] sm:text-[1.85rem] font-semibold leading-[1.18] tracking-tight text-[var(--text)] mb-4 animate-fade-in-up delay-100">
            Here for the deep clean.
          </h1>
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-muted)] mb-8 animate-fade-in-up delay-200">
            Local commercial cleaning for offices, medical facilities, and businesses across the metro area.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-[15px] font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors animate-fade-in-up delay-300"
          >
            Get a quote
          </a>
        </div>

        {/* Mobile — art under copy */}
        <div className="md:hidden w-full max-w-md mx-auto -mb-2 animate-fade-in delay-200" aria-hidden>
          <HeroArt />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" aria-hidden />
    </section>
  );
};
