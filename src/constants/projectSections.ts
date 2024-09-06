import {
  BuildNextjsApp,
  CareCoordinator,
  CreateApiApp,
  DnDSpellExplorer,
  RetailCustomerAnalysis,
  Zentra,
} from "@/constants/projects";
import {
  FloodPredictionProject,
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
    "Data for Good",
    "End-to-End Builds",
    "Machine Learning",
    "Small Models for IoT Devices",
    "Insights to APIs",
  ],
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

export const DataExplorationProjects: ProjectSection = {
  tag: "data-explore",
  header: {
    caption: "Discover Patterns",
    title: "Clean, Analyse, Visualise, Act.",
    desc: "Data-driven projects focused on deep exploration and actionable insights.",
  },
  projects: [FloodPredictionProject, RetailCustomerAnalysis],
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
    RlAtariGamesProject,
    MiningRoversProject,
    PlantClassifierProject,
    PolyRegressionProject,
    LinearRegressionProject,
    KMeansClusteringProject,
  ],
};
