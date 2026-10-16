import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_HIGHLIGHTS } from '../../data/gallery';
import YearGallery from '../ui/YearGallery';

const Gallery = () => (
  <section className="m-2 mx-auto items-center justify-center text-center md:my-10 md:px-[9rem]">
    <div className="my-2 md:my-10">
      <h2 className="pb-4 text-center text-3xl font-bold text-toofan-purple">Gallery</h2>
      <YearGallery
        imagesByYear={GALLERY_HIGHLIGHTS}
        gridClassName="my-1 grid grid-cols-2 gap-6 md:mx-24 md:grid-cols-3"
        itemClassName="rounded-lg bg-toofan-purple p-2"
      />
    </div>

    <Link to="/Gallery" className="inline-block rounded-md bg-toofan-yellow px-8 py-1.5 text-sm font-medium text-black">
      View All
    </Link>
  </section>
);

export default Gallery;
