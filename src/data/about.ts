import { AboutDetailsType } from "@/types/about";
import { IconType, TagType } from "@/types/global";

import ProfilePic from "@assets/imgs/me.jpg";
import {
  GitHub,
  LinkedIn,
  Medium,
  Pin,
  World,
} from "@data/icons";

const LocationTags: TagType[] = [
  {
    type: "city",
    name: "Lincoln",
    svg: Pin,
  },
  {
    type: "country",
    name: "United Kingdom",
    svg: World,
  },
];

const SocialIcons: IconType[] = [
  {
    name: "GitHub",
    url: new URL("https://github.com/Achronus"),
    svg: GitHub,
  },
  {
    name: "LinkedIn",
    url: new URL(
      "https://www.linkedin.com/in/ryan-partridge-08b7118b/"
    ),
    svg: LinkedIn,
  },
  {
    name: "Medium",
    url: new URL("https://medium.com/@achronus"),
    svg: Medium,
  },
];

export const AboutDetailsData: AboutDetailsType = {
  name: "Ryan Partridge",
  profileImg: ProfilePic,
  description:
    "A Software Developer building open-source tools on the web, one commit at a time 🚀",
  locationTags: LocationTags,
  socials: SocialIcons,
};
