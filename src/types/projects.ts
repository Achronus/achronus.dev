import { IconType, SvgType } from "./global";

export type StatusOptions = "Completed" | "In Development" | "Coming Soon";

export type ProjectType = {
  name: string;
  description: string;
  logo: string;
  links: IconType[];
  tools: SvgType[];
  status: StatusOptions;
};
