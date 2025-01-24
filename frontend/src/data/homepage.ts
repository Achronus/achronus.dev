import type { CTA, MenuLink, SocialIcon } from "@/types/common"

export const NavbarLinks: MenuLink[] = [
  {
    text: "Home",
    href: "/",
    desc: "",
  },
  {
    text: "About",
    href: "/about",
    desc: "Personal Info",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
    desc: "Selected Works",
  },
  {
    text: "Journal",
    href: "/journal",
    desc: "Raw Project Thoughts",
  },
]

export const HeroCTAs: CTA[] = [
  {
    text: "View Portfolio",
    href: "/portfolio",
    styles:
      "tw-text-white tw-font-medium tw-bg-blue-dark tw-border tw-border-blue-dark",
    iconStyle: "fas fa-chevron-circle-right",
  },
  {
    text: "View Journal",
    href: "/journal",
    styles:
      "tw-text-blue-dark tw-font-medium tw-bg-white tw-border-2 tw-border-blue-dark",
    iconStyle: "fas fa-angle-right",
  },
]


export const SocialIcons: SocialIcon[] = [
  {
    name: "linkedin",
    url: "#",
    type: "brands",
    colour: "#0976b4",
  },
  {
    name: "github",
    url: "#",
    type: "brands",
    colour: "#454545",
  },
  {
    name: "medium",
    url: "#",
    type: "brands",
    colour: "#000",
  }
]