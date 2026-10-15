import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './Image/Gallery-Banner.jpg';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const GalleryBanner = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img src={image1} alt="Slide 1" className="w-full object-cover h-48 md:h-full" />
          {/* <div className="absolute left-1/2 md:top-1/3 top-1/4 z-10 md:px-10 px-2">
            <h1 className="md:text-6xl text-m text-[#ffbd00] font-bold uppercase">
              Player of the tournament<br/> 2023
            </h1>
            <div className="flex text-white justify-stretch md:gap-7 md:pt-4 gap-1">
              {[
                {
                  value: 106,
                  label: 'Total',
                  subtitle: 'Points',
                },
                {
                  value: 75,
                  label: 'Attack',
                  subtitle: 'Points',
                },
                {
                  value: 26,
                  label: 'Block',
                  subtitle: 'Points',
                },
                {
                  value: 5,
                  label: 'Serve',
                  subtitle: 'Points',
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="md:text-3xl text-m font-bold">{item.value}</span>
                  <div className="md:text-xl text-xs grid">
                    <span>{item.label}</span>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default GalleryBanner;