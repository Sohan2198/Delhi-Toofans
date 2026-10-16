import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center">
    <p className="text-6xl font-extrabold text-toofan-yellow">404</p>
    <h1 className="mt-4 text-3xl font-bold text-toofan-purple">Page not found</h1>
    <p className="mt-2 text-gray-600">The page you are looking for has moved or no longer exists.</p>
    <Link
      to="/"
      className="mt-6 rounded-md bg-toofan-yellow px-6 py-2 font-bold text-toofan-purple hover:bg-toofan-purple hover:text-toofan-yellow"
    >
      Back to home
    </Link>
  </section>
);

export default NotFound;
