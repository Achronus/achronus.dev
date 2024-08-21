export type StatusOptions =
  | "Live"
  | "Alpha"
  | "In Development"
  | "Updating"
  | "Coming Soon";

export type StatusMap = {
  name: StatusOptions;
  bgColour: string;
};

export type SvgItem = {
  name?: string;
  viewBox: string;
  path: string;
};

export type NavLink = {
  name: string;
  url: string;
  svg?: SvgItem;
};

export type Icon = {
  name?: string;
  svg: SvgItem;
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
