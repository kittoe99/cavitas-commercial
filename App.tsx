import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <ScrollToTop />
        <SeoManager />
        <Navbar />

        <main className="pt-[var(--site-header-height)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
            <Route path="/services/janitorial" element={<JanitorialPage />} />
            <Route path="/services/floor-care" element={<FloorCarePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
