export type StatusOptions =
  | "Live"
  | "Alpha"
  | "Planning"
  | "In Development"
  | "Updating"
  | "Coming Soon"
  | "Complete";

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

export type SvgIconType = {
  svg: SvgItem;
  url?: string;
  styles?: string;
};

export type IconType = {
  name: string;
  svg: SvgItem;
  url: string;
  styles?: string;
};

export type ProjectHeader = {
  caption: string;
  title: string;
  desc?: string;
};

export type ProjectBadge = {
  icon: React.ReactNode;
  text: string;
};

export type ProjectItem = {
  name: string;
  desc: string;
  logo: string;
  links: IconType[];
  badges: string[];
  readMoreLink: string;
  pageBadges?: ProjectBadge[];
  page?: React.ReactNode;
};

export type ProjectSection = {
  tag: string;
  header: ProjectHeader;
  projects?: ProjectItem[];
  badges?: string[];
};
