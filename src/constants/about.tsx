import { IconCardType } from "@/types/card";
import {
  AboutDetailsType,
  FooterAboutDetailsType,
} from "@/types/details";
import { Heart, Link, PanelsTopLeft } from "lucide-react";

export const AboutDetails: AboutDetailsType = {
  intro: "Hi! 👋",
  firstName: "Ryan",
  lastName: "Partridge",
  title: "Software Engineer",
  desc: "passionate about building tools that benefit humanity.",
  image: "/me-vector.svg",
};

export const FeaturedCards: IconCardType[] = [
  {
    title: "OOP Craftsman",
    desc: "Keeping code clean, efficient, scalable, and maintainable.",
    icon: <Link size={24} strokeWidth={1.5} />,
    styles: {
      iconContainer: "bg-amber-900",
    },
  },
  {
    title: "Detail Oriented",
    desc: "Awareness to ease of access, accessibility, and a seamless UX.",
    icon: (
      <Heart size={24} strokeWidth={1.5} fill="white" />
    ),
    styles: {
      iconContainer: "bg-pink-900",
    },
  },
  {
    icon: <PanelsTopLeft size={24} strokeWidth={1.5} />,
    title: "Intuitive Interfaces",
    desc: "Turning data insights into clear, interactive interfaces.",
    styles: {
      iconContainer: "bg-sky-900",
    },
  },
];

export const FooterAboutDetails: FooterAboutDetailsType = {
  title: "About Me",
  name: AboutDetails.firstName,
  position: AboutDetails.title,
  desc: AboutDetails.desc,
};
