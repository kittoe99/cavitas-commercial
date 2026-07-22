import React from 'react';

const features = [
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>),
    title: 'Strip & Wax',
    desc: 'Old finish is stripped away, floors are cleaned, and multiple coats of high-durability wax are applied for a like-new finish.',
  },
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>),
    title: 'Burnishing & Buffing',
    desc: 'High-speed burnishing restores gloss and removes scuffs between full strip-and-wax cycles. Keeps floors looking polished daily.',
  },
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 12h18"/></svg>),
    title: 'Carpet Extraction',
    desc: 'Hot-water extraction removes deep-set dirt, allergens, and stains from carpeted areas. Extends carpet life significantly.',
  },
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>),
    title: 'Tile & Grout',
    desc: 'Specialized rotary scrubbing and pressure washing removes embedded grime from tile and restores grout to original color.',
  },
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    title: 'Hardwood Care',
    desc: 'Gentle cleaning and polishing designed for hardwood, engineered wood, and laminate surfaces. Never damages your investment.',
  },
  {
    icon: (props: { className?: string }) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
    title: 'Preventive Maintenance',
    desc: 'Scheduled floor care programs prevent costly restoration. We track your floor conditions and recommend the right cadence.',
  },
];

const checklist = [
  'Professional strip and wax for VCT, vinyl, and linoleum floors',
  'High-speed burnishing between full refinishing cycles',
  'Hot-water carpet extraction and spot treatment',
  'Tile and grout deep cleaning and sealing',
  'Hardwood floor cleaning, buffing, and recoating',
  'Entry mat systems cleaning and replacement',
  'Concrete floor scrubbing and sealing (warehouses, garages)',
  'Pre- and post-treatment for high-traffic zones',
  'Detailed floor condition assessment and maintenance schedule',
  'Eco-friendly, low-VOC products available for all floor types',
];

const faqs = [
  { q: 'How often should floors be stripped and waxed?', a: 'Most commercial VCT floors need stripping and waxing every 6–12 months depending on foot traffic. High-traffic areas like lobbies and hallways may need it quarterly. We assess your floors and recommend the right schedule.' },
  { q: 'Will floor work disrupt our business?', a: 'Strip and wax work is done after hours or on weekends so floors are dry and ready by the next business day. Routine burnishing can be done during evening cleaning with no disruption.' },
  { q: 'What\'s the difference between buffing and burnishing?', a: 'Buffing uses a slower-speed machine to clean and lightly shine floors. Burnishing uses high-speed equipment to produce a deep, wet-look gloss. We use the right method for your floor type.' },
  { q: 'Can you handle large facilities?', a: 'Yes. We have the equipment and crew capacity for facilities of any size — from single offices to multi-floor corporate headquarters, retail chains, and warehouses.' },
];

export const FloorCarePage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">Floor Care</h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">Professional floor stripping, waxing, buffing, and deep carpet cleaning. Protect your flooring investment with expert care.</p>
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
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">Floor Care</h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">Professional floor stripping, waxing, buffing, and deep carpet cleaning. Protect your flooring investment with expert care.</p>
                <div className="flex items-center gap-4">
                  <a href="#contact" className="!rounded-full px-7 py-3 text-[15px] font-semibold bg-secondary text-white hover:bg-secondary-700 inline-flex items-center gap-2 transition-colors">Get a Free Estimate <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
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
          <header className="text-center mb-12 md:mb-16"><p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What we do</p><h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">Complete floor care for every surface.</h2></header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center group"><div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#141414] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors"><f.icon className="w-7 h-7 text-white group-hover:text-neutral-300 transition-colors" /></div><h3 className="font-bold text-[15px] text-white mb-2">{f.title}</h3><p className="text-sm text-neutral-400 leading-relaxed max-w-[18rem] mx-auto">{f.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What's included</p><h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">From assessment to polished perfection.</h2>
              <ul className="space-y-4">
                {checklist.map((item, i) => (<li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span className="text-sm text-neutral-400 leading-relaxed">{item}</span></li>))}
              </ul>
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
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">Give your floors the care they deserve.</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">Request a free floor assessment and estimate. We'll evaluate your floors and recommend the right maintenance plan.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Company name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400"><option value="">Floor type</option><option value="vct">VCT / Vinyl Tile</option><option value="carpet">Carpet</option><option value="hardwood">Hardwood</option><option value="tile">Ceramic Tile & Grout</option><option value="concrete">Concrete</option><option value="multiple">Multiple Types</option></select></div>
            <textarea placeholder="Describe your flooring and needs..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </form>
        </div>
      </section>
    </div>
  );
};
