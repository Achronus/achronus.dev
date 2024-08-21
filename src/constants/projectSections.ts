import {
  BuildNextjsApp,
  CareCoordinator,
  Clover,
  CreateApiApp,
  DnDSpellExplorer,
  FlowCode,
  Lumino,
  Triggo,
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
    title: "Elegant End-to-End Solutions.",
    desc: "Complete, cohesive applications with a refined touch.",
  },
  projects: [CareCoordinator, DnDSpellExplorer],
};
