import { AboutDetailsType } from "@/types/about";

import AchronusIcon from "@assets/imgs/icon.png";
import ProfilePic from "@assets/imgs/me.jpg";

export const AboutDetails: AboutDetailsType = {
  name: "Ryan Partridge",
  profileImg: ProfilePic,
  description:
    "A Software Developer building open-source tools on the web, one commit at a time 🚀",
  city: "Lincoln",
  country: "United Kingdom",
  dev: {
    name: "Achronus",
    icon: AchronusIcon,
  },
  socials: {
    github: new URL("https://github.com/Achronus"),
    linkedin: new URL(
      "https://www.linkedin.com/in/ryan-partridge-08b7118b/"
    ),
    medium: new URL("https://medium.com/@achronus"),
  },
};
