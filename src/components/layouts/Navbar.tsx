"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useOnScroll from "@/hooks/useOnScroll";
import { cn } from "@/lib/utils";
import { NavLink } from "@/types/core";

type NavMenuProps = {
  navLinks: NavLink[];
};

export const Logo = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href="/"
      className="flex h-9 items-center gap-2 rounded-xl px-2 hover:bg-muted transition-colors"
    >
      {children}
    </Link>
  );
};

export const NavigationLinks = ({ navLinks }: NavMenuProps) => {
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

export const Navbar = ({ children }: { children: React.ReactNode }) => {
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
          {children}
        </section>
      </div>
    </header>
  );
};
