import { ProjectType } from "@/types/projects";
import ZentraIcon from "@/assets/imgs/projects/zentra-icon.jpg";
import DndIcon from "@/assets/imgs/projects/dnd-icon.png";
import LuminoIcon from "@/assets/imgs/projects/lumino-icon.png";
import CloverIcon from "@/assets/imgs/projects/clover-icon.png";
import FlowCodeIcon from "@/assets/imgs/projects/flowcode-icon.png";
import TriggoIcon from "@/assets/imgs/projects/triggo-icon.png";

import {
  GitHub,
  Pydantic,
  Python,
  React,
  ShadcnUi,
  TailwindCSS,
  Clerk,
  NextJs,
  FastAPI,
  Axios,
  MongoDB,
  TypeScript,
  DaisyUi,
  Globe,
  Aws,
  Docker,
} from "./icons";

const Zentra: ProjectType = {
  name: "Zentra",
  description:
    "An open-source Python tool that uses Pydantic models to create React components.",
  logo: ZentraIcon.src,
  links: [
    {
      url: new URL("https://github.com/Achronus/Zentra"),
      svg: GitHub,
    },
  ],
  tools: [Python, Pydantic, React, ShadcnUi],
  status: "In Development",
};

const DndExplorer: ProjectType = {
  name: "Dnd Spell Explorer",
  description:
    "The Netflix of DnD spells. Explore DnD 5e spells using an interactive card system.",
  logo: DndIcon.src,
  links: [
    {
      url: new URL("https://dnd.achronus.dev/"),
      svg: Globe,
    },
    {
      url: new URL(
        "https://github.com/Achronus/dnd-explorer"
      ),
      svg: GitHub,
    },
  ],
  tools: [
    NextJs,
    TailwindCSS,
    DaisyUi,
    TypeScript,
    FastAPI,
    MongoDB,
    Docker,
    Aws,
  ],
  status: "Live",
};

const Lumino: ProjectType = {
  name: "Lumino",
  description:
    "A versatile productivity software tool that helps individuals manage tasks, projects, and notes in one location.",
  logo: LuminoIcon.src,
  links: [],
  tools: [NextJs, TailwindCSS, Clerk, FastAPI, MongoDB],
  status: "Coming Soon",
};

const FlowCode: ProjectType = {
  name: "FlowCode",
  description:
    "A codebase visualisation tool. Identify which functions connect to each other using an interactive flowchart.",
  logo: FlowCodeIcon.src,
  links: [],
  tools: [
    NextJs,
    TailwindCSS,
    Clerk,
    Axios,
    FastAPI,
    MongoDB,
  ],
  status: "Coming Soon",
};

const Triggo: ProjectType = {
  name: "Triggo",
  description:
    "An automation workflow tool. Effortlessly enhance your productivity and efficiency with everyday tasks.",
  logo: TriggoIcon.src,
  links: [],
  tools: [NextJs, TailwindCSS, Clerk, FastAPI, MongoDB],
  status: "Coming Soon",
};

const Clover: ProjectType = {
  name: "Clover",
  description:
    "An income and expenses tracker tool for managing and monitoring your daily, monthly and yearly spend.",
  logo: CloverIcon.src,
  links: [],
  tools: [
    NextJs,
    TailwindCSS,
    Clerk,
    Axios,
    FastAPI,
    MongoDB,
  ],
  status: "Coming Soon",
};

const CreateApiApp: ProjectType = {
  name: "Create Api App",
  description:
    "A CLI tool for creating FastAPI and Next.js projects. Reduce setup time and start programming faster!",
  logo: "C",
  links: [
    {
      url: new URL(
        "https://github.com/Achronus/create-api-app"
      ),
      svg: GitHub,
    },
  ],
  tools: [Python],
  status: "Updating",
};

export const ProjectData: ProjectType[] = [
  Zentra,
  CreateApiApp,
  DndExplorer,
  Clover,
  FlowCode,
  Triggo,
  Lumino,
];
