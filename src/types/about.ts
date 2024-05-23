import { IconType } from "./global";

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
  socials: IconType[];
};
