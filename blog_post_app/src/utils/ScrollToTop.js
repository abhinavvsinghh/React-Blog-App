// React component for scrolling to the top of the page on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Functional component representing the ScrollToTop functionality
const ScrollToTop = () => {
  // Get the current pathname from the location
  const { pathname } = useLocation();

  // Effect to scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Render null as this component doesn't have a visual representation
  return null;
};

export default ScrollToTop;
