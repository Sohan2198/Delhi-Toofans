import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';

const Insights = () => { 
  return (
    <div className="flex justify-center items-center mb-10 "> 
      <div className="max-w-[900px] w-full px-4 bg-[#3b0067] rounded-2xl absolute md:mt-12 mt-20 z-10"> 
        <Swiper 
          modules={[Navigation]} 
          spaceBetween={0} 
          slidesPerView={1} 
          loop={true} 
          navigation={true} 
          > 
            <SwiperSlide> 
              <div className="md:mx-12 text-white md:p-6 text-center rounded-lg relative p-3 mx-1"> 
                <p className="md:text-xl text-sm">"The aim is to create a self-sustaining ecosystem for sport beyond cricket, keeping our values of Unity, Teamwork, Resilience & Discipline at the core of our being."</p> 
                <div className="my-4 border-t border-[#ffbd00]"></div> 
                <h3 className="font-bold md:text-xl text-sm">Alok Sanghi, Chairman, Resolute Sports</h3> </div> 
            </SwiperSlide> 
            <SwiperSlide>               
              <div className="md:mx-12 text-white md:p-6 text-center rounded-lg relative p-3 mx-1"> 
                <p className="md:text-xl text-sm">"For talent to shine, it needs a platform. A foundation which encourages growth not only for the athlete, but sports and society at large. That's where we come in."</p> 
                <div className="my-4 border-t border-[#ffbd00]"></div> 
                <h3 className="font-bold md:text-xl text-sm ">Sai Prakash, CEO, Resolute Sports</h3> </div> 
            </SwiperSlide> 
          </Swiper> 
        </div> 
      </div>
    ); 
  };

export default Insights; 