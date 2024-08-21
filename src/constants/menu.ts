import { NavLink } from "@/types/core";
import {
  FastAPI,
  GitHub,
  GitKraken,
  LinkedIn,
  NextJs,
  Python,
  React,
  TailwindCSS,
  TypeScript,
  VSCode,
} from "./icons";
import { SvgType } from "@/types/global";

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

export const TechStackIcons: SvgType[] = [
  Python,
  FastAPI,
  React,
  TailwindCSS,
  NextJs,
  TypeScript,
];

export const TechToolIcons: SvgType[] = [VSCode, GitKraken];
