import React from 'react';
import AboutSection from '../components/common/AboutSection';
import Gallery from '../components/common/Gallery';
import HeroSlider from '../components/common/HeroSlider';
import PointTable from '../components/common/PointTable';
import Squad from '../components/common/Squad';
import Sponsors from '../components/common/Sponsors';

const Home = () => (
  <>
    <HeroSlider />
    <AboutSection />
    <Squad />
    <Gallery />
    <PointTable />
    <Sponsors />
  </>
);

export default Home;
