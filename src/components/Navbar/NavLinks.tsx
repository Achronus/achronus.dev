import type { MenuLink } from "@/types/common";
import React from "react";

type Props = {
  links: MenuLink[];
};

const NavLinks: React.FC<Props> = ({ links }) => {
  return (
    <nav id="mainNavBar" className="navbar-collapse collapse mt-4">
      <ul className="navbar-nav ms-auto navbar-nav-scroll text-center tw-flex tw-gap-6">
        {links.map(({ text, url: href, desc }, index) => (
          <li className="nav-item" key={index}>
            <a
              className={[
                "nav-link tw-font-medium tw-font-dm-sans tw-capitalize tw-text-black-theme tw-text-xl tw-leading-tight tw-transition-all",
                "hover:tw-text-blue-dark",
                "active:tw-text-blue-dark",
              ].join(" ")}
              href={href}
            >
              {text}
              <br />
              {desc && <span className="tw-text-xs">{desc}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
