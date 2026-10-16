import React from 'react';
import AboutSection from '../../components/common/AboutSection';
import Sponsors from '../../components/common/Sponsors';
import PageBanner from '../../components/ui/PageBanner';
import banner from './Image/About-us-Banner.webp';
import OurDugout from './OurDugout';

const AboutUs = () => (
  <>
    <PageBanner image={banner} alt="About Delhi Toofans" />
    <AboutSection showLearnMore={false} />
    <OurDugout />
    <Sponsors />
  </>
);

export default AboutUs;
