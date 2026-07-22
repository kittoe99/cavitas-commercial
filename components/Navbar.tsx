import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const serviceItems = [
  { name: 'Office Cleaning', path: '/services/office-cleaning' },
  { name: 'Janitorial Services', path: '/services/janitorial' },
  { name: 'Floor Care', path: '/services/floor-care' },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
    };
    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener('resize', syncHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const goHome = () => {
    setIsMenuOpen(false);
    if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
    else navigate('/');
  };

  const handleLinkClick = (anchor: string) => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
    if (isHomePage) {
      document.getElementById(anchor.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchor.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
    navigate(path);
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[60] bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[4.5rem] flex items-center justify-between gap-4">
          <button type="button" onClick={goHome} className="shrink-0" aria-label="Cavitas home">
            <Logo />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('#services')}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#c4c4c4] hover:text-[var(--text)] transition-colors"
              >
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={`absolute top-full left-0 pt-2 w-52 transition-all ${showServicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-lg py-1.5 overflow-hidden">
                  {serviceItems.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-[#c4c4c4] hover:bg-white/5 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleLinkClick('#contact')}
              className="px-3 py-2 text-sm font-semibold text-[#c4c4c4] hover:text-[var(--text)] transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:8336931311" className="text-sm font-bold text-secondary hover:text-secondary-400 transition-colors whitespace-nowrap">
              (833) 693-1311
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
              className="inline-flex items-center px-4 py-2.5 text-sm font-semibold bg-secondary text-[#f5f5f5] hover:bg-secondary-700 rounded-lg transition-colors whitespace-nowrap"
            >
              Free Quote
            </a>
          </div>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/12 text-[var(--text)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[65] md:hidden bg-[var(--bg)] transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-[var(--border)]">
          <button type="button" onClick={goHome} className="inline-flex items-center" aria-label="Cavitas home">
            <Logo showWordmark wordmarkClassName="!text-base" markClassName="w-8 h-8" />
          </button>
          <button type="button" onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-[var(--text)]" aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav className="px-4 py-6 space-y-1">
          <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-[#7a7a7a]">Services</p>
          {serviceItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavigate(item.path)}
              className="w-full text-left px-3 py-3.5 text-base font-semibold text-[var(--text)] rounded-lg hover:bg-white/5"
            >
              {item.name}
            </button>
          ))}
          <div className="border-t border-[var(--border)] my-4" />
          <button
            type="button"
            onClick={() => handleLinkClick('#contact')}
            className="w-full text-left px-3 py-3.5 text-base font-semibold text-[var(--text)] rounded-lg hover:bg-white/5"
          >
            Contact
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--border)] space-y-3 bg-[var(--bg)]">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            className="flex items-center justify-center w-full py-3.5 text-sm font-semibold bg-secondary text-[#f5f5f5] hover:bg-secondary-700 rounded-lg"
          >
            Free Quote
          </a>
          <a href="tel:8336931311" className="flex items-center justify-center text-base font-bold text-secondary">
            (833) 693-1311
          </a>
        </div>
      </div>
    </>
  );
};
