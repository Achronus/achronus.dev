import { ProjectItem } from "@/types/core";
import { GitHub } from "@/constants/icons/social";
import { Globe } from "@/constants/icons/misc";

import ZentraIcon from "@/assets/zentra.png";
import CareIcon from "@/assets/care.png";
import DndIcon from "@/assets/dnd.png";
import LuminoIcon from "@/assets/lumino.png";
import CloverIcon from "@/assets/clover.png";
import FlowCodeIcon from "@/assets/flowcode.png";
import TriggoIcon from "@/assets/triggo.png";
import Logo from "@/assets/logo.ico";
import LincolnUni from "@/assets/uol.png";
import BathUni from "@/assets/uob.png";

// Dev Tools
export const Zentra: ProjectItem = {
  name: "Zentra",
  desc: "An open-source Python SDK for building FastAPI and Next.js apps faster.",
  logo: ZentraIcon.src,
  links: [
    // {
    //   name: "Website",
    //   svg: Globe,
    //   url: "https://zentra.achronus.dev/",
    // },
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/Zentra",
    },
  ],
  status: "Alpha",
};

export const CreateApiApp: ProjectItem = {
  name: "Create Api App",
  desc: "A CLI tool for creating FastAPI and Next.js projects.",
  logo: Logo.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/create-api-app",
    },
  ],
  status: "Live",
};

export const BuildNextjsApp: ProjectItem = {
  name: "Build NextJS App",
  desc: "A CLI tool for creating fresh Nextjs applications using a Docker container.",
  logo: Logo.src,
  links: [
    {
      name: "GitHub",
      svg: GitHub,
      url: "https://github.com/Achronus/build-nextjs-app",
    },
  ],
  status: "Live",
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
  status: "Live",
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
  status: "Live",
};

export const Lumino: ProjectItem = {
  name: "Lumino",
  desc: "A versatile productivity software tool that helps individuals manage tasks, projects, and notes in one location.",
  logo: LuminoIcon.src,
  links: [
    // {
    //   name: "GitHub",
    //   svg: GitHub,
    //   url: "https://github.com/Achronus/lumino",
    // },
  ],
  status: "Coming Soon",
};

export const FlowCode: ProjectItem = {
  name: "FlowCode",
  desc: "A codebase visualisation tool. Identify which functions connect to each other using an interactive flowchart.",
  logo: FlowCodeIcon.src,
  links: [],
  status: "Coming Soon",
};

export const Triggo: ProjectItem = {
  name: "Triggo",
  desc: "An automation workflow tool. Effortlessly enhance your productivity and efficiency with everyday tasks.",
  logo: TriggoIcon.src,
  links: [],
  status: "Coming Soon",
};

export const Clover: ProjectItem = {
  name: "Clover",
  desc: "An income and expenses tracker tool for managing and monitoring your daily, monthly and yearly spend.",
  logo: CloverIcon.src,
  links: [],
  status: "Coming Soon",
};

// Uni Projects
export const RLAtariGames: ProjectItem = {
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
  status: "Complete",
  pageName: "rl-atari-games",
};

export const MiningRovers: ProjectItem = {
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
  status: "Complete",
  pageName: "planetary-mining-rovers",
};

export const PlantClassifier: ProjectItem = {
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
  status: "Complete",
  pageName: "wep-classifier",
};

export const PolyRegression: ProjectItem = {
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
  status: "Complete",
  pageName: "polynomial-regression",
};

export const LinearRegression: ProjectItem = {
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
  status: "Complete",
  pageName: "regression-analysis",
};

export const KMeansClustering: ProjectItem = {
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
  status: "Complete",
  pageName: "k-means-clustering",
};
