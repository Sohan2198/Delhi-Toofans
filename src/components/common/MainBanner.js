import React from 'react';
import Banner from '../../assets/Banner/banner.jpg';

const MainBanner = () => {
  return (
    <div className='relative w-full h-auto'>
      <img className='w-full object-fill h-auto' src={Banner} alt='Main Banner' />

      {/* Overlay */}
      <div className='absolute inset-0 flex'>
        {/* Left side for image */}
        <div className='w-1/3 h-full'></div>

        {/* Right side overlay with triangle and square */}
        <div className='w-2/3 h-full flex'>
          {/* Triangle - 60% width */}
          <div className='relative w-3/5 h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-1 clip-triangle'>
              {/* Adding lines */}
              <div className='line-top'></div>
              <div className='line-bottom'></div>
            </div>
          </div>

          {/* Square - 30% width */}
          <div className='w-3/10 h-full bg-white bg-opacity-1 flex flex-col justify-center items-start'>
            <img src='/path-to-logo/logo.png' alt='Logo' className='w-20 h-20 mb-4' />
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>Your Name</h1>
            <p className='text-lg text-gray-700 mb-6'>
              Some descriptive text about the banner. You can add more details here.
            </p>
            <button className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'>
              Button Text
            </button>
          </div>

          {/* Rest of the right side - Filling the remaining width */}
          <div className='flex-grow'></div>
        </div>
      </div>

      {/* Additional styling */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0 50%, 100% 100%);
          position: relative;
        }

        .line-top, .line-bottom {
          position: absolute;
          background-color: white;
          width: 2px;
        }

        .line-top {
          top: 0;
          left: 0;
          height: 100%;
          transform-origin: top left;
          transform: rotate(26.5deg);
        }

        .line-bottom {
          bottom: 0;
          left: 0;
          height: 100%;
          transform-origin: bottom left;
          transform: rotate(-26.5deg);
        }
      `}</style>
    </div>
  );
}

export default MainBanner;
