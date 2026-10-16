import React from 'react';
import AlokSanghi from './Image/Alok Sanghi.jpg';
import SaiPrakash from './Image/Sai Prakash.webp';

const leaders = [
  {
    photo: AlokSanghi,
    name: 'Alok Sanghi',
    designation: 'Chairman, Resolute Sports',
    quote:
      'The aim is to create a self-sustaining ecosystem for sport beyond cricket, keeping our values of Unity, Teamwork, Resilience & Discipline at the core of our being.',
  },
  {
    photo: SaiPrakash,
    name: 'Sai Prakash',
    designation: 'CEO, Resolute Sports',
    quote:
      "For talent to shine, it needs a platform. A foundation which encourages growth not only for the athlete, but sports and society at large. That's where we come in.",
  },
];

const OurDugout = () => (
  <section className="m-2 mx-auto mt-10 items-center justify-center gap-4 py-5 md:px-[9rem]">
    <h2 className="mb-6 text-center text-3xl font-bold text-toofan-purple md:pb-4 md:text-5xl">Our Dugout</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {leaders.map(({ photo, name, designation, quote }) => (
        <figure key={name} className="w-full overflow-hidden rounded-lg shadow-lg sm:w-2/5 md:w-1/3">
          <img src={photo} alt={name} className="w-full bg-gray-200 object-cover" loading="lazy" />
          <figcaption className="p-4">
            <h3 className="text-lg font-semibold">
              {name}, {designation}
            </h3>
            <blockquote className="py-3 text-base">“{quote}”</blockquote>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default OurDugout;
