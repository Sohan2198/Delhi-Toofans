import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import about1 from '../Gallery/Image/About-01.jpg';
import about2 from '../Gallery/Image/About-02.jpg';
import about3 from '../Gallery/Image/About-03.jpg';
import about4 from '../Gallery/Image/About-04.jpg'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

  
const AboutUsImage = () => {
    const images = [
        { src: about1, alt: 'Image 1' },
        { src: about2, alt: 'Image 2' },
        { src: about3, alt: 'Image 3' },
        { src: about4, alt: 'Image 3' },
      ];
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mx-auto m-2 mt-10 md:px-[9rem] gap-4">
      <div className="md:w-1/2 w-full h-full overflow-hidden relative bg-[#3b0067] p-7 pb-10 rounded-xl mt-3">
        <Swiper 
          modules={[Navigation, Autoplay]}
          navigation={true} 
          loop={true}
          spaceBetween={10}
          autoplay={
            {
              enabled:true,
              delay:4000,
              disableOnInteraction:false,
            }
          }
          speed={6000}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full mb-5"> {/* Added relative positioning to contain absolute elements */}
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className=" p-1 text-black bg-[#ffbd00] rounded-md w-12">
                  {index + 1} / {images.length}
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:w-1/2 w-full p-6 pt-10 md:mt-6">
        <h2 className='text-[#3b0067] md:text-5xl font-bold pb-5 md:text-left text-center text-3xl'>About Us</h2>
        <p className="md:text-m text-sm pb-3">Resolute Sports Pvt. Ltd. is a sporting venture that aims to revolutionize India's sports landscape with a holistic ecosystem beyond cricket based on the principle of Teamwork, Unity, Discipline and Resilience that impacts not only the stakeholders, but society at large.</p>
        <p className="md:text-xl text-m pb-3 mt-4 font-bold">About Delhi Toofans</p>
        <p className="md:text-m text-sm pb-3">Resolute Sports Pvt. Ltd. is the proud owner of Delhi Toofans, a team which embodies the essence and spirit of Northern India within the Rupay Prime Volleyball League. With a thrilling entrance in PVL's third season, the team unleashed a storm, dominating 7 consecutive league matches and storming into the Finals. This Toofani debut cemented their status as a force to be reckoned with, embodying passion, prowess and unrelenting determination that's redefining Indian Volleyball.</p>
      </div>
    </section>
  )
}

export default AboutUsImage
