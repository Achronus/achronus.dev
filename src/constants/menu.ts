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
import { SvgType } from "@/types/global";

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

export const TechStackIcons: SvgType[] = [
  Python,
  FastAPI,
  React,
  TailwindCSS,
  NextJs,
  TypeScript,
];

export const TechToolIcons: SvgType[] = [VSCode, GitKraken];
