import { ProjectType } from "@/types/projects";
import ZentraIcon from "@assets/imgs/projects/zentra-icon.jpg";
import FigmaIcon from "@assets/imgs/projects/figma-icon.png";
import LuminoIcon from "@assets/imgs/projects/lumino-icon.png";
import LedgerIcon from "@assets/imgs/projects/ledger-icon.png";
import AgencyFusionIcon from "@assets/imgs/projects/agency-fusion-icon.png";
import TriggoIcon from "@assets/imgs/projects/triggo-icon.png";

import {
  GitHub,
  Pydantic,
  Python,
  React,
  ShadcnUi,
  TailwindCSS,
  LiveBlocks,
  Clerk,
  NextJs,
  FastAPI,
  Axios,
  ReactQuery,
  MongoDB,
} from "./icons";

const Zentra: ProjectType = {
  name: "Zentra",
  description:
    "An open-source Python tool that uses Pydantic models to create React components.",
  logo: ZentraIcon,
  links: [
    {
      url: new URL("https://github.com/Achronus/Zentra"),
      svg: GitHub,
    },
  ],
  tools: [Python, Pydantic, React, ShadcnUi],
  status: "In Development",
};

const Figma: ProjectType = {
  name: "Figma Clone",
  description:
    "A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration.",
  logo: FigmaIcon,
  links: [
    {
      url: new URL("https://github.com/Achronus/figma-clone"),
      svg: GitHub,
    },
  ],
  tools: [React, TailwindCSS, ShadcnUi, LiveBlocks],
  status: "In Development",
};

const Lumino: ProjectType = {
  name: "Lumino",
  description:
    "A versatile and highly customizable productivity software tool to help individuals and teams manage tasks, projects, and notes in one location.",
  logo: LuminoIcon,
  links: [],
  tools: [NextJs, TailwindCSS, ShadcnUi, Clerk],
  status: "Coming Soon",
};

const AgencyFusion: ProjectType = {
  name: "Agency Fusion",
  description:
    "An all in one agency creation tool. Design, build, deploy and manage your agency sites in one location.",
  logo: AgencyFusionIcon,
  links: [],
  tools: [
    NextJs,
    TailwindCSS,
    ShadcnUi,
    Clerk,
    Axios,
    ReactQuery,
    FastAPI,
    MongoDB,
  ],
  status: "Coming Soon",
};

const Triggo: ProjectType = {
  name: "Triggo",
  description:
    "An automation workflow tool. Effortlessly enhance your productivity and efficiency with everyday tasks.",
  logo: TriggoIcon,
  links: [],
  tools: [NextJs, TailwindCSS, ShadcnUi, Clerk],
  status: "Coming Soon",
};

const Ledger: ProjectType = {
  name: "The Ledger",
  description:
    "An income and expenses tracker tool for managing and monitoring your daily, monthly and yearly spend.",
  logo: LedgerIcon,
  links: [],
  tools: [
    NextJs,
    TailwindCSS,
    ShadcnUi,
    Clerk,
    Axios,
    ReactQuery,
    FastAPI,
    MongoDB,
  ],
  status: "Coming Soon",
};

export const ProjectData: ProjectType[] = [
  Zentra,
  Figma,
  Lumino,
  Ledger,
  Triggo,
  AgencyFusion,
];
