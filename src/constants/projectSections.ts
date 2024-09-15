import {
  CareCoordinator,
  DnDSpellExplorer,
  RetailCustomerAnalysis,
  VisionCraft,
  ZenAnalysis,
  Zentra,
} from "@/constants/projects";
import {
  FloodDmgPredProject,
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

export const ActiveProjects: ProjectSection = {
  tag: "active",
  header: {
    caption: "Crafting Tomorrow's Tools",
    title: "Programming the Future, One Line at a Time.",
    desc: "Supercharging workflows with AI-powered productivity boosters.",
  },
  projects: [Zentra, VisionCraft, ZenAnalysis],
};

export const DataExplorationProjects: ProjectSection = {
  tag: "data-explore",
  header: {
    caption: "Discover Patterns",
    title: "Clean, Analyse, Visualise, Act.",
    desc: "Data-driven projects focused on deep exploration and actionable insights.",
  },
  projects: [
    // FloodDmgPredProject,
    RetailCustomerAnalysis,
  ],
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
