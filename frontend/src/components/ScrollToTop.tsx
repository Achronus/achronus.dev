import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      id="btn-back-to-top"
      className={`tw-fixed tw-bottom-0 tw-right-0 tw-cursor-pointer tw-rounded-full tw-m-12 tw-p-1
    tw-w-14 tw-h-14 tw-text-white tw-bg-blue-dark tw-transition-all tw-border-none
    hover:tw-bg-black-theme ${isVisible ? "tw-block" : "tw-hidden"}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up tw-text-2xl"></i>
    </button>
  );
};

export default ScrollToTop;
