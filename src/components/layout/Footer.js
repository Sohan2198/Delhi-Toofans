import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-black text-white py-8 mx-auto md:px-[9rem]">
      <div className="container md:px-20 px-3">
        {/* Flex container for the footer */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Column 1 */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2"> {/* Change to a grid layout */}
              <ul className="space-y-2 grid">
                
                <Link to={'/About'}>About Us</Link>
                <Link to={'/Squad'}>Toofani Squad</Link>
                {/* <Link to={'/News-Updates'}>News & Updates</Link> */}
                <Link to={'/Fixtures&Results'}>Fixtures & Results</Link>
                <Link to={'/Gallery'}>Gallery</Link>
                <Link to={'/Sponsors'}>Sponsors</Link>
              </ul>
            </div>
          </div>

          {/* Column 2 (About Us) */}
          <div className="flex-1 ">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p className="text-sm leading-relaxed">
              <span className='uppercase font-semibold'>Resolute Sports Private Limited</span><br />
              10th Floor, Kataria Arcade, Off SG Highway,<br/> Post: Makarba, Ahmedabad - 380051, Gujarat, India
            </p>
          </div>

          {/* Column 3 (Contact Us and Social Media) */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <p className="text-sm leading-relaxed mb-1">
              The newest addition to the Rupay Prime Volleyball League
            </p>
            <span className='font-semibold'> #DilSeToofan | #DelhiToofans</span>
            <div className="flex space-x-4 mt-3">
              <a href=' https://www.facebook.com/profile.php?id=61555001505743' target='_blank' rel='noopener noreferrer' className="hover:text-[#3b0067]" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href='https://x.com/DelhiToofans' target='_blank' rel='noopener noreferrer' className="hover:text-[#3b0067]" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href='https://www.instagram.com/delhitoofansofficial/' target='_blank' rel='noopener noreferrer' className="hover:text-[#3b0067]" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href='https://www.youtube.com/@DelhiToofans' target='_blank' rel='noopener noreferrer' className='hover:text-[#3b0067]' aria-label='YouTube'>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
