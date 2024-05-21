type DeveloperDetails = {
  name: string;
  icon: string;
};

type SocialIcons = {
  github: URL;
  linkedin: URL;
  medium: URL;
};

export type AboutDetailsType = {
  profileImg: string;
  name: string;
  description: string;
  city: string;
  country: string;
  dev: DeveloperDetails;
  socials: SocialIcons;
};
