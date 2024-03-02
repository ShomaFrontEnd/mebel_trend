import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);


  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollOnY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (scrollOnY<10) {
        // console.log('menshe 000',scrollDirection);
        setScrollDirection(null);
        return
      }
     else if (direction !== scrollDirection && (scrollOnY - lastScrollY > 10 || scrollOnY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollOnY > 0 ? scrollOnY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);



  return scrollDirection;
}

export default useScrollDirection;