import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets the scroll position on every route change (SPA navigation keeps it otherwise). */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
