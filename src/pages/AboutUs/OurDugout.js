import React from 'react';
import AlokSanghi from './Image/Alok Sanghi.jpg';
import SaiPrakash from './Image/Sai Prakash.png';

const OurDugout = () => {
  const images = [
    { src: AlokSanghi, alt: 'Alok Sanghi', name: 'Alok Sanghi,', designation:'Chairman, Resolute Sports', description: '“The aim is to create a self-sustaining ecosystem for sport beyond cricket, keeping our values of Unity, Teamwork, Resilience & Discipline at the core of our being.”' },
    { src: SaiPrakash, alt: 'Sai Prakash', name: 'Sai Prakash,', designation:'CEO, Resolute Sports', description: "“For talent to shine, it needs a platform. A foundation which encourages growth not only for the athlete, but sports and society at large. That's where we come in”" },
    
  ];

  return (
    <section className="py-5 mx-auto m-2 justify-center items-center mt-10 md:px-[9rem] gap-4">
      <h2 className="text-center md:text-5xl font-bold mb-6 text-[#3b0067] md:pb-4">Our Dugout</h2>
      <div className="flex flex-warp  justify-center gap-8">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg gap-2 w-1/3">
            <img src={image.src} alt={image.alt} className="w-full object-cover bg-gray-200" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{image.name} {image.designation}</h3>
              <p className="text-m py-3">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDugout;