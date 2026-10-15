import React from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import { Suspense } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/layout/Footer';
import SectionContact from './pages/Contact/SectionContact';
import SectionFixtureResult from './pages/FixtureResult/SectionFixtureResult';
import SectionSponsors from './pages/Sponsors/SectionSponsors';
// import SectionNewsUpdates from './pages/NewUpdate/SectionNewsUpdates';
import SectionToofaniSquad from './pages/Squad/SectionToofaniSquad';
import SectionNewsLetter from './pages/Newsletter/SectionNewsLetter';
import MainSection from './pages/Gallery/MainSection';
import NewsUpdated from './pages/NewUpdate/NewsUpdated';
import Calendar from './pages/Schedule/Calendar';
// import Add from  './pages/Schedule/Ad';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={
            <Suspense fallback={<div>Components are loading please wait....</div>}
            >
              <Home />
            </Suspense>
          }
          />
          <Route path="/About" Component={AboutUs} />
          {/* <Route path='/News-Updates' Component={SectionNewsUpdates}/> */}
          <Route path='/News-Updates' Component={NewsUpdated} />
          <Route path='/Squad' Component={SectionToofaniSquad} />
          <Route path="/Fixtures&Results" Component={SectionFixtureResult} />
          <Route path='/Gallery' Component={MainSection} />
          <Route path='/Newsletter' Component={SectionNewsLetter} />
          <Route path='/Sponsors' Component={SectionSponsors} />
          <Route path="/Contact" Component={SectionContact} />
          <Route path="/Calendar" Component={Calendar} />
          {/* <Route path="/Add" Component={Add} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
