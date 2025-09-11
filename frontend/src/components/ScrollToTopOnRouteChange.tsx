import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopOnRouteChange component
 * 
 * This component listens to route changes and automatically scrolls 
 * the window to the top whenever the user navigates to a different route.
 * 
 * It solves the issue where navigating from one page to another 
 * preserves the old scroll position instead of starting at the top.
 */
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll without animation
    });
  }, [pathname]); // Dependency on pathname ensures this runs on every route change

  // This component doesn't render anything
  return null;
};

export default ScrollToTopOnRouteChange;