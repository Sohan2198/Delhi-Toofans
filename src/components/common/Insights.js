import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const quotes = [
  {
    quote:
      'The aim is to create a self-sustaining ecosystem for sport beyond cricket, keeping our values of Unity, Teamwork, Resilience & Discipline at the core of our being.',
    author: 'Alok Sanghi, Chairman, Resolute Sports',
  },
  {
    quote:
      "For talent to shine, it needs a platform. A foundation which encourages growth not only for the athlete, but sports and society at large. That's where we come in.",
    author: 'Sai Prakash, CEO, Resolute Sports',
  },
];

const Insights = () => (
  // Overlaps the bottom of the hero by a fixed amount; HeroSlider reserves matching space for its controls.
  <div className="relative z-10 mx-auto -mt-6 max-w-[900px] px-4 md:-mt-14">
    <div className="rounded-2xl bg-toofan-purple px-2 shadow-2xl ring-1 ring-white/10 md:px-4">
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={1} rewind navigation className="insights-slider">
        {quotes.map(({ quote, author }) => (
          <SwiperSlide key={author}>
            <figure className="relative mx-8 rounded-lg py-5 text-center text-white md:mx-12 md:p-6">
              <blockquote className="text-sm md:text-xl">“{quote}”</blockquote>
              <div className="my-4 border-t border-toofan-yellow" />
              <figcaption className="text-sm font-bold md:text-xl">{author}</figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Insights;
