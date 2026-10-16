import React, { useState } from 'react';

/**
 * Season tabs + image grid. `imagesByYear` is `{ [year]: string[] }`; the newest year is selected first.
 */
const YearGallery = ({ imagesByYear, gridClassName, itemClassName = '', imageClassName = '' }) => {
  const years = Object.keys(imagesByYear).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <>
      <div className="mb-5 flex justify-center" role="tablist" aria-label="Season">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            role="tab"
            aria-selected={activeYear === year}
            onClick={() => setActiveYear(year)}
            className={`m-2 rounded-md px-7 py-1 text-sm font-semibold ${
              activeYear === year ? 'bg-toofan-yellow text-black' : 'bg-toofan-purple text-white'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className={gridClassName} role="tabpanel">
        {imagesByYear[activeYear].map((src, index) => (
          <div key={src} className={itemClassName}>
            <img
              src={src}
              alt={`Delhi Toofans ${activeYear} season, ${index + 1} of ${imagesByYear[activeYear].length}`}
              className={`h-auto w-full rounded-lg ${imageClassName}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default YearGallery;
