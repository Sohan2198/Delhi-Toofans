import React, { useState } from 'react';

// 2024 Images
import G1 from './Image/G1.jpg';
import G2 from './Image/G2.jpg';
import G3 from './Image/G3.jpg';
import G4 from './Image/G4.jpg';
import G5 from './Image/G5.jpg';
import G6 from './Image/G6.jpg';
import G7 from './Image/G7.jpg';
import G8 from './Image/G8.jpg';
import G9 from './Image/G9.jpg';
import G10 from './Image/G10.jpg';
import G11 from './Image/G11.jpg';
import G12 from './Image/G12.jpg';
import G13 from './Image/G13.jpg';

// 2025 Images
import S4_1 from './Image/S4_01.JPG'
import S4_2 from './Image/S4_02.JPG'
import S4_3 from './Image/S4_03.JPG'
import S4_4 from './Image/S4_04.jpg'
import S4_5 from './Image/S4_05.jpg'
import S4_6 from './Image/S4_06.jpg'
import S4_7 from './Image/S4_07.jpg'
import S4_8 from './Image/S4_08.jpg'
import S4_9 from './Image/S4_09.jpg'
import S4_10 from './Image/S4_10.jpg'
import S4_11 from './Image/S4_11.jpg'
import S4_12 from './Image/S4_12.jpg'
import S4_13 from './Image/S4_13.JPG'
import S4_14 from './Image/S4_14.JPG'
import S4_15 from './Image/S4_15.JPG'
import S4_16 from './Image/S4_16.JPG'
import S4_17 from './Image/S4_17.jpg'

// 📅 Year-wise images
const images = {
  '2025': [S4_1, S4_2, S4_3, S4_4, S4_5, S4_6, S4_7, S4_8, S4_9, S4_10, S4_11, S4_12, S4_13, S4_14, S4_15, S4_16, S4_17],
  '2024': [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12, G13],
};

const SectionGallery = () => {
  // 🟡 Default to latest year
  const [activeYear, setActiveYear] = useState('2025');

  // Sort years so latest shows first
  const sortedYears = Object.keys(images).sort((a, b) => b - a);

  return (
    <section className="text-center justify-center items-center mx-auto m-2 md:my-10">
      <div className="justify-center items-center m-2 mt-8 gap-5">
        <h1 className="text-4xl mb-6 font-bold text-[#3b0067]">Gallery</h1>

        {/* Year Tabs */}
        <div className="flex justify-center mb-6">
          {sortedYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-7 py-1 m-2 rounded-md text-sm font-semibold ${
                activeYear === year
                  ? 'bg-[#ffbd00] text-black'
                  : 'bg-[#3b0067] text-white'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="flex flex-wrap gap-5 justify-center">
          {images[activeYear].map((src, index) => (
            <div key={index} className="md:w-1/4 w-full">
              <img
                src={src}
                alt={`Gallery ${activeYear} - ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
