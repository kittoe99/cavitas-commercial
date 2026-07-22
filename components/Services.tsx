import React from 'react';
import { useNavigate } from 'react-router-dom';

const IconOffice = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="1.5" />
    <path d="M9 6h6M9 10h6M9 14h2" />
  </svg>
);

const IconJanitorial = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v6" />
    <path d="M9 9h6" />
    <path d="M8 9c0 4 1.5 7 4 11 2.5-4 4-7 4-11" />
    <path d="M7 21h10" />
  </svg>
);

const IconFloor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18h18" />
    <path d="M5 18V10l7-5 7 5v8" />
    <path d="M9 18v-5h6v5" />
  </svg>
);

/** Card hero illustration — office desks & windows */
const ArtOffice = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="officeBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <linearGradient id="officeGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#officeBg)" />
    <ellipse cx="260" cy="30" rx="90" ry="60" fill="url(#officeGlow)" />
    {/* Building facade */}
    <rect x="48" y="36" width="140" height="128" rx="6" fill="#141414" stroke="#2a2a2a" strokeWidth="1.5" />
    <rect x="62" y="50" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.85" />
    <rect x="102" y="50" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="142" y="50" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="62" y="86" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="102" y="86" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.45" />
    <rect x="142" y="86" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="62" y="122" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="102" y="122" width="28" height="22" rx="2" fill="#2a2a2a" />
    <rect x="142" y="122" width="28" height="22" rx="2" fill="#DC2626" fillOpacity="0.25" />
    {/* Desk */}
    <rect x="200" y="118" width="88" height="8" rx="2" fill="#2e2e2e" />
    <rect x="208" y="126" width="6" height="28" fill="#242424" />
    <rect x="274" y="126" width="6" height="28" fill="#242424" />
    <rect x="220" y="98" width="48" height="20" rx="3" fill="#1f1f1f" stroke="#333" />
    <rect x="228" y="104" width="32" height="3" rx="1" fill="#DC2626" />
    {/* Sparkle accents */}
    <circle cx="195" cy="70" r="3" fill="#DC2626" />
    <path d="M292 58l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#DC2626" fillOpacity="0.7" />
  </svg>
);

/** Card hero illustration — mop & bucket */
const ArtJanitorial = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="janBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#141414" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
      <radialGradient id="janGlow" cx="30%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="200" fill="url(#janBg)" />
    <ellipse cx="90" cy="80" rx="100" ry="80" fill="url(#janGlow)" />
    {/* Floor shine lines */}
    <path d="M20 170h280" stroke="#2a2a2a" strokeWidth="2" />
    <path d="M40 178h100" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.5" />
    {/* Bucket */}
    <path d="M118 100h70l-8 58H126z" fill="#1c1c1c" stroke="#333" strokeWidth="1.5" />
    <ellipse cx="153" cy="100" rx="35" ry="10" fill="#242424" stroke="#333" strokeWidth="1.5" />
    <ellipse cx="153" cy="100" rx="24" ry="5" fill="#DC2626" fillOpacity="0.35" />
    <path d="M130 92c0-14 46-14 46 0" fill="none" stroke="#444" strokeWidth="3" strokeLinecap="round" />
    {/* Mop */}
    <line x1="210" y1="36" x2="248" y2="148" stroke="#3a3a3a" strokeWidth="4" strokeLinecap="round" />
    <path d="M236 138c8 4 22 10 28 22-12 2-24 0-34-6-6-8-4-16 6-16z" fill="#DC2626" />
    <path d="M240 142c6 6 14 12 18 20" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
    {/* Checklist card */}
    <rect x="48" y="48" width="52" height="64" rx="6" fill="#1a1a1a" stroke="#2e2e2e" />
    <rect x="58" y="62" width="24" height="3" rx="1.5" fill="#DC2626" />
    <rect x="58" y="74" width="32" height="2.5" rx="1" fill="#3a3a3a" />
    <rect x="58" y="84" width="28" height="2.5" rx="1" fill="#3a3a3a" />
    <rect x="58" y="94" width="30" height="2.5" rx="1" fill="#3a3a3a" />
    <circle cx="88" cy="63.5" r="4" fill="none" stroke="#DC2626" strokeWidth="1.5" />
    <path d="M86 63.5l1.5 1.5 3-3" stroke="#DC2626" strokeWidth="1.25" fill="none" />
  </svg>
);

