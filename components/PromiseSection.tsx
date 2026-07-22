import React from 'react';

export const PromiseSection: React.FC = () => {
  return (
    <section className="bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="lg:order-2">
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
            <a href="/quote" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-400 transition-colors group/link">
              View Pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="lg:order-1 animate-fade-in-up delay-100 justify-self-center lg:justify-self-start w-full">
            <img
              src="/cavitas-promise-guarantee.png"
              alt="Cavitas commercial cleaner giving a thumbs-up — done right guarantee"
              className="w-full h-auto max-h-[260px] sm:max-h-[360px] lg:max-h-[min(440px,52vh)] object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
