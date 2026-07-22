import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] md:h-[calc((100svh-var(--site-header-height))*0.65)] md:min-h-[380px] md:max-h-[560px]">
      <div className="relative z-10 flex h-full items-center px-4 sm:px-8 lg:px-14 xl:px-20 pt-10 pb-8 md:py-0">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 animate-slide-up">
          <div className="relative z-10 max-w-xl md:pr-2">
            <p className="font-serif text-[2.75rem] sm:text-[3.25rem] md:text-[3.5rem] font-semibold leading-[0.95] tracking-tight text-secondary mb-5 animate-fade-in">
              Civitas
            </p>
            <h1 className="font-serif text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-[var(--text)] mb-4 animate-fade-in-up delay-100">
              Commercial cleaning providers, matched to your business.
            </h1>
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-muted)] mb-8 max-w-md animate-fade-in-up delay-200">
              We connect businesses with independent service providers for office cleaning, janitorial programs, and floor care across the metro area.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-[15px] font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors animate-fade-in-up delay-300"
            >
              Get a quote
            </a>
          </div>

          <div className="relative md:-ml-6 lg:-ml-10 xl:-ml-14 justify-self-center md:justify-self-end w-full max-w-[300px] sm:max-w-[340px] md:max-w-none animate-fade-in delay-200">
            <img
              src="/cavitas-commercial-cleaners.png"
              alt="Independent commercial cleaner wiping a surface"
              className="w-full h-auto max-h-[280px] sm:max-h-[320px] md:max-h-[min(420px,calc((100svh-var(--site-header-height))*0.58))] object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" aria-hidden />
    </section>
  );
};
