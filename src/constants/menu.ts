import { GitKraken, VSCode } from "./icons/tools";
import {
  FastAPI,
  NextJs,
  Python,
  React,
  TailwindCSS,
  TypeScript,
} from "./icons/stack";
import { GitHub, LinkedIn } from "./icons/social";

import { NavLink } from "@/types/core";
import { SvgItem } from "@/types/core";

export const NavLinks: NavLink[] = [
  {
    name: "Projects",
    url: "/#projects",
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

export const TechStackIcons: SvgItem[] = [
  Python,
  FastAPI,
  React,
  TailwindCSS,
  NextJs,
  TypeScript,
];

export const TechToolIcons: SvgItem[] = [VSCode, GitKraken];
