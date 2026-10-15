import React from 'react';

const NewsItem = ({ image, title, author, view, time, description }) => {
  return (
    <div className='border my-3 pb-3'>
      <img src={image} alt='' className='bg-gray-500 h-96' />
      <div className='flex gap-4 my-7'>
        <span className='bg-[#3b0067] text-white text-right px-2 w-24'>{author}</span>
        <span>{view}</span>
      </div>
      <div className='md:pl-10 px-3 md:w-4/5'>
        <h2 className='text-2xl font-bold py-1'>{title}</h2>
        <span className='text-gray-500 py-2'>{time}</span>
        <p className='text-m py-2'>{description}</p>
      </div>
    </div>
  );
};

const LatestNews = () => {
  return (
    <section className='md:px-[11rem] py-4'>
      <div className='py-2 justify-items-center'>
        <h1 className='text-3xl text-center text-[#3b0067] font-bold'>Latest News</h1>
        <div className=''>
        <NewsItem
            image=''
            title='No, Really: Congress Is About To Hand Over Your Personal'
            author='Vogue'
            view='132.6k'
            time='John | 2 hours ago'
            description='New is a direct tool of influence on public consciousness. The goal of the newes is to provide to teh society objective information about a particular'
          />
        </div>
        <div className='flex gap-5'>
          <NewsItem
            image=''
            title='No, Really: Congress Is About To Hand Over Your Personal'
            author='Vogue'
            view='102.6k'
            time='John | 2 hours ago'
            description='New is a direct tool of influence on public consciousness. The goal of the newes is to provide to teh society objective information about a particular'
          />
          <NewsItem
            image=''
            title='No, Really: Congress Is About To Hand Over Your Personal'
            author='Vogue'
            view='130.6k'
            time='John | 2 hours ago'
            description='New is a direct tool of influence on public consciousness. The goal of the newes is to provide to teh society objective information about a particular'
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;