import React from 'react'

import sharesquare from './Sponsors/Sharesquare logo.png'
import arrival from './Sponsors/Arrival logo.png'
import stae from './Sponsors/Stae Hotel logo.png'
import gaana from './Sponsors/Gaana logo.png'
import rysum from './Sponsors/Rysum logo.png'
import exicom from './Sponsors/exicom logo.png'

const SectionSponsors = () => {
  return (
   <section className='md:mx-10 mt-10 mx-1'>
    <div className='bg-white justify-center items-center rounded-t-2xl shadow-[#3b0067] shadow-inner'>
        <h2 className='text-center text-[#3b0067] text-3xl p-3 my-2 font-semibold'>Principal Sponsors</h2>
        <div className='md:flex grid grid-flow-row items-center justify-center gap-4 py-4'>
            <a href='https://sharesquare.ae/' target='blank'>  
                <img src={sharesquare} alt="Sharesquare" />
            </a>
        </div>
        <h2 className='text-center text-[#3b0067] text-3xl p-3 my-2 font-semibold'>Comfort Partners</h2>
        <div className='md:flex grid grid-flow-row items-center justify-center gap-4 py-4'>
            <a href='https://www.thearrivalhotels.com/' target='blank'>
                <img src={arrival} alt="Arrival Hotel" />
            </a>
            <a href='https://staehotels.com/' target='blank'>
                <img src={stae} alt="Stae Hotel" />
            </a>
        </div>
        <h2 className='text-center text-[#3b0067] text-3xl p-3 font-semibold'>Entertainment partner </h2>
        <div className='md:flex grid grid-flow-row  items-center justify-center gap-4 py-4'>
            <a href='https://gaana.com/' target='blank'>
                <img src={gaana} alt="Gaana" />
            </a>
        </div>
        <h2 className='text-center text-[#3b0067] text-3xl p-3 font-semibold'>Kit Partner </h2>
        <div className='md:flex grid grid-flow-row  items-center justify-center gap-4 py-4'>
            <a href='https://rysumsports.com/' target='blank'>
                <img src={rysum} alt="RYSUM SPORTS" />
            </a>
        </div>
        <h2 className='text-center text-[#3b0067] text-3xl p-3 font-semibold'>Associate Sponsors</h2>
        <div className='md:flex grid grid-flow-row  items-center justify-center gap-4 py-4'>
            <a href='https://www.exicom.com/' target='blank'>
                <img src={exicom} alt="Exicom Tele-Systems" />
            </a>
        </div>
    </div>
   </section>
  )
}

export default SectionSponsors
