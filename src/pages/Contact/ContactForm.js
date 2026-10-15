import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  // Define contact and social media links outside of the component to avoid recreating them on every render.
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61555001505743', icon: <FaFacebook />, label: 'Facebook' },
    { href: 'https://x.com/DelhiToofans', icon: <FaTwitter />, label: 'Twitter' },
    { href: 'https://www.instagram.com/delhitoofansofficial/', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.youtube.com/@DelhiToofans', icon: <FaYoutube />, label: 'YouTube' },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Contact Information */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Delhi Toofans</h2>
            <span className="text-lg font-semibold">Resolute Sports Private Limited</span>
            <p className="text-sm mt-2">
              10th Floor, Kataria Arcade, Off SG Highway, Post: Makarba, Ahmedabad - 380051, Gujarat, India
            </p>
            <p className="text-sm mt-6 leading-relaxed">
              The newest addition to the Rupay Prime Volleyball League<br />
              <span className="font-semibold">#DilSeToofan | #DelhiToofans</span>
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3b0067]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            {/* Contact Information */}
            <div className="my-2 mt-6">
              <p className="grid">
                <span className="text-xl text-[#3b0067] font-semibold">Contact:</span>
                contact@resolutesports.in | +91 79 4992 0484
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4" action='https://submit-form.com/prZT6IzeM'>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>

              {/* Mobile and Email in Flex */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Mobile Number Input */}
                <div className="flex-1">
                  <label htmlFor="mobile" className="sr-only">Your Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                    placeholder="Your Mobile Number"
                    aria-label="Your Mobile Number"
                  />
                </div>

                {/* Email Address Input */}
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                  placeholder="Write your message here..."
                  aria-label="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex">
                <button
                  type="submit"
                  className="py-2 px-10 bg-[#ffbd00] text-white font-semibold rounded-md shadow hover:bg-[#3b0067] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b0067]" 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
