import React from 'react';

const features = [
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/></svg>), title: 'Interior & Exterior', desc: 'Both sides of every window cleaned to a streak-free, crystal-clear finish. We use professional-grade squeegees and purified water.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/></svg>), title: 'High-Rise Capable', desc: 'Our teams are equipped and trained for multi-story buildings. We use water-fed poles, boom lifts, and rope descent where needed.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 12h18"/></svg>), title: 'Sill & Track Cleaning', desc: 'Window sills, tracks, and frames are wiped down during every service — not just the glass. No dirt buildup over time.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>), title: 'Screen Cleaning', desc: 'Removable screens are taken down, washed, dried, and reinstalled. Fixed screens are brushed and wiped in place.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>), title: 'Hard Water Stain Removal', desc: 'Stubborn mineral deposits, paint overspray, and construction residue are removed with specialized treatments.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>), title: 'Scheduled Maintenance', desc: 'Ongoing monthly or quarterly window cleaning keeps your building looking professional year-round. Curb appeal matters.' },
];

const checklist = [
  'Interior and exterior glass cleaned to a streak-free finish',
  'Window frames, sills, and tracks thoroughly wiped down',
  'Screens removed, washed, dried, and reinstalled (removable type)',
  'Hard water stains and mineral deposits treated and removed',
  'Glass doors (entry, patio, interior partitions) included',
  'Skylights and atrium glass accessible from interior',
  'Mirrors, glass railings, and glass walls included',
  'Paint overspray and adhesive residue removal from glass',
  'Water-fed pole system for up to 4-story reach from ground',
  'Rope descent, boom lift, or scaffolding for high-rise access',
];

const faqs = [
  { q: 'How often should commercial windows be cleaned?', a: 'Most commercial buildings benefit from quarterly window cleaning. Retail storefronts and restaurants often need monthly service. We\'ll recommend the right frequency based on your location, exposure, and industry standards.' },
  { q: 'Can you clean windows above the ground floor?', a: 'Yes. We use water-fed carbon-fiber poles for up to 4 stories and have certified rope-access technicians and boom lift operators for high-rise buildings. Every job is assessed for the safest, most efficient access method.' },
  { q: 'What about bad weather?', a: 'We monitor forecasts closely. If rain or high winds make cleaning unsafe or ineffective, we\'ll reschedule at no charge. Light overcast days are actually ideal for window cleaning — direct sun causes water to dry too quickly.' },
  { q: 'Do you use eco-friendly cleaning solutions?', a: 'Yes. Our primary method uses purified, deionized water fed through water-fed poles — no detergents needed for most jobs. For tougher jobs, we use biodegradable, phosphate-free cleaning solutions.' },
];

export const WindowWashingPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">Window Washing</h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">Streak-free interior and exterior window cleaning for commercial properties. From storefronts to high-rises — we make your building shine.</p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full">
              <a href="#contact" className="shrink-0 px-6 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 !rounded-full transition-colors inline-block">Get a Free Estimate</a>
              <a href="#details" className="shrink-0 py-3 text-sm font-medium text-white hover:text-neutral-300 transition-colors">Learn more</a>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#141414] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center"><span className="w-16 h-16 rounded-xl border border-white/15 bg-white/5" data-icon-slot aria-hidden /></div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="max-w-[72rem] mx-auto px-8 xl:px-10 pt-8 xl:pt-10 pb-12">
            <div className="grid grid-cols-2 gap-12 xl:gap-14 items-center">
              <div className="max-w-[28rem] animate-slide-up" style={{ animationDelay: '0.05s' }}>
                <p className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">Services</p>
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">Window Washing</h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">Streak-free interior and exterior window cleaning for commercial properties. From storefronts to high-rises — we make your building shine.</p>
                <div className="flex items-center gap-4">
                  <a href="#contact" className="!rounded-full px-7 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 inline-flex items-center gap-2 transition-colors">Get a Free Estimate <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                  <a href="#details" className="text-sm font-medium text-white hover:text-neutral-300 transition-colors">Learn more below</a>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}><div className="aspect-[5/4] w-full rounded-[1.5rem] border border-white/10 bg-[#141414] flex items-center justify-center">
                  <span className="w-20 h-20 rounded-xl border border-white/15 bg-white/5" data-icon-slot aria-hidden />
                </div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16"><p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What we do</p><h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">Crystal-clear results at any height.</h2></header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (<div key={f.title} className="text-center group"><div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#141414] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors"><f.icon className="w-7 h-7 text-white group-hover:text-neutral-300 transition-colors" /></div><h3 className="font-bold text-[15px] text-white mb-2">{f.title}</h3><p className="text-sm text-neutral-400 leading-relaxed max-w-[18rem] mx-auto">{f.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What's included</p><h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">More than just glass — a complete window service.</h2>
              <ul className="space-y-4">{checklist.map((item, i) => (<li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span className="text-sm text-neutral-400 leading-relaxed">{item}</span></li>))}</ul>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Common questions</p><h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">Frequently asked.</h2>
              <div className="space-y-5">{faqs.map((faq, i) => (<div key={i}><h4 className="font-semibold text-sm text-white mb-1.5">{faq.q}</h4><p className="text-sm text-neutral-400 leading-relaxed">{faq.a}</p></div>))}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 md:py-16 lg:py-20 bg-[#111]">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">Let your building make a great first impression.</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">Request a free estimate for window cleaning. We'll assess your building and provide a detailed quote.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Company / building name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400"><option value="">Building height</option><option value="1-2">1–2 stories</option><option value="3-5">3–5 stories</option><option value="6-10">6–10 stories</option><option value="10+">10+ stories</option></select></div>
            <textarea placeholder="Tell us about your building and window cleaning needs..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </form>
        </div>
      </section>
    </div>
  );
};
