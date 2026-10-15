import React from 'react'
import news from './Image/NewsUpdate.jpg';
const Banner = () => {
  return (
    <section>
        <div className='flex flex-col md:flex-row'>
          <div className='bg-[#3b0067] w-full'>
            <img src={news} alt="News" className='w-auto' />
            <div className=' text-white p-4 rounded-b-2xl justify-center text-center md:px-[11.25rem]'>
                <h2 className='text-3xl font-bold pb-3 pt-5'>PVL 2024: Delhi Toofans edges past Ahmedabad Defenders to face Calicut Heroes in title clash</h2>
                <p className='text-sm font-semibold pb-3'>Delhi Toofans edged out the reigning champion Ahmedabad Defenders 3-2 in a thrilling five-set encounter in the eliminator of Prime Volleyball League season three on Tuesday</p>
                <button className='text-[#3b0067] bg-[#ffbd00] font-bold py-2 px-6 rounded-lg my-3'>Learn More</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner