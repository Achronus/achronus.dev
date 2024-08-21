import { SvgType } from "@/types/global";

export type StatusOptions =
  | "Live"
  | "Alpha"
  | "In Development"
  | "Updating"
  | "Coming Soon";

export type NavLink = {
  name: string;
  url: string;
  svg?: SvgType;
};

export type Icon = {
  name: string;
  svg: SvgType;
  url?: string;
  styles?: string;
};

export type ProjectHeader = {
  caption: string;
  title: string;
  desc: string;
};

export type ProjectItem = {
  name: string;
  desc: string;
  logo: string;
  links: Icon[];
  status: StatusOptions;
};

export type ProjectSection = {
  header: ProjectHeader;
  projects: ProjectItem[];
};
