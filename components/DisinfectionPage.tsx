import React from 'react';

const features = [
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg>), title: 'Electrostatic Spraying', desc: 'Charged mist technology ensures disinfectant wraps around and coats every surface evenly — even hard-to-reach areas.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>), title: 'Hospital-Grade Solutions', desc: 'EPA-registered, hospital-grade disinfectants proven effective against viruses, bacteria, and fungi. Safe for occupied spaces.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>), title: 'High-Touch Focus', desc: 'Doorknobs, light switches, handrails, elevator buttons, shared equipment — every high-contact surface is methodically treated.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>), title: 'Scheduled Programs', desc: 'Ongoing disinfection programs — daily, weekly, or monthly — to maintain a consistently hygienic environment year-round.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>), title: 'Documentation', desc: 'We provide after-service reports detailing what was treated, products used, and time completed — ideal for compliance records.' },
  { icon: (p: { className?: string }) => (<svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>), title: 'Trained Specialists', desc: 'Our disinfection teams receive specialized training in application techniques, dwell times, and safety protocols.' },
];

const checklist = [
  'Electrostatic application of EPA-registered disinfectant on all surfaces',
  'Methodical treatment of all high-touch surfaces throughout the facility',
  'Doorknobs, handles, push plates, and crash bars disinfected',
  'Light switches, thermostats, and control panels wiped down',
  'Shared office equipment (printers, copiers, coffee stations) treated',
  'Restroom fixtures, stall handles, and dispensers fully disinfected',
  'Breakroom and kitchen surfaces, appliance handles, and tables treated',
  'Elevator buttons, handrails, and lobby seating areas covered',
  'Gym equipment, locker room surfaces, and fitness center touch points',
  'Post-service summary report with products used and areas treated',
];

const faqs = [
  { q: 'How is electrostatic spraying different from regular cleaning?', a: 'Electrostatic sprayers give disinfectant particles a positive charge so they cling to and wrap around surfaces evenly — reaching the sides, underside, and back of objects that manual wiping may miss. It\'s faster, more thorough, and uses less product.' },
  { q: 'Are the disinfectants safe for employees and customers?', a: 'Yes. All products are EPA-registered and safe for use in occupied spaces when applied correctly. They dry quickly with no harmful residue. We can provide SDS (Safety Data Sheets) for all products upon request.' },
  { q: 'How long does a disinfection service take?', a: 'A typical 10,000 sq ft office space takes 1–2 hours. The disinfectant dries within 10–15 minutes, so the space is ready for re-entry almost immediately. We schedule after-hours to avoid any disruption.' },
  { q: 'Do you offer one-time outbreak response services?', a: 'Yes. If you\'ve had a confirmed illness in your facility, we can deploy within 24 hours for a comprehensive outbreak disinfection. We also offer ongoing preventive programs to maintain a healthy environment.' },
];

export const DisinfectionPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative bg-[#0a0a0a] overflow-hidden border-b border-white/10">
        <div className="lg:hidden">
          <div className="px-5 pt-8 pb-10 text-center max-w-lg mx-auto">
            <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide uppercase">Services</p>
            <h1 className="font-serif text-[2rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-[1.12] mb-4">Disinfection Services</h1>
            <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-[21rem] mx-auto">Electrostatic spraying and deep disinfection for a healthier work environment. Evidence-based protocols that keep your people safe.</p>
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
                <h1 className="font-serif text-[2.625rem] xl:text-[3.125rem] font-semibold text-white tracking-tight mb-4 leading-[1.1]">Disinfection Services</h1>
                <p className="text-lg text-neutral-400 mb-7 leading-relaxed">Electrostatic spraying and deep disinfection for a healthier work environment. Evidence-based protocols that keep your people safe.</p>
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
          <header className="text-center mb-12 md:mb-16"><p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">Our approach</p><h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight leading-tight">Science-backed disinfection you can trust.</h2></header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (<div key={f.title} className="text-center group"><div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#141414] flex items-center justify-center group-hover:bg-[#1a1a1a] transition-colors"><f.icon className="w-7 h-7 text-white group-hover:text-neutral-300 transition-colors" /></div><h3 className="font-bold text-[15px] text-white mb-2">{f.title}</h3><p className="text-sm text-neutral-400 leading-relaxed max-w-[18rem] mx-auto">{f.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 lg:py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-2 tracking-wide">What's included</p><h2 className="font-serif text-[1.5rem] md:text-[1.75rem] font-semibold text-white tracking-tight mb-8 leading-tight">Comprehensive coverage of your entire facility.</h2>
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
          <h2 className="font-serif text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-white tracking-tight mb-3">Protect your workplace today.</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">Request a free consultation and disinfection plan. One-time service and ongoing programs available.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Your name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><input type="email" placeholder="Email address" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="text" placeholder="Company name" className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all" /><select className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all text-neutral-400"><option value="">Service type</option><option value="one-time">One-Time Disinfection</option><option value="ongoing">Ongoing Program</option><option value="outbreak">Outbreak Response</option><option value="assessment">Assessment First</option></select></div>
            <textarea placeholder="Tell us about your facility and any specific concerns..." rows={3} className="w-full px-4 py-2.5 text-sm rounded-xl border border-white/10 bg-[#141414] focus:ring-2 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-none" />
            <button type="submit" className="w-full px-5 py-3 text-sm font-semibold bg-secondary text-white hover:bg-secondary-700 rounded-full transition-colors inline-flex items-center justify-center gap-2">Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </form>
        </div>
      </section>
    </div>
  );
};
