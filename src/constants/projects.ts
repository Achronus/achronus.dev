import { ProjectItem } from "@/types/core";
import { GitHub } from "@/constants/icons/social";
import { Globe, Notebook } from "@/constants/icons/misc";

import ZentraIcon from "@/assets/zentra.png";
import CareIcon from "@/assets/care.png";
import DndIcon from "@/assets/dnd.png";
import LuminoIcon from "@/assets/lumino.png";
import CloverIcon from "@/assets/clover.png";
import FlowCodeIcon from "@/assets/flowcode.png";
import TriggoIcon from "@/assets/triggo.png";
import Logo from "@/assets/logo.ico";

// Dev Tools
export const Zentra: ProjectItem = {
  name: "Zentra",
  desc: "An open-source Python SDK for building FastAPI and Next.js apps faster.",
  logo: ZentraIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://zentra.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Zentra",
    },
  ],
  status: "Alpha",
};

// Data Exploration Projects
export const RetailCustomerAnalysis: ProjectItem = {
  name: "Retail Customer Analysis",
  desc: "Identifying customer buying patterns in a large dataset using K-Means Clustering.",
  logo: Logo.src,
  links: [
    {
      name: "Notebook",
      svg: Notebook,
      url: "https://www.kaggle.com/code/ryanpartridge01/retail-customer-analysis-notebook",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/data-exploration/tree/main/retail-customer-analysis",
    },
  ],
  status: "Complete",
};

// Full-Stack Projects
export const CareCoordinator: ProjectItem = {
  name: "Care Coordinator",
  desc: "Appointment management software for Healthcare professionals.",
  logo: CareIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://care.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/care-coordinator",
    },
  ],
  status: "Live",
};

export const DnDSpellExplorer: ProjectItem = {
  name: "Dnd Spell Explorer",
  desc: "The Netflix of DnD spells. Explore DnD 5e spells using an interactive card system.",
  logo: DndIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://dnd.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/dnd-explorer",
    },
  ],
  status: "Live",
};

export const Lumino: ProjectItem = {
  name: "Lumino",
  desc: "A versatile productivity software tool that helps individuals manage tasks, projects, and notes in one location.",
  logo: LuminoIcon.src,
  links: [
    // {
    //   name: "GitHub",
    //   svg: GitHub,
    //   url: "https://github.com/Achronus/lumino",
    // },
  ],
  status: "Coming Soon",
};

export const FlowCode: ProjectItem = {
  name: "FlowCode",
  desc: "A codebase visualisation tool. Identify which functions connect to each other using an interactive flowchart.",
  logo: FlowCodeIcon.src,
  links: [],
  status: "Coming Soon",
};

export const Triggo: ProjectItem = {
  name: "Triggo",
  desc: "An automation workflow tool. Effortlessly enhance your productivity and efficiency with everyday tasks.",
  logo: TriggoIcon.src,
  links: [],
  status: "Coming Soon",
};

export const Clover: ProjectItem = {
  name: "Clover",
  desc: "An income and expenses tracker tool for managing and monitoring your daily, monthly and yearly spend.",
  logo: CloverIcon.src,
  links: [],
  status: "Coming Soon",
};
