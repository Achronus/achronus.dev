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
  description: string;
};

export type Article = {
  title: string;
  slug: string;
  content: string;
  date: Date;
  order: number;
};

export type ProjectArticles = {
  project: string;
  articles: Article[];
};
