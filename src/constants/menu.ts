import { NavLink } from "@/types/core";
import { GitHub, LinkedIn } from "./icons";

export const NavLinks: NavLink[] = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },
];

export const SocialIcons: NavLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Achronus",
    svg: GitHub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryan-partridge-08b7118b/",
    svg: LinkedIn,
  },
];
