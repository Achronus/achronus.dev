"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinks, SocialIcons } from "@/constants/menu";
import useOnScroll from "@/hooks/useOnScroll";
import { cn } from "@/lib/utils";
import { NavLink } from "@/types/core";
import { Icon } from "./Icon";

type NavMenuProps = {
  navLinks: NavLink[];
};

const Logo = () => {
  return (
    <Link href="/" className="flex h-9 items-center gap-2 rounded-xl px-2">
      <section
        id="logo-icon"
        className="flex items-center gap-1.5 leading-none"
      >
        <div
          className={cn(
            "border-box flex h-8 w-8 items-center justify-center rounded-xl border-2",
            "sm:h-6 sm:w-6 sm:rounded-lg",
            "bg-blue-500 border-blue-500"
          )}
        >
          <div
            className={cn(
              "h-3.5 w-0.5 rotate-12 rounded-full bg-white",
              "sm:h-3 sm:w-0.5"
            )}
          />
        </div>
      </section>
      <section
        id="logo-text"
        className="-mt-1 text-xl font-medium flex gap-1 sm:gap-0.5"
      >
        <span className="text-slate-200">achronus</span>
        <span className="text-blue-500">dev</span>
      </section>
    </Link>
  );
};

const NavigationLinks = ({ navLinks }: NavMenuProps) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className={cn(
            "transition-colors hover:text-blue-500",
            pathname === link.url ? "text-blue-500" : "text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

const Navbar = () => {
  const isScrolled = useOnScroll(0);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div
        className={cn(
          "fixed inset-0 h-16 transition-colors",
          isScrolled === true &&
            "border-slate-800/80 border-b bg-slate-900/80 backdrop-blur"
        )}
      >
        <section
          className={cn(
            "relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4"
          )}
        >
          <nav className="flex gap-4 items-center">
            <Logo />
            <NavigationLinks navLinks={NavLinks} />
          </nav>
          <nav className="flex items-center ml-auto gap-2">
            {SocialIcons.map((icon) => (
              <Icon key={icon.name} url={icon.url} svg={icon.svg!} />
            ))}
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
