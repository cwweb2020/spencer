// useIsMobile.js
import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 900) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // listener
    window.addEventListener("resize", handleResize);

    // Llama a la función para establecer el estado inicial
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
