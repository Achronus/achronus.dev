import { IconType, SkillSetType, TagType } from "./global";

export type AboutDetailsType = {
  profileImg: string;
  name: string;
  description: string;
  locationTags: TagType[];
  socials: IconType[];
  skills: SkillSetType[];
};
