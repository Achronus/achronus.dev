import { ProjectItem } from "@/types/core";
import { CareIcon, DndIcon, Logo, ZentraIcon } from "@/constants/logos";
import { GitHub } from "@/constants/icons/social";
import { Globe } from "@/constants/icons/misc";

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
  desc: "A CLI tool for creating FastAPI and Next.js projects. Reduce setup time and start programming faster!",
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
  desc: "A simple tool for creating fresh Nextjs applications using a Docker container.",
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
