import React from 'react';

const features = [
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="14" x2="15" y2="14"/>
      </svg>
    ),
    title: 'Workstation Sanitizing',
    desc: 'All desks, keyboards, phones, and high-touch surfaces are thoroughly disinfected to reduce germ spread.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: 'Trash & Recycling',
    desc: 'All waste bins are emptied, liners replaced, and recyclables are sorted per your facility\'s program.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Floor Care',
    desc: 'Hard floors are vacuumed and damp-mopped. Carpets are thoroughly vacuumed with spot treatment as needed.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    title: 'Restroom Sanitation',
    desc: 'Toilets, sinks, mirrors, and counters are cleaned and disinfected. Soap, paper, and supplies are restocked.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Glass & Surface Cleaning',
    desc: 'Interior glass, mirrors, partitions, and common area surfaces are polished to a streak-free shine.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Detail Touch-Ups',
    desc: 'Light switches, door handles, baseboards, and air vents are wiped down for a truly clean environment.',
  },
];

const checklist = [
  'Empty all trash and recycling bins; replace liners',
  'Dust and sanitize all desks, workstations, and keyboards',
  'Wipe down door handles, light switches, and high-touch areas',
  'Vacuum all carpeted areas and floor mats',
  'Damp-mop all hard surface flooring',
  'Clean and disinfect restroom fixtures, mirrors, and counters',
  'Restock soap, paper towels, and toilet paper',
  'Clean interior glass partitions and entryway glass',
  'Wipe down kitchen/breakroom counters and appliances',
  'Inspect and report any maintenance issues observed',
];

const faqs = [
  {
    q: 'How often should my office be cleaned?',
    a: 'Most offices benefit from daily or 3x/week cleaning for high-traffic areas and restrooms. We recommend a minimum of weekly service. We\'ll work with you to determine the right frequency based on your office size, employee count, and foot traffic.',
  },
  {
    q: 'Do you provide your own equipment and supplies?',
    a: 'Yes. Our teams arrive fully equipped with commercial-grade vacuums, mops, microfiber cloths, and EPA-registered cleaning solutions. If you prefer we use specific products, we can accommodate that as well.',
  },
  {
    q: 'What hours do you clean?',
    a: 'We offer flexible scheduling including after-hours, early morning, and weekend service to minimize disruption to your business operations. Our standard evening window is 6:00 PM – 1:00 AM.',
  },
  {
    q: 'Are your cleaners background checked?',
    a: 'Absolutely. Every team member undergoes a thorough background check, is fully trained, uniformed, and insured. You can trust that the people in your facility are professionals.',
  },
  {
    q: 'What if something gets missed?',
    a: 'Your satisfaction is guaranteed. If anything doesn\'t meet your standards, just let us know within 24 hours and we\'ll return to address it at no additional charge.',
  },
];

export const OfficeCleaningPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Page Hero */}
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">
              Office Cleaning
            </h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">
              Daily, weekly, or bi-weekly comprehensive cleaning for offices of all sizes. We keep your workplace spotless so you can focus on your business.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full">
              <a href="#contact" className="shrink-0 px-6 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 !rounded-full transition-colors inline-block">
                Get a Free Estimate
              </a>
              <a href="#details" className="shrink-0 py-3 text-sm font-medium text-white hover:text-neutral-300 transition-colors">
                Learn more
              </a>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#141414] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              <span className="w-16 h-16 rounded-xl border border-white/15 bg-white/5" data-icon-slot aria-hidden />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="max-w-[72rem] mx-auto px-8 xl:px-10 pt-8 xl:pt-10 pb-12">
            <div className="grid grid-cols-2 gap-12 xl:gap-14 items-center">
              <div className="max-w-[28rem] animate-slide-up" style={{ animationDelay: '0.05s' }}>
                <p className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">Services</p>
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">
                  Office Cleaning
                </h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">
                  Daily, weekly, or bi-weekly comprehensive cleaning for offices of all sizes. We keep your workplace spotless so you can focus on your business.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#contact"
                    className="!rounded-full px-7 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 inline-flex items-center gap-2 transition-colors"
                  >
                    Get a Free Estimate
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                  <a href="#details" className="text-sm font-medium text-white hover:text-neutral-300 transition-colors">Learn more below</a>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
                <div className="aspect-[5/4] w-full rounded-[1.5rem] border border-white/10 bg-[#141414] flex items-center justify-center">
                  <span className="w-20 h-20 rounded-xl border border-white/15 bg-white/5" data-icon-slot aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="details" className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What we do</p>
            <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">
              A thorough clean, every single time.
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#141414] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors">
                  <f.icon className="w-7 h-7 text-white group-hover:text-neutral-300 transition-colors" />
                </div>
                <h3 className="font-bold text-[15px] text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[18rem] mx-auto">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + FAQ side by side */}
      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Checklist */}
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Standard scope</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">
                What a typical office clean includes.
              </h2>
              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-sm text-neutral-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Common questions</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">
                Frequently asked.
              </h2>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-sm text-white mb-1.5">{faq.q}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Pricing</p>
            <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight mb-3">
              Cleaning plans built for your office.
            </h2>
            <p className="text-sm text-neutral-400 max-w-[28rem] mx-auto">
              Every office has different needs. These are our most common service tiers. Custom plans available upon request.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
            {[
              { name: 'Basic', desc: 'Essential cleaning for small offices', freq: 'Weekly/bi-weekly', highlights: ['Trash removal', 'Restroom sanitation', 'Floor vacuuming & mopping', 'Surface dusting & wiping'] },
              { name: 'Standard', desc: 'Most popular for mid-size offices', freq: '3x per week', highlights: ['Everything in Basic', 'Workstation sanitizing', 'Kitchen/breakroom cleaning', 'Interior glass cleaning', 'Supply restocking'], featured: true },
              { name: 'Premium', desc: 'Comprehensive 5-day coverage', freq: '5x per week (daily)', highlights: ['Everything in Standard', 'Daily restroom service', 'Detail touch-ups daily', 'Monthly deep clean', 'Dedicated account manager'] },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border border-white/10 bg-white p-6 md:p-7 flex flex-col relative ${
                  tier.featured
                    ? 'border-secondary shadow-none ring-1 ring-secondary/20'
                    : 'border-white/10 shadow-none'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-white text-[11px] font-bold rounded-full tracking-wide">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-bold text-lg text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-neutral-400 mb-1">{tier.desc}</p>
                <p className="text-xs font-semibold text-white bg-[#1a1a1a] px-2.5 py-1 rounded-full inline-block w-fit mb-5">{tier.freq}</p>
                <ul className="space-y-2.5 flex-1 mb-5">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full text-center py-2.5 text-sm font-semibold rounded-full transition-colors ${
                    tier.featured
                      ? 'bg-secondary text-white hover:bg-secondary-700'
                      : 'bg-secondary text-white hover:bg-secondary-700'
                  }`}
                >
                  Get Estimate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14 md:py-16 lg:py-20 bg-[#111] border-b border-white/10">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">
            Ready for a cleaner office?
          </h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">
            Tell us about your office and we'll prepare a custom cleaning plan and quote within 24 hours — no obligation.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Company name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
              <select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400">
                <option value="">Approx. square footage</option>
                <option value="small">Under 2,000 sq ft</option>
                <option value="medium">2,000 – 10,000 sq ft</option>
                <option value="large">10,000 – 25,000 sq ft</option>
                <option value="xlarge">25,000+ sq ft</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your office and cleaning needs..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">
              Send Request
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
