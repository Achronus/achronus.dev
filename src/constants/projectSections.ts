import {
  CareCoordinator,
  DnDSpellExplorer,
  RetailCustomerAnalysis,
  KMeansClusteringProject,
  LinearRegressionProject,
  MiningRoversProject,
  PlantClassifierProject,
  PolyRegressionProject,
  RlAtariGamesProject,
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
    title: "Portfolio Projects",
    desc: "A collection of projects that showcase my skills and experience.",
  },
  projects: [
    Zentra,
    CareCoordinator,
    DnDSpellExplorer,
    RetailCustomerAnalysis,
    RlAtariGamesProject,
    MiningRoversProject,
    PlantClassifierProject,
    PolyRegressionProject,
    LinearRegressionProject,
    KMeansClusteringProject,
  ],
};
