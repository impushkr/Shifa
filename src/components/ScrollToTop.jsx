import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Get current route path
  const { pathname } = useLocation();

  // Log current path (for debugging purposes)
  console.log(pathname);

  // Run this effect whenever the route changes
  useEffect(() => {
    // Scroll window to top-left position
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency: runs every time pathname changes

  // This component does not render anything
  return null;
}
