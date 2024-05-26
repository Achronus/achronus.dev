import { IconType, SvgType } from "./global";

export type ProjectType = {
  name: string;
  description: string;
  logo: string;
  links: IconType[];
  tools: SvgType[];
  status?: "In Development" | "Coming Soon";
};
