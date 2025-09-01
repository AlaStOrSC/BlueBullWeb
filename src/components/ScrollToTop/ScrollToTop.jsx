import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      
      document.documentElement.scrollTop = 0;
      
      document.body.scrollTop = 0;
    };

    scrollToTop();
    
    requestAnimationFrame(() => {
      scrollToTop();
    });
    
  }, [pathname]);

  return null;
};
