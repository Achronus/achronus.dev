import { IconType } from "./global";

export type ProjectType = {
  name: string;
  description: string;
  logo: string;
  links: IconType[];
  tools: IconType[];
  status?: "In Development" | "Coming Soon";
};
