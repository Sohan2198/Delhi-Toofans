import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import sharesquare from '../../pages/Sponsors/Sponsors/Sharesquare logo.png'
import arrival from '../../pages/Sponsors/Sponsors/Arrival logo.png'
import stae from '../../pages/Sponsors/Sponsors/Stae Hotel logo.png'
import gaana from '../../pages/Sponsors/Sponsors/Gaana logo.png'
import rysum from '../../pages/Sponsors/Sponsors/Rysum logo.png'
import exicom from '../../pages/Sponsors/Sponsors/exicom logo.png'

const sponsors = [
  { image: sharesquare, link: 'https://sharesquare.ae/', target: '_blank' },
  { image: arrival, link: 'https://www.thearrivalhotels.com/', target: '_blank' },
  { image: stae, link: 'https://staehotels.com/', target: '_blank' },
  { image: gaana, link: 'https://gaana.com/', target: '_blank' },
  { image: rysum, link: 'https://rysumsports.com/', target: '_blank' },
  { image: exicom, link: 'https://www.exicom.com/', target: '_blank' },
  
];

const Sponsors = () => {
  return (
    <section className="justify-center items-center mx-auto md:px-[11.25rem] bg-white">
      <div className="container">
        <h2 className="text-center md:text-5xl text-3xl font-bold p-4 text-[#3b0067]">Sponsors</h2>

        <div className="rounded-lg p-6 flex justify-center items-center">
          <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="sponsors-slider"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {sponsors.map((sponsor, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    {sponsor.link ? (
                      <a
                        href={sponsor.link}
                        target={sponsor.target}
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={sponsor.image}
                          alt={`Sponsor ${index + 1}`}
                          className="inline-block w-auto h-auto"
                        />
                      </a>
                    ) : (
                      <img
                        src={sponsor.image}
                        alt={`Sponsor ${index + 1}`}
                        className="inline-block w-auto h-auto"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: purple;
            width: 20px;
            height: 20px;
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Sponsors;
