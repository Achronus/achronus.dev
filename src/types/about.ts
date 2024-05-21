type DeveloperDetails = {
  name: string;
  icon: string;
};

type SocialIconType = {
  name: string;
  url: URL;
  viewBox: string;
  path: string;
};

export type AboutDetailsType = {
  profileImg: string;
  name: string;
  description: string;
  city: string;
  country: string;
  dev: DeveloperDetails;
  socials: SocialIconType[];
};
