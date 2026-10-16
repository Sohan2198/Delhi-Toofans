import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ALL_SPONSORS } from '../../data/sponsors';
import SponsorLogo from '../ui/SponsorLogo';

const Sponsors = () => (
  <section className="mx-auto items-center justify-center bg-white md:px-[11.25rem]">
    <div className="container">
      <h2 className="p-4 text-center text-3xl font-bold text-toofan-purple md:text-5xl">Sponsors</h2>

      <div className="flex items-center justify-center rounded-lg p-6">
        <div className="w-full">
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            className="sponsors-slider"
            breakpoints={{ 768: { slidesPerView: 3 } }}
          >
            {ALL_SPONSORS.map((sponsor) => (
              <SwiperSlide key={sponsor.name} className="!flex items-center justify-center">
                <SponsorLogo {...sponsor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsors;
