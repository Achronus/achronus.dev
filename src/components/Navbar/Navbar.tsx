import Logo from "@/components/Logo";
import { NavLinks } from "@/components/Navbar";

const Navbar = () => {
  return (
    <header
      id="site-navigation"
      className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-py-5 tw-px-6 md:tw-px-8 tw-flex tw-items-center tw-justify-between tw-bg-white/80 tw-border-b tw-border-grey-light"
      style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
    >
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Navbar;
