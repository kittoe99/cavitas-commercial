import React from 'react';

const features = [
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>), title: 'Debris Removal', desc: 'All construction debris, drywall dust, wood scraps, packaging, and waste materials are removed and properly disposed of.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>), title: 'Surface Dusting', desc: 'Every surface — from ceiling fans to baseboards, light fixtures to window sills — is wiped free of construction dust.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>), title: 'Window & Glass', desc: 'All windows, glass doors, partitions, and mirrors are cleaned inside and out. Stickers and labels are removed.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="15" y2="6"/></svg>), title: 'Cabinet & Fixture Wipe', desc: 'All cabinets, shelves, closets, counters, and installed fixtures are wiped down inside and out.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>), title: 'Floor Restoration', desc: 'Floors are swept, vacuumed, and thoroughly mopped. Construction residue, paint splatter, and adhesives are removed.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>), title: 'Final Detail', desc: 'A meticulous final pass ensures every surface is spotless. We don\'t leave until the space is move-in ready.' },
];

const phases = [
  { step: 'Rough Clean', desc: 'Removal of large debris, sweeping of all floors, and initial dust knockdown after major construction work is complete.' },
  { step: 'Final Clean', desc: 'Detailed cleaning of all surfaces, fixtures, windows, and floors after all trades have finished. The space is prepared for final inspection.' },
  { step: 'Touch-Up Clean', desc: 'Post-walkthrough touch-ups to address any dust or debris that settles after the final clean. Ensures the space is perfect for handover.' },
];

const faqs = [
  { q: 'When should post-construction cleaning happen?', a: 'Typically in three phases: rough clean after major work, final clean once all trades are finished, and touch-up clean after final walkthrough. We coordinate with your GC or project manager on timing.' },
  { q: 'Do you handle hazardous materials?', a: 'We handle standard construction debris including drywall dust, wood, metal scraps, and packaging. For hazardous materials (asbestos, lead, chemicals), specialized remediation contractors are required.' },
  { q: 'How long does a post-construction clean take?', a: 'It depends on the project size. A 2,000 sq ft office renovation might take 1–2 days per phase. We provide a timeline estimate based on your specific project scope.' },
  { q: 'Do you work weekends and after-hours?', a: 'Yes. We schedule around your construction timeline. Weekend and overnight work is available to meet tight handover deadlines.' },
];

export const PostConstructionPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">Post-Construction Cleaning</h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">Thorough cleanup after renovations, remodels, and new construction. We turn job sites into move-in ready spaces.</p>
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
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">Post-Construction Cleaning</h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">Thorough cleanup after renovations, remodels, and new construction. We turn job sites into move-in ready spaces.</p>
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
          <header className="text-center mb-12 md:mb-16"><p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What we do</p><h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">From job site to show-ready.</h2></header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (<div key={f.title} className="text-center group"><div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#141414] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors"><f.icon className="w-7 h-7 text-white group-hover:text-neutral-300 transition-colors" /></div><h3 className="font-bold text-[15px] text-white mb-2">{f.title}</h3><p className="text-sm text-neutral-400 leading-relaxed max-w-[18rem] mx-auto">{f.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Our process</p><h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">Three-phase cleaning for a flawless finish.</h2>
              <div className="space-y-6">
                {phases.map((p, i) => (
                  <div key={p.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 font-bold text-white text-sm">{i + 1}</div>
                    <div><h4 className="font-semibold text-sm text-white mb-1">{p.step}</h4><p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p></div>
                  </div>
                ))}
              </div>
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
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">Ready for a spotless handover?</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">Tell us about your project and timeline. We'll prepare a custom quote within 24 hours.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Project address / company" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400"><option value="">Project type</option><option value="renovation">Renovation</option><option value="new">New Construction</option><option value="remodel">Remodel</option><option value="tenant">Tenant Improvement</option></select></div>
            <textarea placeholder="Briefly describe the project scope and timeline..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </form>
        </div>
      </section>
    </div>
  );
};
