import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Insights from './Insights';
import { Link } from 'react-router-dom';

// Banner images
import banner1Small from '../../assets/Banner/Mobile-banner-01.png';
import banner1Large from '../../assets/Banner/Banner-1.jpg';
import banner2Small from '../../assets/Banner/Mobile-banner-02.jpg';
import banner2Large from '../../assets/Banner/Banner-2.jpg';
import banner3Small from '../../assets/Banner/Mobile-banner-03.png';
import banner3Large from '../../assets/Banner/Banner-3.jpg';
// import banner4Small from '../../assets/Banner/Mobile-banner-04.png';
// import banner4Large from '../../assets/Banner/Banner-4.jpg';

const SlideShow = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={4000}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom swiper-pagination-bullet" style="--swiper-pagination-color: #ffbd00;"></span>`;
          },
        }}
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <picture>
              <source media="(max-width: 480px)" srcSet={banner1Small} />
              <source media="(min-width: 481px)" srcSet={banner1Large} />
              <img src={banner1Large} alt="Delhitoofans" className="w-full md:h-auto h-[480px] object-cover" />
            </picture>
            <div className="absolute md:bottom-24 bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 w-full text-center md:p-6">
              <h2 className="md:text-5xl text-3xl uppercase font-extrabold text-[#ffbd00]">
                Runners up
              </h2>
              <h3 className="md:text-4xl text-2xl uppercase text-white font-semibold md:whitespace-nowrap w-full md:px-3">
                Rupay Prime Volley League Season 3
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <picture>
              <source media="(max-width: 480px)" srcSet={banner2Small} />
              <source media="(min-width: 481px)" srcSet={banner2Large} />
              <img src={banner2Large} alt="Delhitoofans" className="w-full md:h-auto h-[480px] object-cover" />
            </picture>
            <div className="absolute md:bottom-32 md:left-1/2 transform bottom-6 md:p-6 p-3 text-wrap">
              <p className="md:text-4xl text-sm uppercase text-white md:px-14 md:text-left text-center">
                We are committed to promote sports and providing a platform to aspiring athletes
              </p>
              <div className="flex flex-col items-center">
                <hr className="w-auto border-t-1 border-[#ffbd00] mb-2" />
                <h2 className="md:text-4xl text-xl uppercase text-[#ffbd00] font-bold mt-3">
                  Alok Sanghi
                </h2>
                <hr className="w-auto border-t-1 border-[#ffbd00] mt-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <picture>
              <source media="(max-width: 480px)" srcSet={banner3Small} />
              <source media="(min-width: 481px)" srcSet={banner3Large} />
              <img src={banner3Large} alt="Slide 3" className="w-full md:h-auto h-[480px] object-cover" />
            </picture>
            <div className="absolute md:bottom-32 bottom-10 md:left-1/2 md:transform md:text-left text-center md:pl-10 ">
              <h2 className="md:text-8xl text-3xl uppercase font-extrabold text-white">
                Be <span className="text-[#ffbd00]">Our toofani</span> Partner!
              </h2>
              <button className="rounded-lg mt-3 font-bold md:px-6 md:py-3 bg-[#ffbd00] px-2 py-1">
                <Link to={'/Contact'}> Contact Us </Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="relative h-full w-full">
            <picture>
              <source media="(max-width: 480px)" srcSet={banner4Small} />
              <source media="(min-width: 481px)" srcSet={banner4Large} />
              <img src={banner4Large} alt="Slide 4" className="w-full md:h-auto h-[480px] object-cover" />
            </picture>
            <div className="absolute md:bottom-28 bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 w-full  text-center md:p-6">
              <h2 className="md:text-4xl text-2xl uppercase font-extrabold text-white mb-5">
                The toofan action from the auction
              </h2>
              <span className="rounded-lg mt-3 font-bold md:px-6 md:py-3 px-2 py-1 bg-[#ffbd00]">
              June 8, 2025
              </span>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="mb-32">
        <Insights />
      </div>
    </>
  );
};

export default SlideShow;
