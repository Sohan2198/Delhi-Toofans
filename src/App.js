import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';

// Inner pages are code-split so the home page ships only what it renders.
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const SquadPage = lazy(() => import('./pages/Squad/SectionToofaniSquad'));
const FixturesPage = lazy(() => import('./pages/FixtureResult/SectionFixtureResult'));
const GalleryPage = lazy(() => import('./pages/Gallery/MainSection'));
const SponsorsPage = lazy(() => import('./pages/Sponsors/SectionSponsors'));
const ContactPage = lazy(() => import('./pages/Contact/SectionContact'));
const CalendarPage = lazy(() => import('./pages/Schedule/Calendar'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
    <span className="h-10 w-10 animate-spin rounded-full border-4 border-toofan-purple border-t-toofan-yellow" />
    <span className="sr-only">Loading…</span>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <main>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Squad" element={<SquadPage />} />
          <Route path="/Fixtures&Results" element={<FixturesPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Sponsors" element={<SponsorsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Calendar" element={<CalendarPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
