export type SvgType = {
  viewBox: string;
  path: string;
};

export type IconType = {
  name: string;
  url: URL;
  svg: SvgType;
};

export type TagType = {
  type: string;
  name: string;
  svg: SvgType;
};
