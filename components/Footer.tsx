import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-lg bg-secondary text-[#f5f5f5] flex items-center justify-center font-extrabold text-sm" aria-hidden>C</span>
              <span className="font-extrabold text-[var(--text)] text-lg tracking-tight">Civitas</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 max-w-xs">
              We connect businesses with independent service providers for commercial cleaning and janitorial work across the metro area.
            </p>
            <a href="tel:55501234567" className="text-secondary font-bold text-sm hover:text-secondary-400">(555) 0123-4567</a>
          </div>

          <div>
            <h4 className="font-bold text-[var(--text)] text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Janitorial Services</a></li>
              <li><a href="#services" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Floor Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--text)] text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Services</a></li>
              <li><a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Free Estimate</a></li>
              <li><a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--text)] text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>
                <a href="mailto:contact@cavitascommercialcleaning.com" className="hover:text-[var(--text)] transition-colors">
                  contact@cavitascommercialcleaning.com
                </a>
              </li>
              <li>Serving the Greater Metro Area</li>
              <li className="pt-2">
                <a href="#contact" className="inline-flex items-center gap-1.5 font-semibold text-secondary hover:text-secondary-400">
                  Request a Free Quote
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[#7a7a7a] text-xs">
            &copy; {new Date().getFullYear()} Civitas Commercial Cleaning. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-[#7a7a7a] hover:text-[var(--text)] transition-colors">Privacy</a>
            <a href="#" className="text-[#7a7a7a] hover:text-[var(--text)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
