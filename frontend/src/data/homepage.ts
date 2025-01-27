import type { CTA, MenuLink, SocialIcon } from "@/types/common"

export const NavbarLinks: MenuLink[] = [
  {
    text: "Home",
    href: "/",
    desc: "",
  },
  {
    text: "Journal",
    href: "/journal",
    desc: "Raw Project Thoughts",
  },
]

export const HeroCTAs: CTA[] = [
  {
    text: "View Journal",
    href: "/journal",
    styles:
      "tw-text-white tw-font-medium tw-bg-blue-dark tw-border tw-border-blue-dark",
    iconStyle: "fas fa-chevron-circle-right",
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