import React from 'react';
import { FaEye } from 'react-icons/fa';

const formatViewCount = (viewCount) => {
  if (viewCount >= 1000) {
    return `${(viewCount / 1000).toFixed(1)}k`;
  } else {
    return viewCount.toString();
  }
};

const VideoItem = ({ videoSrc, author, view, time, title }) => {
  return (
    <div className='border pb-4'>
      <video src={videoSrc} className='bg-gray-500 h-96 w-full' />
      <div className='flex gap-4 my-7'>
        <span className='bg-[#3b0067] text-white text-right px-2 w-24'>{author}</span>
        <span className='text-gray-500 flex items-center'>
          <FaEye className='mr-1' />
          {formatViewCount(view)}
        </span>
      </div>
      <div className='md:pl-10 px-3 md:w-4/5'>
        <h2 className='text-2xl font-bold py-1'>{title}</h2>
        <span className='text-gray-500 py-2'>{time}</span>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <section className='md:px-[11rem] py-4'>
      <h2 className='text-3xl text-center text-[#3b0067] font-bold py-3'>Videos</h2>
      <div className='py-3'>
        <VideoItem
          videoSrc=''
          author='Vogue'
          view={760600}
          time='John | 2 hours ago'
          title='15 Date Night Outfits Inspired by Celebs'
        />
      </div>
    </section>
  );
};

export default Video;