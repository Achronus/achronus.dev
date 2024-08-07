import { ProjectType } from "@/types/projects";
import ZentraIcon from "@/assets/imgs/projects/zentra-icon.jpg";
import CareIcon from "@/assets/imgs/projects/care-icon.png";
import DndIcon from "@/assets/imgs/projects/dnd-icon.png";
import LuminoIcon from "@/assets/imgs/projects/lumino-icon.png";
import CloverIcon from "@/assets/imgs/projects/clover-icon.png";
import FlowCodeIcon from "@/assets/imgs/projects/flowcode-icon.png";
import TriggoIcon from "@/assets/imgs/projects/triggo-icon.png";
import Logo from "@/assets/imgs/logo.ico";

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
    "An open-source Python SDK for building FastAPI and Next.js apps faster.",
  logo: ZentraIcon.src,
  links: [
    // {
    //   url: new URL("https://zentra.achronus.dev/"),
    //   svg: Globe,
    // },
    {
      url: new URL("https://github.com/Achronus/Zentra"),
      svg: GitHub,
    },
  ],
  tools: [Python, Pydantic, React, FastAPI, ShadcnUi],
  status: "In Development",
};

const CareCoordinator: ProjectType = {
  name: "Care Coordinator",
  description:
    "Appointment management software for Healthcare professionals.",
  logo: CareIcon.src,
  links: [
    {
      url: new URL("https://care.achronus.dev/"),
      svg: Globe,
    },
    {
      url: new URL(
        "https://github.com/Achronus/care-coordinator"
      ),
      svg: GitHub,
    },
  ],
  tools: [
    NextJs,
    TailwindCSS,
    ShadcnUi,
    TypeScript,
    FastAPI,
    Docker,
  ],
  status: "Live",
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
  logo: Logo.src,
  links: [
    {
      url: new URL(
        "https://github.com/Achronus/create-api-app"
      ),
      svg: GitHub,
    },
  ],
  tools: [Python, Docker],
  status: "Live",
};

const BuildNextjsApp: ProjectType = {
  name: "Build NextJS App",
  description:
    "A simple tool for creating fresh Nextjs applications using a Docker container.",
  logo: Logo.src,
  links: [
    {
      url: new URL(
        "https://github.com/Achronus/build-nextjs-app"
      ),
      svg: GitHub,
    },
  ],
  tools: [Python, Docker],
  status: "Live",
};

export const DevTools: ProjectType[] = [
  Zentra,
  CreateApiApp,
  BuildNextjsApp,
];

export const WebProjects: ProjectType[] = [
  CareCoordinator,
  DndExplorer,
  Clover,
  FlowCode,
  Triggo,
  Lumino,
];
