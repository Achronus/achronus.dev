import { IconType, SvgType } from "./global";

export type StatusOptions =
  | "Live"
  | "In Development"
  | "Updating"
  | "Coming Soon";

export type ProjectType = {
  name: string;
  description: string;
  logo: string;
  links: IconType[];
  tools: SvgType[];
  status: StatusOptions;
};

export type ColourMap = {
  name: string;
  value: string;
};
