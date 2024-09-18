import {
  CareCoordinator,
  DnDSpellExplorer,
  RetailCustomerAnalysis,
  VisionCraft,
  ZenAnalysis,
  Zentra,
} from "@/constants/projects";
import {
  KMeansClusteringProject,
  LinearRegressionProject,
  MiningRoversProject,
  PlantClassifierProject,
  PolyRegressionProject,
  RlAtariGamesProject,
} from "@/constants/pages";

import { ProjectSection } from "@/types/core";

export const Interests: ProjectSection = {
  tag: "interest",
  header: {
    caption: "Interests",
    title: "At A Glance.",
    desc: "Topics I'm interested in and currently exploring.",
  },
  badges: [
    "Language Models (LMs)",
    "LMs to Deployment",
    "Insights to APIs",
  ],
};

export const PortfolioProjects: ProjectSection = {
  tag: "portfolio",
  header: {
    caption: "Crafting Tomorrow's Tools",
    title: "Projects Showcasing My Work",
    desc: "A collection of projects that showcase my skills and experience.",
  },
  projects: [
    Zentra,
    CareCoordinator,
    DnDSpellExplorer,
    RlAtariGamesProject,
    MiningRoversProject,
    PlantClassifierProject,
    PolyRegressionProject,
    LinearRegressionProject,
    KMeansClusteringProject,
  ],
};
