export type SvgType = {
  name?: string;
  viewBox: string;
  path: string;
};

export type IconType = {
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

export type SkillSetType = {
  type: string;
  skills: SvgType[];
};
