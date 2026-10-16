import React, { useCallback, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/logo192.webp';
import { NAV_LINKS } from '../../data/site';
import AddToCalendar from '../ui/AddToCalendar';
import Modal from '../ui/Modal';

const navLinkClass = ({ isActive }) =>
  `text-black duration-500 md:text-white ${isActive ? 'border-b-2 border-toofan-yellow' : ''}`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const closeCalendar = useCallback(() => setCalendarOpen(false), []);

  return (
    <header className="relative left-0 top-0 w-full bg-toofan-purple py-5 shadow-md">
      <div className="mx-auto max-w-[1300px] items-center justify-between px-7 md:flex md:px-10">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="Delhi Toofans home" className="absolute top-4 z-10 h-full" />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="absolute right-8 top-4 h-7 w-7 text-white md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </button>

        <nav aria-label="Primary">
          <ul
            id="primary-navigation"
            className={`absolute left-0 z-30 w-full bg-white pb-2 pl-9 transition-all duration-500 ease-in md:static md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0 ${
              isMenuOpen ? 'top-[3.75rem]' : 'top-[-490px]'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="my-2 font-semibold sm:ml-4 md:my-0 md:ml-8">
                <NavLink to={link.to} className={navLinkClass} onClick={closeMenu}>
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="my-2 font-semibold sm:ml-4 md:my-0 md:ml-8">
              <button
                type="button"
                onClick={() => {
                  setCalendarOpen(true);
                  closeMenu();
                }}
                className="text-black md:text-white"
              >
                Schedule
              </button>
            </li>

            <li className="my-2 md:my-0">
              <Link
                to="/Contact"
                onClick={closeMenu}
                className="inline-block rounded-lg bg-toofan-yellow px-4 py-1 font-semibold text-black duration-500 hover:bg-black hover:text-toofan-yellow md:ml-8"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Modal isOpen={isCalendarOpen} onClose={closeCalendar} labelledBy="calendar-title" className="max-w-3xl">
        <AddToCalendar title="📅 Add to Calendar" titleId="calendar-title" />
      </Modal>
    </header>
  );
};

export default Header;
