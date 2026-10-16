import React from 'react';
import YearGallery from '../../components/ui/YearGallery';
import { GALLERY_ALL } from '../../data/gallery';

const SectionGallery = () => (
  <section className="m-2 mx-auto items-center justify-center text-center md:my-10">
    <div className="m-2 mt-8">
      <h1 className="mb-6 text-4xl font-bold text-toofan-purple">Gallery</h1>
      <YearGallery
        imagesByYear={GALLERY_ALL}
        gridClassName="flex flex-wrap justify-center gap-5"
        itemClassName="w-full md:w-1/4"
        imageClassName="shadow-md"
      />
    </div>
  </section>
);

export default SectionGallery;
