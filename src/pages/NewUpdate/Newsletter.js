import React from 'react';

const Newsletter = () => {
  return (
    <section className='newsletter py-10 bg-[#ffbd00]'>
      <div className='newsletter-content flex justify-center mx-auto'>
        <div className=''>
          <h2 className='text-3xl mb-4 text-center'>Want to be the first to get our Tofani updates?</h2>
          <h2 className='text-3xl mb-8 text-center'>Subscribe to our newsletter now!</h2>
          <form className='flex flex-col justify-center'>
            <input
              type="email"
              placeholder='Email id'
              className='py-2 px-4 border border-gray-300 rounded-md text-center w-96 mx-auto'
            />
            <input
              type="submit"
              value="Subscribe"
              className='bg-[#3b0067] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md mt-4 w-48 mx-auto'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;