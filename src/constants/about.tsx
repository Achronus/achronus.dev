import { AboutDetailsType, FeaturedCardType } from "@/types/details";
import { Heart, Link, PanelsTopLeft } from "lucide-react";

export const AboutDetails: AboutDetailsType = {
  intro: "Hi! 👋",
  firstName: "Ryan",
  lastName: "Partridge",
  title: "Software Engineer",
  desc: "passionate about API development and creating tools with intuitive interfaces.",
  image: "/me-vector.svg",
};

export const FeaturedCards: FeaturedCardType[] = [
  {
    title: "API Craftsman",
    desc: "Keeping API's clean, efficient, scalable, and maintainable.",
    iconStyles: "bg-amber-900",
    icon: <Link size={24} strokeWidth={1.5} />,
  },
  {
    title: "Detail Oriented",
    desc: "Awareness to ease of access, accessibility, and a seamless UX.",
    iconStyles: "bg-pink-900",
    icon: <Heart size={24} strokeWidth={1.5} fill="white" />,
  },
  {
    icon: <PanelsTopLeft size={24} strokeWidth={1.5} />,
    title: "Intuitive Interfaces",
    desc: "Turning JSON data into clear, interactive interfaces.",
    iconStyles: "bg-sky-900",
  },
];