/** Card hero illustration — polished floor planes */
const ArtFloor = () => (
  <svg viewBox="0 0 320 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="floorBg" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#121212" />
        <stop offset="100%" stopColor="#080808" />
      </linearGradient>
      <linearGradient id="floorShine" x1="0" y1="0.5" x2="1" y2="0.5">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
        <stop offset="45%" stopColor="#DC2626" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#171717" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#floorBg)" />
    {/* Perspective floor tiles */}
    <g stroke="#2a2a2a" strokeWidth="1" fill="url(#tile)">
      <polygon points="40,110 120,110 100,160 10,160" />
      <polygon points="124,110 204,110 194,160 104,160" />
      <polygon points="208,110 288,110 310,160 198,160" />
      <polygon points="10,164 100,164 88,198 0,198" fill="#151515" />
      <polygon points="104,164 194,164 190,198 92,198" fill="#151515" />
      <polygon points="198,164 310,164 320,198 194,198" fill="#151515" />
    </g>
    {/* Gloss streak */}
    <path d="M30 138 Q160 120 290 145" stroke="url(#floorShine)" strokeWidth="6" fill="none" strokeLinecap="round" />
    {/* Buffer machine */}
    <circle cx="168" cy="92" r="28" fill="#1c1c1c" stroke="#333" strokeWidth="2" />
    <circle cx="168" cy="92" r="16" fill="#141414" stroke="#DC2626" strokeWidth="2.5" />
    <circle cx="168" cy="92" r="5" fill="#DC2626" />
    <rect x="162" y="48" width="12" height="28" rx="3" fill="#2a2a2a" />
    <rect x="156" y="40" width="24" height="10" rx="3" fill="#DC2626" />
    {/* Sparkles */}
    <path d="M70 70l1.5 3.5 3.5 1.5-3.5 1.5L70 80l-1.5-3.5L65 75l3.5-1.5z" fill="#DC2626" fillOpacity="0.8" />
    <path d="M250 58l1.5 3.5 3.5 1.5-3.5 1.5L250 68l-1.5-3.5L245 63l3.5-1.5z" fill="#fff" fillOpacity="0.35" />
  </svg>
);

const serviceGroups = [
  {
    title: 'Office Cleaning',
    description:
      'Keep your workplace polished with scheduled office cleaning built around your hours and traffic. Independent providers handle desks, common areas, restrooms, and breakrooms so your team can focus on work—not the mess. Choose daily, weekly, or custom visits matched to your needs.',
    path: '/services/office-cleaning',
    Art: ArtOffice,
    Icon: IconOffice,
  },
  {
    title: 'Janitorial Services',
    description:
      'Full-service commercial janitorial programs customized to your facility, schedule, and maintenance needs. From trash and restocking to detailed restroom care and after-hours cleaning, we connect you with providers who cover the day-to-day work that keeps your building running smoothly.',
    path: '/services/janitorial',
    Art: ArtJanitorial,
    Icon: IconJanitorial,
  },
  {
    title: 'Floor Care',
    description:
      'Protect high-traffic floors with professional strip, wax, buff, and deep carpet cleaning. We match you with independent specialists who restore hard surfaces and carpets so lobbies, corridors, and workspaces look sharp and last longer.',
    path: '/services/floor-care',
    Art: ArtFloor,
    Icon: IconFloor,
  },
];

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[var(--bg-alt)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-7 sm:mb-10 md:mb-14 max-w-2xl mx-auto">
          <h2 className="text-[1.45rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-secondary tracking-tight leading-tight mb-2.5 sm:mb-4">
            How Cavitas Can Help You
          </h2>
          <p className="text-[var(--text-muted)] text-[13px] sm:text-base leading-relaxed">
            We connect your business with independent providers for office cleaning, janitorial programs, and floor care—matched to your facility and schedule.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-5 lg:gap-6">
          {serviceGroups.map((group) => (
            <article key={group.title} className="relative group service-card">
              <div
                className="relative flex h-full flex-col bg-[var(--surface-2)] shadow-[0_10px_40px_rgba(0,0,0,0.28)] overflow-hidden border border-[var(--border)] transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)] group-hover:border-white/15"
                style={{
                  borderRadius: '1rem',
                  WebkitMaskImage:
                    'radial-gradient(circle 2.65rem at calc(100% - 0.15rem) calc(100% - 0.15rem), transparent 2.6rem, #000 2.65rem)',
                  maskImage:
                    'radial-gradient(circle 2.65rem at calc(100% - 0.15rem) calc(100% - 0.15rem), transparent 2.6rem, #000 2.65rem)',
                }}
              >
                <div className="p-2.5 sm:p-3 pb-0">
                  <div className="aspect-[16/9] sm:aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl bg-[#141414] transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <group.Art />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 sm:px-5 pt-4 sm:pt-5 pb-9 sm:pb-10 min-h-0 sm:min-h-[14rem]">
                  <h3 className="font-bold text-[1rem] sm:text-[1.05rem] text-[var(--text)] tracking-tight mb-1.5 sm:mb-2.5">
                    {group.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4 sm:mb-6 flex-1 line-clamp-4 sm:line-clamp-none">
                    {group.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate(group.path)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-secondary-400 transition-colors self-start group/learn"
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover/learn:translate-x-1"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate(group.path)}
                className="absolute bottom-0 right-0 z-10 flex h-[2.85rem] w-[2.85rem] sm:h-[3.35rem] sm:w-[3.35rem] items-center justify-center rounded-full bg-secondary text-[#f5f5f5] shadow-md transition-all duration-400 ease-out hover:bg-secondary-700 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)]"
                aria-label={`Learn more about ${group.title}`}
              >
                <group.Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem] transition-transform duration-500 group-hover:rotate-6" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
