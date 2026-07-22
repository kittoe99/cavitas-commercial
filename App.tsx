import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromiseSection } from './components/PromiseSection';
import { Services } from './components/Services';
import { ContentSection } from './components/ContentSection';
import { ZipFinder } from './components/ZipFinder';
import { Footer } from './components/Footer';
import { OfficeCleaningPage } from './components/OfficeCleaningPage';
import { JanitorialPage } from './components/JanitorialPage';
import { FloorCarePage } from './components/FloorCarePage';
import { PostConstructionPage } from './components/PostConstructionPage';
import { DisinfectionPage } from './components/DisinfectionPage';
import { WindowWashingPage } from './components/WindowWashingPage';

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
      <ContentSection />
      <ZipFinder />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
        <ScrollToTop />
        <Navbar />

        <main className="pt-[var(--site-header-height)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
            <Route path="/services/janitorial" element={<JanitorialPage />} />
            <Route path="/services/floor-care" element={<FloorCarePage />} />
            <Route path="/services/post-construction" element={<PostConstructionPage />} />
            <Route path="/services/disinfection" element={<DisinfectionPage />} />
            <Route path="/services/window-washing" element={<WindowWashingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
