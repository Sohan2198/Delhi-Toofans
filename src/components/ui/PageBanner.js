import React from 'react';

/** Full-width hero image used at the top of inner pages, with optional overlay content. */
const PageBanner = ({ image, alt, imageClassName = 'h-[300px] md:h-auto', children }) => (
  <div className="relative w-full">
    <img src={image} alt={alt} className={`w-full object-cover ${imageClassName}`} />
    {children}
  </div>
);

export default PageBanner;
