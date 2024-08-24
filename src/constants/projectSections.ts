import {
  BuildNextjsApp,
  CareCoordinator,
  CreateApiApp,
  DnDSpellExplorer,
  Zentra,
} from "./projects";

import { ProjectSection } from "@/types/core";

export const DevTools: ProjectSection = {
  tag: "dev-tools",
  header: {
    caption: "Build Faster",
    title: "Simple, Consistent, Development Tools.",
    desc: "Empowering development with intuitive tools.",
  },
  projects: [Zentra, CreateApiApp, BuildNextjsApp],
};

export const FullStackProjects: ProjectSection = {
  tag: "full-stack",
  header: {
    caption: "Complete Builds",
    title: "Elegant End-to-End Solutions.",
    desc: "Complete, cohesive applications with a refined touch.",
  },
  projects: [CareCoordinator, DnDSpellExplorer],
};
