
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop is a utility component that scrolls the window to the top
 * whenever the route changes. It should be placed inside the Router component.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // When location changes, scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
