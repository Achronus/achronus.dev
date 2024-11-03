import {
  GitKraken,
  Jupyter,
  Postman,
  VSCode,
} from "./icons/tools";
import {
  FastAPI,
  Gymnasium,
  NumPy,
  Pandas,
  Python,
  PyTorch,
} from "./icons/stack";
import { GitHub, LinkedIn } from "./icons/social";

import { IconType, NavLink } from "@/types/core";
import { SvgItem } from "@/types/core";
import { Email } from "./icons/misc";

export const NavLinks: NavLink[] = [
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const SocialIcons: IconType[] = [
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
  {
    name: "Email",
    url: "mailto:rpartridge101@gmail.com",
    svg: Email,
  },
];

export const ContactIcons: IconType[] = [...SocialIcons];

export const TechStackIcons: SvgItem[] = [
  Python,
  Pandas,
  NumPy,
  PyTorch,
  FastAPI,
  Gymnasium,
];

export const TechToolIcons: SvgItem[] = [
  VSCode,
  Jupyter,
  GitKraken,
  Postman,
];
