import { IconType, SkillSetType, TagType } from "./global";

export type AboutDetailsType = {
  name: string;
  profileImg: string;
  description: string;
  locationTags: TagType[];
  socials: IconType[];
  skills: SkillSetType[];
};
