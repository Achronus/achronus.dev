export type SvgType = {
  viewBox: string;
  path: string;
};

export type IconType = {
  name: string;
  url?: URL;
  svg: SvgType;
  styles?: string;
};

export type TagType = {
  type: string;
  name: string;
  svg: SvgType;
};

export type ImgType = {
  name: string;
  path: string;
};
