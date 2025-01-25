import { useEffect } from "react";

export const useActiveNav = (id: string) => {
  useEffect(() => {
    const setActiveClass = () => {
      const pageUrl = window.location.pathname;
      const navLinks = document.querySelectorAll(`#${id} .nav-link`);

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === pageUrl) {
          link.classList.add("tw-text-blue-dark");
        } else {
          link.classList.remove("tw-text-blue-dark");
        }
      });
    };

    setActiveClass();
  }, []);
};
