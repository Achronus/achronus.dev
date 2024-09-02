import {
  BuildNextjsApp,
  CareCoordinator,
  CreateApiApp,
  DnDSpellExplorer,
  KMeansClustering,
  LinearRegression,
  MiningRovers,
  PlantClassifier,
  PolyRegression,
  RLAtariGames,
  Zentra,
} from "@/constants/projects";

import { ProjectSection } from "@/types/core";

export const Interests: ProjectSection = {
  tag: "interest",
  header: {
    caption: "Interests",
    title: "At A Glance.",
    desc: "Topics I'm interested in and currently exploring.",
  },
  badges: ["Computer Vision", "Small Language Models (SLMs)", "With APIs"],
};

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

export const UniProjects: ProjectSection = {
  tag: "uni",
  header: {
    caption: "Research and Exploration",
    title: "University Projects.",
    desc: "Specialised projects designed to develop a thorough understanding.",
  },
  projects: [
    RLAtariGames,
    MiningRovers,
    PlantClassifier,
    PolyRegression,
    LinearRegression,
    KMeansClustering,
  ],
};
