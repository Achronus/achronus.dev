import { useEffect, useState } from "react";

const useOnScroll = (threshold: number = 0) => {
  const [isScrolled, setScrolled] = useState<boolean>();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();

    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useOnScroll;
