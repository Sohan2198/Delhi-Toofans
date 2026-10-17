import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { A11y, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1Large from '../../assets/Banner/Banner-1.webp';
import banner2Large from '../../assets/Banner/Banner-2.webp';
import banner3Large from '../../assets/Banner/Banner-3.webp';
import banner1Small from '../../assets/Banner/Mobile-banner-01.webp';
import banner2Small from '../../assets/Banner/Mobile-banner-02.webp';
import banner3Small from '../../assets/Banner/Mobile-banner-03.webp';
import Insights from './Insights';

const AUTOPLAY_DELAY_MS = 6000;

const primaryCta =
  'inline-flex items-center rounded-md border-2 border-toofan-yellow bg-toofan-yellow px-6 py-3 font-bold text-toofan-purple transition hover:bg-transparent hover:text-toofan-yellow';
const secondaryCta =
  'inline-flex items-center rounded-md border-2 border-white/80 px-6 py-3 font-bold text-white transition hover:border-toofan-yellow hover:text-toofan-yellow';

/**
 * `align` decides where copy sits on desktop, matching the empty area designed into each banner:
 * 'bottom' = centred over the bottom fade, 'right' = vertically centred in the right half.
 * On mobile copy always sits at the bottom over a gradient.
 */
const slides = [
  {
    id: 'runners-up',
    small: banner1Small,
    large: banner1Large,
    alt: 'Delhi Toofans squad celebrating with their PVL Season 3 medals',
    align: 'bottom',
    eyebrow: 'PVL Season 3',
    title: <span className="text-toofan-yellow">Runners-up</span>,
    subtitle: 'RuPay Prime Volleyball League',
    actions: [{ to: '/Squad', label: 'Meet the Squad', primary: true }],
  },
  {
    id: 'chairman',
    small: banner2Small,
    large: banner2Large,
    alt: 'Alok Sanghi, Chairman, Resolute Sports',
    align: 'right',
    quote: 'We are committed to promoting sports and providing a platform to aspiring athletes.',
    author: 'Alok Sanghi',
    role: 'Chairman, Resolute Sports',
  },
  {
    id: 'partner',
    small: banner3Small,
    large: banner3Large,
    alt: 'Delhi Toofans players in action at the net',
    align: 'right',
    eyebrow: 'Partnerships',
    title: (
      <>
        Be <span className="text-toofan-yellow">our Toofani</span> partner!
      </>
    ),
    actions: [
      { to: '/Contact', label: 'Contact Us', primary: true },
      { to: '/Sponsors', label: 'Our Sponsors' },
    ],
  },
];

const SlideCopy = ({ slide }) => {
  if (slide.quote) {
    return (
      <figure className="hero-animate [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
        <blockquote className="text-xl font-semibold uppercase leading-snug text-white sm:text-2xl xl:text-4xl">
          “{slide.quote}”
        </blockquote>
        <figcaption className="mt-5 flex items-center justify-center gap-4 md:justify-start">
          <span className="h-0.5 w-10 bg-toofan-yellow" aria-hidden="true" />
          <span>
            <span className="block text-xl font-extrabold uppercase text-toofan-yellow md:text-3xl">
              {slide.author}
            </span>
            <span className="block text-sm text-white/80 md:text-base">{slide.role}</span>
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="hero-animate [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-toofan-yellow md:text-sm">{slide.eyebrow}</p>
      <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none text-white md:text-5xl xl:text-7xl">
        {slide.title}
      </h2>
      {slide.subtitle && (
        <p className="mt-3 text-lg font-semibold uppercase text-white md:text-2xl">{slide.subtitle}</p>
      )}
      {slide.actions && (
        <div
          className={`mt-6 flex flex-wrap justify-center gap-3 ${slide.align === 'right' ? 'md:justify-start' : ''}`}
        >
          {slide.actions.map(({ to, label, primary }) => (
            <Link key={to} to={to} className={primary ? primaryCta : secondaryCta}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const copyPosition = {
  bottom: 'md:items-end md:justify-center md:pb-28 md:text-center lg:pb-36',
  right: 'md:items-center md:justify-end md:pb-14 md:text-left',
};

const controlButtonClass =
  'grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition hover:border-toofan-yellow hover:bg-toofan-yellow hover:text-toofan-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-toofan-yellow';

const HeroSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const progressRef = useRef(null);

  const togglePlayback = () => {
    if (!swiper) return;
    if (isPaused) swiper.autoplay.start();
    else swiper.autoplay.stop();
    setPaused(!isPaused);
  };

  return (
    <>
      <section className="relative" aria-roledescription="carousel" aria-label="Highlights">
        <h1 className="sr-only">Delhi Toofans — Official Prime Volleyball League team</h1>

        <Swiper
          modules={[Autoplay, EffectFade, A11y, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          rewind
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: AUTOPLAY_DELAY_MS, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
          onAutoplayTimeLeft={(_, __, progress) => {
            progressRef.current?.style.setProperty('--hero-progress', String(1 - progress));
          }}
          className="hero-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative overflow-hidden">
                <picture>
                  <source media="(max-width: 767px)" srcSet={slide.small} />
                  <img
                    src={slide.large}
                    alt={slide.alt}
                    className="hero-image aspect-[5/6] w-full object-cover md:aspect-[1920/830]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchpriority={index === 0 ? 'high' : undefined}
                  />
                </picture>

                {/* Legibility gradient wherever copy sits over the photo */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-toofan-purple via-toofan-purple/70 to-transparent ${
                    slide.align === 'bottom' ? 'md:h-2/3 md:via-toofan-purple/40' : 'md:hidden'
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`absolute inset-0 mx-auto flex max-w-7xl items-end justify-center px-6 pb-24 text-center md:px-10 ${
                    copyPosition[slide.align]
                  }`}
                >
                  <div className={slide.align === 'right' ? 'md:w-1/2 md:pl-8' : 'max-w-3xl'}>
                    <SlideCopy slide={slide} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-x-0 bottom-12 z-20 md:bottom-20">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 md:justify-between md:px-10">
            <div ref={progressRef} className="pointer-events-auto flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => swiper?.slideTo(index)}
                  aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                  aria-current={activeIndex === index}
                  className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/30 md:w-14"
                >
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full bg-toofan-yellow ${
                      activeIndex === index ? 'hero-progress-bar' : index < activeIndex ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm font-semibold tabular-nums text-white/90">
                {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <div className="pointer-events-auto hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={togglePlayback}
                className={controlButtonClass}
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              >
                {isPaused ? <Play size={18} /> : <Pause size={18} />}
              </button>
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                className={controlButtonClass}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                className={controlButtonClass}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Insights />
    </>
  );
};

export default HeroSlider;
