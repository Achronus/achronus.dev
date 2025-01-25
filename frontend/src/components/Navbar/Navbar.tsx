import { NavLinks } from "@/components/Navbar";
import { useActiveNav } from "@/hooks/useActiveNav";
import React from "react";

import type { MenuLink } from "@/types/common";

type Props = {
  id?: string;
  links: MenuLink[];
};

const Navbar: React.FC<Props> = ({ id = "site-navigation", links }) => {
  useActiveNav("mainNavBar");

  return (
    <header
      id={id}
      className="main-navigation navbar navbar-light navbar-expand-lg"
    >
      <div className="container">
        <a
          className="logo tw-text-4xl tw-font-bold tw-font-dm-sans tw-transition-all"
          href="/"
        >
          Ryan.<span className="tw-text-blue-dark">me</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavBar"
          aria-controls="mainNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavLinks links={links} />
      </div>
    </header>
  );
};

export default Navbar;
