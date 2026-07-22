import React from 'react';

const features = [
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Evening & Off-Hours',
    desc: 'All cleaning is performed after business hours so there\'s zero disruption to your daily operations.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: 'Scheduled Consistency',
    desc: 'Same trained crew, same time, every visit. Routine builds efficiency and familiarity with your facility.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    title: 'Supply Management',
    desc: 'We manage all consumables — paper towels, soap, liners, sanitizer — so you never run out.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Green Cleaning',
    desc: 'Eco-friendly, biodegradable cleaning products available upon request. Safe for employees and the environment.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: 'Dedicated Crew',
    desc: 'A consistent, uniformed team assigned to your account who understands your facility inside and out.',
  },
  {
    icon: (props: { className?: string }) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
    title: 'Quality Inspections',
    desc: 'Regular supervisor walk-throughs and quality audits ensure every clean meets our rigorous standards.',
  },
];

const checklist = [
  'Dedicated account manager and consistent crew assignment',
  'Customized scope of work tailored to your facility type',
  'Evening, overnight, or weekend service — no daytime disruption',
  'All cleaning supplies, equipment, and consumables provided',
  'Trash, recycling, and waste management program',
  'Comprehensive floor care (vacuuming, mopping, hard surfaces)',
  'Restroom deep cleaning and supply restocking',
  'High-touch surface disinfection throughout all areas',
  'Monthly supervisor inspection with detailed report',
  '24-hour callback guarantee on any missed items',
];

const faqs = [
  {
    q: 'What\'s the difference between office cleaning and janitorial services?',
    a: 'Office cleaning is typically a set list of tasks performed each visit. Janitorial service is a comprehensive program — we manage your entire facility\'s cleanliness including supplies, scheduling, quality control, and special projects. Think of it as an outsourced facilities maintenance partner.',
  },
  {
    q: 'Can you work around our security requirements?',
    a: 'Yes. We\'ll coordinate with your security team to ensure proper access, key management, and alarm protocols. All team members carry photo ID and can be added to your approved vendor list.',
  },
  {
    q: 'How do you handle special requests or after-hours events?',
    a: 'Your dedicated account manager is your single point of contact. Need a post-event cleanup or extra service before a big meeting? Just call or email and we\'ll schedule it.',
  },
  {
    q: 'Do you offer day porter services?',
    a: 'Yes. We can station a day porter at your facility during business hours to handle spot cleaning, restroom maintenance, lobby upkeep, and on-demand requests throughout the day.',
  },
  {
    q: 'Are you insured and bonded?',
    a: 'Absolutely. We carry comprehensive general liability insurance, workers\' compensation, and are fully bonded. Certificates of insurance are provided to every client.',
  },
];

export const JanitorialPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">Janitorial Services</h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">
              Full-service janitorial programs tailored to your facility. We manage everything — from nightly cleaning to supply inventory — so you don't have to.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full">
              <a href="#contact" className="shrink-0 px-6 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 !rounded-full transition-colors inline-block">Get a Free Estimate</a>
              <a href="#details" className="shrink-0 py-3 text-sm font-medium text-white hover:text-neutral-300 transition-colors">Learn more</a>
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
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">Janitorial Services</h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">
                  Full-service janitorial programs tailored to your facility. We manage everything — from nightly cleaning to supply inventory — so you don't have to.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#contact" className="!rounded-full px-7 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 inline-flex items-center gap-2 transition-colors">
                    Get a Free Estimate <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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

      <section id="details" className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Program highlights</p>
            <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">A complete janitorial solution under one roof.</h2>
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

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What's included</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">Everything your facility needs, managed for you.</h2>
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
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Common questions</p>
              <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">Frequently asked.</h2>
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

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Service plans</p>
            <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight mb-3">Tailored janitorial programs.</h2>
            <p className="text-sm text-neutral-400 max-w-[28rem] mx-auto">Flexible service levels designed to match your facility size, traffic, and budget.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
            {[
              { name: 'Essential', desc: 'Core janitorial coverage', freq: '3–5 nights/week', highlights: ['Floor care & trash removal', 'Restroom cleaning & restocking', 'Surface dusting & wiping', 'Dedicated crew assignment'] },
              { name: 'Professional', desc: 'Most popular for mid-size facilities', freq: '5 nights/week + day porter', highlights: ['Everything in Essential', 'Day porter for spot cleaning', 'Supply inventory management', 'Monthly quality inspections', 'Account manager check-ins'], featured: true },
              { name: 'Enterprise', desc: 'Full facilities management', freq: '7 days/week + on-call', highlights: ['Everything in Professional', 'Weekend and holiday coverage', 'Special project coordination', 'Custom reporting dashboard', 'Quarterly business review'] },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-2xl border border-white/10 bg-white p-6 md:p-7 flex flex-col relative ${tier.featured ? 'border-secondary shadow-none ring-1 ring-secondary/20' : 'border-white/10 shadow-none'}`}>
                {tier.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-secondary text-white text-[11px] font-bold rounded-full tracking-wide">MOST POPULAR</span>}
                <h3 className="font-bold text-lg text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-neutral-400 mb-1">{tier.desc}</p>
                <p className="text-xs font-semibold text-white bg-[#1a1a1a] px-2.5 py-1 rounded-full inline-block w-fit mb-5">{tier.freq}</p>
                <ul className="space-y-2.5 flex-1 mb-5">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-400"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>{h}</li>
                  ))}
                </ul>
                <a href="#contact" className={`w-full text-center py-2.5 text-sm font-semibold rounded-full transition-colors ${tier.featured ? 'bg-secondary text-white hover:bg-secondary-700' : 'bg-secondary text-white hover:bg-secondary-700'}`}>Get Estimate</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 md:py-16 lg:py-20 bg-[#111]">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">Ready to upgrade your facility management?</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">Let us handle the cleaning so you can focus on what matters most — your business.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Company name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" />
              <select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400">
                <option value="">Facility type</option>
                <option value="office">Corporate Office</option>
                <option value="medical">Medical / Healthcare</option>
                <option value="education">School / Education</option>
                <option value="retail">Retail / Shopping</option>
                <option value="industrial">Industrial / Warehouse</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your facility and needs..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">
              Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
