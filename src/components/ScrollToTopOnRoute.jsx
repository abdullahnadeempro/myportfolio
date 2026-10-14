import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Route change hone pe top pe scroll karo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // ya "smooth" agar smooth scroll chahiye
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;