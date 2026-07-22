import React from 'react';
import { HeroTrustBar } from './HeroTrustBar';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] md:min-h-[calc((100svh-var(--site-header-height))*0.72)]">
      <div className="relative z-10 flex h-full items-center px-4 sm:px-8 lg:px-14 xl:px-20 pt-7 pb-8 sm:pt-10 sm:pb-10 md:py-12">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-slide-up">
          <div className="relative z-10 max-w-xl md:max-w-none md:pr-2">
            <h1 className="font-serif text-[1.35rem] sm:text-[2rem] md:text-[2.25rem] font-semibold leading-[1.2] tracking-tight text-[var(--text)] mb-2.5 sm:mb-4 animate-fade-in-up">
              Commercial cleaning providers, matched to your business.
            </h1>
            <p className="text-[13px] sm:text-base leading-relaxed text-[var(--text-muted)] mb-5 sm:mb-7 max-w-md animate-fade-in-up delay-200">
              We connect businesses with independent service providers for office cleaning, janitorial programs, and floor care across the metro area.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-5 sm:px-7 py-2.5 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold text-[#f5f5f5] hover:bg-secondary-700 transition-colors animate-fade-in-up delay-300"
            >
              Get a quote
            </a>

            <HeroTrustBar />
          </div>

          <div className="relative md:-ml-4 lg:-ml-8 justify-self-center md:justify-self-end w-full max-w-[220px] sm:max-w-[340px] md:max-w-none animate-fade-in delay-200">
            <img
              src="/cavitas-commercial-cleaners.png"
              alt="Independent commercial cleaner wiping a surface"
              className="w-full h-auto max-h-[180px] sm:max-h-[300px] md:max-h-[min(400px,52vh)] object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" aria-hidden />
    </section>
  );
};
