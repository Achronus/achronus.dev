export type SocialIconType = {
  name: string;
  url: URL;
  viewBox: string;
  path: string;
};

export type LocationTagType = {
  type: string;
  name: string;
  viewBox: string;
  path: string;
};

export type AboutDetailsType = {
  profileImg: string;
  name: string;
  description: string;
  locationTags: LocationTagType[];
  socials: SocialIconType[];
};
