import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../FixtureResult/Image/Fixture-and-results-Banner.jpg';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FixtureResultBanner = () => {
  return (
    <>
    
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="Slide 1"
            className="w-full md:h-[600px] h-[300px] object-cover"
          />
          
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="absolute md:bottom-[-10px] z-10 left-1/2 transform -translate-x-1/2 text-center bg-[#ffbd00] rounded-md">
    <h2 className="md:text-2xl text-xs uppercase font-extrabold py-2 px-6 ">
     PVL Season 4 - 2025
    </h2>
  </div>
  </>
  );
};


export default FixtureResultBanner