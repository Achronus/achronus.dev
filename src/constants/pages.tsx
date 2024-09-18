import { BasicHeroDetails } from "@/types/details";
import {
  KMeansClusteringProject,
  LinearRegressionProject,
  MiningRoversProject,
  PlantClassifierProject,
  PolyRegressionProject,
  RlAtariGamesProject,
} from "./projects";

export const AboutHeroDetails: BasicHeroDetails = {
  title: "About Me",
  desc: "My career journey, interests and hobbies.",
};

export const ProjectsMapping = [
  {
    name: "rl-atari-games",
    details: RlAtariGamesProject,
  },
  {
    name: "planetary-mining-rovers",
    details: MiningRoversProject,
  },
  {
    name: "wep-classifier",
    details: PlantClassifierProject,
  },
  {
    name: "polynomial-regression",
    details: PolyRegressionProject,
  },
  {
    name: "regression-analysis",
    details: LinearRegressionProject,
  },
  {
    name: "k-means-clustering",
    details: KMeansClusteringProject,
  },
];
