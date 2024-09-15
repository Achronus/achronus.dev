import {
  BasicHeroDetails,
  ProjectPageDetails,
} from "@/types/details";
import { GitHub } from "./icons/social";

import {
  KMeansClustering,
  MiningRovers,
  PlantClassifier,
  PolynomialRegression,
  RegressionAnalysis,
} from "@/components/projects";

import Logo from "@/assets/logo.ico";
import BathUni from "@/assets/uob.png";
import LincolnUni from "@/assets/uol.png";

import { GraduationCap } from "lucide-react";
import Image from "next/image";

export const AboutHeroDetails: BasicHeroDetails = {
  title: "About Me",
  desc: "My career journey, interests and hobbies.",
};

export const FocusHeroDetails: BasicHeroDetails = {
  title: "My Focus",
  desc: "What I'm actively working on today.",
};

// Uni Projects
export const RlAtariGamesProject: ProjectPageDetails = {
  name: "RL Atari Games",
  desc: "Exploring the effects of Intrinsic Motivation methods on Reinforcement Learning algorithms using Atari games.",
  badges: [
    {
      icon: (
        <Image
          src={BathUni.src}
          width={20}
          height={20}
          alt="UoB Icon"
          className="mr-2"
        />
      ),
      text: "University Of Bath",
    },
    {
      icon: <GraduationCap className="mr-2 h-5 w-5" />,
      text: "MSc Machine Learning & Autonomous Systems",
    },
  ],
  logo: BathUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/rl_atari_games",
    },
  ],
  status: "Complete",
  // pageName: "rl-atari-games",
};

export const MiningRoversProject: ProjectPageDetails = {
  name: "Planetary Mining Rovers",
  desc: "Using logic programming to solve a multi-agent system problem focusing on planetary mining with agent collaboration.",
  badges: [
    {
      icon: (
        <Image
          src={BathUni.src}
          width={20}
          height={20}
          alt="UoB Icon"
          className="mr-2"
        />
      ),
      text: "University Of Bath",
    },
    {
      icon: <GraduationCap className="mr-2 h-5 w-5" />,
      text: "MSc Machine Learning & Autonomous Systems",
    },
  ],
  logo: BathUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/planetary-mining-rovers",
    },
  ],
  status: "Complete",
  pageName: "planetary-mining-rovers",
  page: <MiningRovers />,
};

export const PlantClassifierProject: ProjectPageDetails = {
  name: "Wild Edible Plants Classifier",
  desc: "Classifying 35 classes of wild edible plants with Convolutional Neural Network architectures and PyTorch.",
  badges: [
    {
      icon: (
        <Image
          src={LincolnUni.src}
          width={20}
          height={20}
          alt="UoL Logo"
          className="mr-2"
        />
      ),
      text: "University Of Lincoln",
    },
    {
      icon: <GraduationCap className="mr-2 h-4 w-4" />,
      text: "BSc Computer Science",
    },
  ],
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/wep-classifier",
    },
  ],
  status: "Complete",
  pageName: "wep-classifier",
  page: <PlantClassifier />,
};

export const PolyRegressionProject: ProjectPageDetails = {
  name: "Polynomial Regression",
  desc: "Building a Polynomial Regression from scratch to identify the relationship between non-linear variables.",
  badges: [
    {
      icon: (
        <Image
          src={LincolnUni.src}
          width={20}
          height={20}
          alt="UoL Logo"
          className="mr-2"
        />
      ),
      text: "University Of Lincoln",
    },
    {
      icon: <GraduationCap className="mr-2 h-4 w-4" />,
      text: "BSc Computer Science",
    },
  ],
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/polynomial_regression",
    },
  ],
  status: "Complete",
  pageName: "polynomial-regression",
  page: <PolynomialRegression />,
};

export const LinearRegressionProject: ProjectPageDetails = {
  name: "Regression Analysis",
  desc: "Exploring the relationship between 4 variables in a city-cycle fuel consumption dataset using MATLAB.",
  badges: [
    {
      icon: (
        <Image
          src={LincolnUni.src}
          width={20}
          height={20}
          alt="UoL Logo"
          className="mr-2"
        />
      ),
      text: "University Of Lincoln",
    },
    {
      icon: <GraduationCap className="mr-2 h-4 w-4" />,
      text: "BSc Computer Science",
    },
  ],
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/regression_analysis",
    },
  ],
  status: "Complete",
  pageName: "regression-analysis",
  page: <RegressionAnalysis />,
};

export const KMeansClusteringProject: ProjectPageDetails = {
  name: "K-Means Clustering",
  desc: "Finding patterns in a dog breeds dataset using clustering techniques. Built from scratch without the help of Python libraries.",
  badges: [
    {
      icon: (
        <Image
          src={LincolnUni.src}
          width={20}
          height={20}
          alt="UoL Logo"
          className="mr-2"
        />
      ),
      text: "University Of Lincoln",
    },
    {
      icon: <GraduationCap className="mr-2 h-4 w-4" />,
      text: "BSc Computer Science",
    },
  ],
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/k_means_clustering",
    },
  ],
  status: "Complete",
  pageName: "k-means-clustering",
  page: <KMeansClustering />,
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
