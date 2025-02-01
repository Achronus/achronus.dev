export type SocialIcon = {
  name: string;
  url: string;
  type: string;
  colour: string;
  order: number;
};

export type Project = {
  slug: string;
  title: string;
  url: string;
  order: number;
  timeTaken?: number;
  tools?: string[];
  description: string;
};

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  htmlContent: string;
  date: Date;
  order: number;
};

export type ProjectArticles = {
  project: string;
  articles: Article[];
};
