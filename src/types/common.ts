export type MenuLink = {
  text: string;
  url: string;
  desc?: string;
  order: number;
};


export type CTA = {
  text: string;
  url: string;
  styles: string;
  icon?: string;
}

export type SvgItem = {
  name?: string;
  viewBox: string;
  path: string;
};
