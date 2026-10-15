import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 2024
import image241 from '../../pages/Gallery/Image/Gallery1.jpg';
import image242 from '../../pages/Gallery/Image/Gallery2.jpg';
import image243 from '../../pages/Gallery/Image/Gallery3.jpg';
import image244 from '../../pages/Gallery/Image/Gallery4.jpg';
import image245 from '../../pages/Gallery/Image/Gallery5.jpg';
import image246 from '../../pages/Gallery/Image/Gallery6.jpg';

// 2025
import image251 from '../../pages/Gallery/Image/Gallery12.jpg';
import image252 from '../../pages/Gallery/Image/Gallery7.jpg';
import image253 from '../../pages/Gallery/Image/Gallery8.jpg';
import image254 from '../../pages/Gallery/Image/Gallery9.jpg';
import image255 from '../../pages/Gallery/Image/Gallery10.jpg';
import image256 from '../../pages/Gallery/Image/Gallery11.jpg';

const Gallery = () => {
  // 🟡 Default to latest year (2025)
  const [activeTab, setActiveTab] = useState('2025');

  const images = {
    '2025': [image251, image252, image253, image254, image255, image256],
    '2024': [image241, image242, image243, image244, image245, image246],
  };

  // Sort keys so latest appears first in tab order
  const sortedYears = Object.keys(images).sort((a, b) => b - a);

  return (
    <section className="text-center justify-center items-center mx-auto m-2 md:my-10 md:px-[9rem]">
      <div className="md:my-10 my-2">
        <h2 className="text-center text-3xl font-bold text-[#3b0067] pb-4">Gallery</h2>

        {/* Year Tabs */}
        <div className="flex justify-center mb-5">
          {sortedYears.map((year) => (
            <button
              key={year}
              className={`px-7 py-1 m-2 rounded-md text-sm ${
                activeTab === year
                  ? 'bg-[#ffbd00] text-black font-semibold'
                  : 'bg-[#3b0067] text-white font-semibold'
              } rounded`}
              onClick={() => setActiveTab(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 md:mx-24 my-1">
          {images[activeTab].map((src, index) => (
            <div key={index} className="rounded-lg bg-[#3b0067] p-2">
              <img
                src={src}
                alt={`Gallery ${activeTab} - ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <Link to="/Gallery">
        <button className="bg-[#ffbd00] px-8 py-1.5 text-sm rounded-md text-black font-medium">
          View All
        </button>
      </Link>
    </section>
  );
};

export default Gallery;
