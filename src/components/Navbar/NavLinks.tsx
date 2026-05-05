import React from "react";

type Link = {
  text: string;
  href: string;
  icon: React.ReactNode;
};

const links: Link[] = [
  {
    text: "Mission",
    href: "#mission",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="tw-w-3.5 tw-h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    text: "Projects",
    href: "#projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="tw-w-3.5 tw-h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      </svg>
    ),
  },
  {
    text: "Explore",
    href: "#explore",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="tw-w-3.5 tw-h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

const NavLinks: React.FC = () => {
  return (
    <nav className="tw-flex tw-items-center tw-gap-7">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-sm tw-text-grey hover:tw-text-blue-dark tw-transition-colors tw-font-dm-sans"
        >
          <span className="tw-opacity-70">{link.icon}</span>
          <span className="tw-hidden sm:tw-inline">{link.text}</span>
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
