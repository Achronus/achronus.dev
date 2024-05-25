import { ProjectType } from "@/types/projects";
import ZentraIcon from "@assets/imgs/projects/zentra-icon.jpg";
import FigmaIcon from "@assets/imgs/projects/figma-icon.png";

import {
  GitHub,
  Pydantic,
  Python,
  React,
  ShadcnUi,
  TailwindCSS,
  DaisyUi,
} from "./icons";

const Zentra: ProjectType = {
  name: "Zentra",
  description:
    "An open-source Python tool that uses Pydantic models to create React components.",
  logo: ZentraIcon,
  links: [
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

const Figma: ProjectType = {
  name: "Figma Clone",
  description:
    "A clone of one of the leading web design tools built in React.",
  logo: FigmaIcon,
  links: [
    {
      name: "GitHub",
      url: new URL(
        "https://github.com/Achronus/figma-clone"
      ),
      svg: GitHub,
    },
  ],
  tools: [
    { name: "React", svg: React },
    { name: "Tailwind CSS", svg: TailwindCSS },
    { name: "Daisy UI", svg: DaisyUi },
  ],
  status: "In Development",
};

export const ProjectData: ProjectType[] = [Zentra, Figma];
