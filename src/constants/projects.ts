import { ProjectItem } from "@/types/core";
import { GitHub } from "@/constants/icons/social";
import { Globe } from "@/constants/icons/misc";

import ZentraIcon from "@/assets/zentra.png";
import CareIcon from "@/assets/care.png";
import DndIcon from "@/assets/dnd.png";
import LuminoIcon from "@/assets/lumino.png";
import CloverIcon from "@/assets/clover.png";
import FlowCodeIcon from "@/assets/flowcode.png";
import TriggoIcon from "@/assets/triggo.png";
import Logo from "@/assets/logo.ico";
import LincolnUni from "@/assets/uol.png";
import BathUni from "@/assets/uob.png";

// Dev Tools
export const Zentra: ProjectItem = {
  name: "Zentra",
  desc: "An open-source Python SDK for building FastAPI and Next.js apps faster.",
  logo: ZentraIcon.src,
  links: [
    // {
    //   name: "Website",
    //   svg: Globe,
    //   url: "https://zentra.achronus.dev/",
    // },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Zentra",
    },
  ],
  status: "Alpha",
};

export const CreateApiApp: ProjectItem = {
  name: "Create Api App",
  desc: "A CLI tool for creating FastAPI and Next.js projects.",
  logo: Logo.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/create-api-app",
    },
  ],
  status: "Live",
};

export const BuildNextjsApp: ProjectItem = {
  name: "Build NextJS App",
  desc: "A CLI tool for creating fresh Nextjs applications using a Docker container.",
  logo: Logo.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/build-nextjs-app",
    },
  ],
  status: "Live",
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

// Uni Projects
export const Test: ProjectItem = {
  name: "Clover",
  desc: "An income and expenses tracker tool for managing and monitoring your daily, monthly and yearly spend.",
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/care-coordinator",
    },
  ],
  status: "Live",
};
