import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './Image/About-us-Banner.jpg';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderShow = () => {
  return (
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
            className="w-full md:h-auto h-[300px] object-cover"
          />
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center p-6">
            <h2 className="md:text-5xl text-2xl uppercase font-extrabold text-yellow-400">
              
            </h2>
            <h3 className='md:text-4xl text-xl uppercase text-white font-semibold whitespace-nowrap'>
               
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};


export default SliderShow