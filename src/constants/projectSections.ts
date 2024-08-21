import {
  BuildNextjsApp,
  CareCoordinator,
  CreateApiApp,
  DnDSpellExplorer,
  Zentra,
} from "./projects";

import { ProjectSection } from "@/types/core";

export const DevTools: ProjectSection = {
  header: {
    caption: "Build Faster",
    title: "Simple, Consistent, Development Tools.",
    desc: "Empowering development with intuitive tools.",
  },
  projects: [Zentra, CreateApiApp, BuildNextjsApp],
};

export const FullStackProjects: ProjectSection = {
  header: {
    caption: "Complete Builds",
    title: "End-to-End Solutions with Elegant Execution.",
    desc: "Complete, cohesive applications with a refined touch.",
  },
  projects: [CareCoordinator, DnDSpellExplorer],
};
