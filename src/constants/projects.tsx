import { ProjectItem } from "@/types/core";
import { GitHub } from "@/constants/icons/social";
import { Globe, Notebook } from "@/constants/icons/misc";

import ZentraIcon from "@/assets/zentra.png";
import CareIcon from "@/assets/care.png";
import DndIcon from "@/assets/dnd.png";
import Logo from "@/assets/logo.ico";

import {
  KMeansClustering,
  MiningRovers,
  PlantClassifier,
  PolynomialRegression,
  RegressionAnalysis,
} from "@/components/projects";

import BathUni from "@/assets/uob.png";
import LincolnUni from "@/assets/uol.png";

import { GraduationCap } from "lucide-react";
import Image from "next/image";

// Active Projects
export const Zentra: ProjectItem = {
  name: "Zentra",
  desc: "An open-source Python SDK for building FastAPI and Next.js apps faster.",
  logo: ZentraIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://zentra.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Zentra",
    },
  ],
  badges: ["Alpha", "FastAPI", "Python SDK"],
  readMoreLink: "https://zentra.achronus.dev/",
};

// Data Exploration Projects
export const RetailCustomerAnalysis: ProjectItem = {
  name: "Retail Customer Analysis",
  desc: "Identifying customer buying patterns in a large dataset using K-Means Clustering.",
  logo: Logo.src,
  links: [
    {
      name: "Notebook",
      svg: Notebook,
      url: "https://www.kaggle.com/code/ryanpartridge01/retail-customer-analysis-notebook",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/data-exploration/tree/main/retail-customer-analysis",
    },
  ],
  badges: ["Clustering", "Data Analysis", "Big Data"],
  readMoreLink:
    "https://www.kaggle.com/code/ryanpartridge01/retail-customer-analysis-notebook",
};

// Full-Stack Projects
export const CareCoordinator: ProjectItem = {
  name: "Care Coordinator",
  desc: "Appointment management software for Healthcare professionals.",
  logo: CareIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://care.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/care-coordinator",
    },
  ],
  badges: ["Full-Stack", "Next.js", "FastAPI"],
  readMoreLink:
    "https://github.com/Achronus/care-coordinator",
};

export const DnDSpellExplorer: ProjectItem = {
  name: "Dnd Spell Explorer",
  desc: "The Netflix of DnD spells. Explore DnD 5e spells using an interactive card system.",
  logo: DndIcon.src,
  links: [
    {
      name: "Website",
      svg: Globe,
      url: "https://dnd.achronus.dev/",
    },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/dnd-explorer",
    },
  ],
  badges: ["Full-Stack", "Next.js", "FastAPI"],
  readMoreLink: "https://github.com/Achronus/dnd-explorer",
};

// Uni Projects
export const RlAtariGamesProject: ProjectItem = {
  name: "RL Atari Games",
  desc: "Exploring the effects of Intrinsic Motivation methods on Reinforcement Learning algorithms using Atari games.",
  logo: BathUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/rl_atari_games",
    },
  ],
  badges: [
    "Reinforcement Learning",
    "PyTorch",
    "Machine Learning",
  ],
  readMoreLink:
    "https://github.com/Achronus/rl_atari_games",
};

export const MiningRoversProject: ProjectItem = {
  name: "Planetary Mining Rovers",
  desc: "Using logic programming to solve a multi-agent system problem focusing on planetary mining with agent collaboration.",
  logo: BathUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/planetary-mining-rovers",
    },
  ],
  badges: [
    "Logic Programming",
    "Multi-Agent Systems",
    "Java",
  ],
  pageBadges: [
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
  readMoreLink: "planetary-mining-rovers",
  page: <MiningRovers />,
};

export const PlantClassifierProject: ProjectItem = {
  name: "Wild Edible Plants Classifier",
  desc: "Classifying 35 classes of wild edible plants with Convolutional Neural Network architectures and PyTorch.",
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/wep-classifier",
    },
  ],
  badges: ["Classification", "Deep Learning", "PyTorch"],
  readMoreLink: "wep-classifier",
  pageBadges: [
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
  page: <PlantClassifier />,
};

export const PolyRegressionProject: ProjectItem = {
  name: "Polynomial Regression",
  desc: "Building a Polynomial Regression from scratch to identify the relationship between non-linear variables.",
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/polynomial_regression",
    },
  ],
  badges: ["Regression", "Machine Learning", "Python"],
  readMoreLink: "polynomial-regression",
  pageBadges: [
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
  page: <PolynomialRegression />,
};

export const LinearRegressionProject: ProjectItem = {
  name: "Regression Analysis",
  desc: "Exploring the relationship between 4 variables in a city-cycle fuel consumption dataset using MATLAB.",
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/regression_analysis",
    },
  ],
  badges: ["Regression", "Machine Learning", "MATLAB"],
  readMoreLink: "regression-analysis",
  pageBadges: [
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
  page: <RegressionAnalysis />,
};

export const KMeansClusteringProject: ProjectItem = {
  name: "K-Means Clustering",
  desc: "Finding patterns in a dog breeds dataset using clustering techniques. Built from scratch without the help of Python libraries.",
  logo: LincolnUni.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Portfolio/tree/master/ml/k_means_clustering",
    },
  ],
  badges: ["Clustering", "Machine Learning", "Python"],
  readMoreLink: "k-means-clustering",
  pageBadges: [
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
  page: <KMeansClustering />,
};
