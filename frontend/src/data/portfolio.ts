import type { Project, ProjectCategory } from "@/types/common";

export const ProjectCategories: ProjectCategory[] = [
  {
    slug: "ml",
    title: "Machine learning",
  },
  {
    slug: "rl",
    title: "Reinforcement Learning",
  },
]


export const Projects: Project[] = [
  {
    title: "Monte-Carlo Learning",
    desc: "A project that uses the card game Blackjack to understand the Monte-Carlo Learning algorithm for estimating value functions and discovering optimal policies in unknown MDPs.",
    url: "mc-learning",
    img_url: "cards.jpg",
    github_url: "https://github.com/Achronus/Portfolio/tree/master/rl/monte_carlo",
    category: "rl",
    tags: [
      {
        title: "Gymnasium",
        slug: "gym",
        icon: "fa fa-dumbbell"
      },
      {
        title: "Reinforcement learning",
        slug: "rl",
        icon: "fa fa-robot"
      }
    ],
  },
  {
    title: "Test",
    desc: "A project that uses the card game Blackjack to understand the Monte-Carlo Learning algorithm for estimating value functions and discovering optimal policies in unknown MDPs.",
    url: "mc-learning",
    img_url: "cards.jpg",
    github_url: "https://github.com/Achronus/Portfolio/tree/master/rl/monte_carlo",
    category: "ml",
    tags: [
      {
        title: "Gymnasium",
        slug: "gym",
        icon: "fa fa-dumbbell"
      },
      {
        title: "Reinforcement learning",
        slug: "rl",
        icon: "fa fa-robot"
      }
    ],
  },
]