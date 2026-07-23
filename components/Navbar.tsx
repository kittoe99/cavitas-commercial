import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useDetectedCity } from '../hooks/useDetectedCity';

const SITE_PHONE = '(206) 746-2523';
const SITE_PHONE_TEL = '2067462523';

const serviceItems = [
  { name: 'Office Cleaning', path: '/services/office-cleaning' },
  { name: 'Janitorial Services', path: '/services/janitorial' },
  { name: 'Floor Care', path: '/services/floor-care' },
];

const LocationPinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const CityLocation: React.FC<{
  city: string;
  className?: string;
  textClassName?: string;
}> = ({
  city,
  className = '',
  textClassName = 'text-[13px] sm:text-sm font-semibold text-[#1a1a1a]',
}) => (
  <span className={`inline-flex items-center gap-1.5 min-w-0 ${className}`}>
    <LocationPinIcon className="w-4 h-4 text-secondary shrink-0" />
    <span className={`truncate ${textClassName}`}>{city}</span>
  </span>
);

const ContactChip: React.FC<{
  href?: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}> = ({ href, label, value, icon }) => {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#111] text-white">
        {icon}
      </span>
      <span className="min-w-0 text-left leading-tight">
        <span className="block text-[11px] font-semibold text-secondary">{label}</span>
        <span className="block truncate text-[13px] font-bold uppercase tracking-wide text-[#111]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{inner}</div>;
};

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const detectedCity = useDetectedCity();

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
    setShowServicesDropdown(false);
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

  const navLinkClass =
    'relative inline-flex items-center gap-1.5 rounded-none px-3.5 py-3.5 text-[15px] font-semibold text-white hover:text-white/90 transition-colors';

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[60]">
        {/* Desktop location utility bar */}
        <div className="hidden lg:block bg-[#f3f3f3] border-b border-[#e5e5e5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center">
            <CityLocation city={detectedCity} textClassName="text-[13px] font-semibold text-[#1a1a1a]" />
          </div>
        </div>

        {/* Top tier — logo + contact chips */}
        <div className="bg-white border-b border-[#e8e8e8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.25rem] sm:h-[4.75rem] flex items-center justify-between gap-3 sm:gap-4">
            <button type="button" onClick={goHome} className="shrink-0" aria-label="Cavitas Commercial Cleaning home">
              <Logo variant="light" size="compact" />
            </button>

            {/* Mobile: city next to logo, left-aligned */}
            <CityLocation city={detectedCity} className="lg:hidden flex-1 justify-start min-w-0" />

            <div className="hidden lg:flex items-center gap-0">
              <ContactChip
                href={`tel:${SITE_PHONE_TEL}`}
                label="Phone:"
                value={SITE_PHONE}
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              />
              <span className="mx-5 h-10 w-px bg-[#ddd]" aria-hidden />
              <ContactChip
                label="Available:"
                value="We Serve 24/7"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              />
            </div>

            {/* Mobile: phone */}
            <div className="flex lg:hidden items-center gap-2.5 shrink-0">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-[#111] text-white shadow-md"
                aria-label="Call Cavitas"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tier — red menu bar */}
        <div className="bg-secondary">
          {/* Mobile / tablet bar */}
          <div className="lg:hidden px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3">
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-secondary shadow-sm"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
            <a
              href="/quote"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate('/quote');
              }}
              className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 sm:px-4 py-2.5 text-[13px] font-bold text-secondary shadow-sm whitespace-nowrap"
            >
              View Pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between gap-4">
            <nav className="flex items-center gap-0.5" aria-label="Primary">
              <button
                type="button"
                onClick={goHome}
                className={`${navLinkClass} ${isHomePage ? 'after:absolute after:left-3 after:right-3 after:bottom-2 after:h-[3px] after:rounded-full after:bg-[#222]' : ''}`}
              >
                Home
              </button>

              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button
                  type="button"
                  onClick={() => handleLinkClick('#services')}
                  className={navLinkClass}
                  aria-expanded={showServicesDropdown}
                >
                  Services
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" className={`transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} aria-hidden>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-0 w-52 transition-all ${
                    showServicesDropdown
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="bg-white shadow-lg py-1.5 overflow-hidden border border-[#eee]">
                    {serviceItems.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-[#222] hover:bg-secondary/10 hover:text-secondary transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button type="button" onClick={() => handleLinkClick('#industries')} className={navLinkClass}>
                Industries
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('/contact')}
                className={`${navLinkClass} ${isContactPage ? 'after:absolute after:left-3 after:right-3 after:bottom-2 after:h-[3px] after:rounded-full after:bg-[#222]' : ''}`}
              >
                Contact Us
              </button>
            </nav>

            <a
              href="/quote"
              onClick={(e) => {
                e.preventDefault();
                navigate('/quote');
              }}
              className="inline-flex items-center gap-2 my-2.5 rounded-md bg-white px-4 py-2.5 text-[13px] font-bold text-secondary hover:bg-[#f5f5f5] transition-colors whitespace-nowrap"
            >
              View Pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[55] lg:hidden bg-[#0f0f0f]/45 transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: 'var(--site-header-height)' }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`bg-white shadow-xl transition-transform duration-200 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-2'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="bg-secondary px-1 py-1">
            <button
              type="button"
              onClick={goHome}
              className="w-full rounded-none text-left px-4 py-3.5 text-[15px] font-semibold text-white"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="w-full rounded-none flex items-center justify-between px-4 py-3.5 text-[15px] font-semibold text-white"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="bg-secondary-700/40 pb-1">
                {serviceItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigate(item.path)}
                    className="w-full rounded-none text-left px-8 py-3 text-sm font-medium text-white/95"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => handleLinkClick('#industries')}
              className="w-full rounded-none text-left px-4 py-3.5 text-[15px] font-semibold text-white"
            >
              Industries
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('/contact')}
              className="w-full rounded-none text-left px-4 py-3.5 text-[15px] font-semibold text-white"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
