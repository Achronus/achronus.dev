import { ProjectType } from "@/types/projects";
import ZentraIcon from "@assets/imgs/projects/zentra-icon.jpg";

import {
  GitHub,
  Globe,
  Pydantic,
  Python,
  React,
  ShadcnUi,
} from "./icons";

const Zentra: ProjectType = {
  name: "Zentra",
  description:
    "An open-source Python tool that uses Pydantic models to create React components.",
  logo: ZentraIcon,
  links: [
    {
      name: "Website",
      url: new URL("https://github.com/Achronus/Zentra"),
      svg: Globe,
    },
    {
      name: "GitHub",
      url: new URL("https://github.com/Achronus/Zentra"),
      svg: GitHub,
    },
  ],
  tools: [
    {
      name: "Python",
      svg: Python,
    },
    { name: "Pydantic", svg: Pydantic },
    { name: "React", svg: React },
    { name: "Shadcn/ui", svg: ShadcnUi },
  ],
  status: "In Development",
};

export const ProjectData: ProjectType[] = [Zentra];
