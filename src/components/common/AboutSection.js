import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import about1 from '../../pages/Gallery/Image/About-01.webp';
import about2 from '../../pages/Gallery/Image/About-02.webp';
import about3 from '../../pages/Gallery/Image/About-03.webp';
import about4 from '../../pages/Gallery/Image/About-04.webp';

const images = [about1, about2, about3, about4];

const VALUES = ['Teamwork', 'Unity', 'Discipline', 'Resilience'];

const HIGHLIGHTS = [
  { value: 'Runners-up', label: 'PVL Season 3' },
  { value: '7', label: 'Straight league wins on debut' },
];

const navButtonClass =
  'grid h-10 w-10 place-items-center rounded-full bg-toofan-yellow text-toofan-purple shadow transition hover:scale-105 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white';

const AboutSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-w-0">
      {/* Decorative offset block behind the frame */}
      <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl bg-toofan-yellow sm:block" />

      <div className="relative rounded-2xl bg-toofan-purple p-3 shadow-xl sm:p-4">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop
          spaceBetween={12}
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className="overflow-hidden rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt={`Delhi Toofans moment ${index + 1} of ${images.length}`}
                className="aspect-[31/24] w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-sm font-semibold tabular-nums text-white/80" aria-live="polite">
            <span className="text-toofan-yellow">{String(activeIndex + 1).padStart(2, '0')}</span> /{' '}
            {String(images.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            <button ref={prevRef} type="button" className={navButtonClass} aria-label="Previous photo">
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button ref={nextRef} type="button" className={navButtonClass} aria-label="Next photo">
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/** "About Us" block shared by the home page (with calls to action) and the About page. */
const AboutSection = ({ showLearnMore = true }) => (
  <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <AboutSlider />

      <div>
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-toofan-purple/70">
          <span className="h-1 w-8 rounded-full bg-toofan-yellow" aria-hidden="true" />
          Who we are
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-toofan-purple md:text-5xl">About Us</h2>
        <p className="mt-5 leading-relaxed text-gray-700">
          Resolute Sports Pvt. Ltd. is a sporting venture that aims to revolutionize India's sports landscape with a
          holistic ecosystem beyond cricket based on the principle of Teamwork, Unity, Discipline and Resilience that
          impacts not only the stakeholders, but society at large.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Our values">
          {VALUES.map((value) => (
            <li
              key={value}
              className="rounded-full border border-toofan-purple/20 bg-toofan-purple/5 px-3 py-1 text-sm font-semibold text-toofan-purple"
            >
              {value}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-xl font-bold text-gray-900">About Delhi Toofans</h3>
        <p className="mt-3 leading-relaxed text-gray-700">
          Resolute Sports Pvt. Ltd. is the proud owner of Delhi Toofans, a team which embodies the essence and spirit of
          Northern India within the Rupay Prime Volleyball League. With a thrilling entrance in PVL's third season, the
          team unleashed a storm, dominating 7 consecutive league matches and storming into the Finals. This Toofani
          debut cemented their status as a force to be reckoned with, embodying passion, prowess and unrelenting
          determination that's redefining Indian Volleyball.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col-reverse justify-end rounded-xl border-l-4 border-toofan-yellow bg-toofan-purple/5 px-4 py-3"
            >
              <dt className="mt-1 text-sm text-gray-600">{label}</dt>
              <dd className="whitespace-nowrap text-xl font-extrabold text-toofan-purple sm:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>

        {showLearnMore && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/About"
              className="rounded-md border-2 border-toofan-yellow bg-toofan-yellow px-6 py-3 font-bold text-toofan-purple transition hover:border-toofan-purple hover:bg-toofan-purple hover:text-toofan-yellow"
            >
              Learn More
            </Link>
            <Link
              to="/Squad"
              className="rounded-md border-2 border-toofan-purple px-6 py-3 font-bold text-toofan-purple transition hover:bg-toofan-purple hover:text-white"
            >
              Meet the Squad
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default AboutSection;
