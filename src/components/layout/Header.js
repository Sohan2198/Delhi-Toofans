import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Logo/logo192.png';
import { Calendar, Mail, Apple, Building2, Monitor, X } from "lucide-react";

const Header = () => {
  const Menu = [
    { name: "About Us", link: "/About" },
    { name: "Toofani Squad", link: "/Squad" },
    { name: "Fixtures & Results", link: "/Fixtures&Results" },
    { name: "Gallery", link: "/Gallery" },
    { name: "Sponsors", link: "/Sponsors" },
    // { name: "Add", link: "/Add" }, 
    { name: "Schedule", link: "#" }, // Prevent navigation
  ];

  const [open, setOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const location = useLocation();

  const calendarOptions = [
    {
      label: "Google",
      icon: <Calendar size={40} color="#4285F4" />,
      href: "https://www.addevent.com/event/cR26582037+google",
    },
    {
      label: "Outlook.com",
      icon: <Mail size={40} color="#0072C6" />,
      href: "https://www.addevent.com/event/cR26582037+outlookcom",
    },
    {
      label: "Outlook (Desktop)",
      icon: <Monitor size={40} color="#0072C6" />,
      href: "https://www.addevent.com/event/cR26582037+outlook",
    },
    {
      label: "Microsoft 365",
      icon: <Building2 size={40} color="#F25022" />,
      href: "https://www.addevent.com/event/cR26582037+office365",
    },
    {
      label: "Apple",
      icon: <Apple size={40} color="black" />,
      href: "https://www.addevent.com/event/cR26582037+apple",
    },
    {
      label: "Yahoo",
      icon: <Calendar size={40} color="#720E9E" />,
      href: "https://www.addevent.com/event/cR26582037+yahoo",
    },
  ];

  return (
    <div className="relative shadow-md w-full top-0 left-0 bg-[#3b0067] py-5">
      <div className="md:flex max-w-[1300px] mx-auto items-center justify-between md:px-10 px-7">
        {/* logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to={'/'}>
            <img src={logo} alt="Delhi Toofans" className='absolute z-10 h-full top-4' />
          </Link>
        </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 md:top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:bg-transparent z-30 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[3.75rem]" : "top-[-490px]"
          }`}
        >
          {Menu.map((link) => (
            <li key={link.name} className="md:ml-8 sm:ml-4 md:my-0 my-2 font-semibold">
              {link.name === "Schedule" ? (
                <button
                  onClick={() => {
                    setShowCalendar(true);
                    setOpen(false);
                  }}
                  className="md:text-white text-black"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.link}
                  className={`md:text-white text-black duration-500 ${
                    location.pathname === link.link ? 'border-b-2 border-blue-400' : ''
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}

          <button className="btn bg-[#ffbd00] hover:bg-black text-black hover:text-[#ffbd00] rounded-lg md:ml-8 font-semibold px-4 py-1 duration-500 md:static">
            <Link to={'/Contact'} onClick={() => setOpen(false)}> Contact Us</Link>
          </button>
        </ul>
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full relative">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            📅 Add to Calendar
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {calendarOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-[#3b0067] hover:shadow-md transition-all"
                >
                  {opt.icon}
                  <p className="mt-3 text-sm font-medium text-gray-700">{opt.label}</p>
                </a>
              ))}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.addevent.com/web/images/logo-email-plain-fff-t1.png"
                  alt="AddEvent"
                  className="mx-auto h-4 opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
