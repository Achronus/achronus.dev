import Logo from "@/components/Logo";
import { NavLinks } from "@/components/Navbar";
import type { MenuLink } from "@/types/common";

type Props = {
  links: MenuLink[];
};

const Navbar = ({ links }: Props) => {
  return (
    <header
      id="site-navigation"
      className="main-navigation navbar navbar-light navbar-expand-lg"
    >
      <div className="container">
        <Logo />

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
