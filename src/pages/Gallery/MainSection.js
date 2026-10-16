import React from 'react';
import PageBanner from '../../components/ui/PageBanner';
import banner from './Image/Gallery-Banner.webp';
import SectionGallery from './SectionGallery';

const MainSection = () => (
  <>
    <PageBanner image={banner} alt="Delhi Toofans gallery" imageClassName="h-48 md:h-full" />
    <SectionGallery />
  </>
);

export default MainSection;
