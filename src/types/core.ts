import { SvgType } from "@/types/global";

export type NavLink = {
  name: string;
  url: string;
  svg?: SvgType;
};

export type Icon = {
  name: string;
  svg: SvgType;
  styles?: string;
};
