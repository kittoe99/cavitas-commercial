import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AdsHeader } from './components/AdsHeader';
import { Hero } from './components/Hero';
import { PromiseSection } from './components/PromiseSection';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { ContentSection } from './components/ContentSection';
import { ZipFinder } from './components/ZipFinder';
import { Footer } from './components/Footer';
import { SeoManager } from './components/SeoManager';
import { OfficeCleaningPage } from './components/OfficeCleaningPage';
import { JanitorialPage } from './components/JanitorialPage';
import { FloorCarePage } from './components/FloorCarePage';
import { QuotePage } from './components/QuotePage';
import { ContactPage } from './components/ContactPage';
import { PricingLandingPage } from './components/PricingLandingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <PromiseSection />
      <Services />
      <Industries />
      <ContentSection />
      <ZipFinder />
    </>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  const isAdsLanding = pathname === '/pricing';

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <ScrollToTop />
      <SeoManager />
      {isAdsLanding ? <AdsHeader /> : <Navbar />}

      <main
        className={
          isAdsLanding
            ? 'pt-[var(--ads-header-height,56px)]'
            : 'pt-[var(--site-header-height)]'
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingLandingPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
          <Route path="/services/janitorial" element={<JanitorialPage />} />
          <Route path="/services/floor-care" element={<FloorCarePage />} />
        </Routes>
      </main>

      {!isAdsLanding && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
