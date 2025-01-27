export type Link = {
  href: string;
  styles: string;
}

export type MenuLink = {
  text: string;
  href: string;
  desc?: string;
};


export type CTA = {
  text: string;
  href: string;
  styles: string;
  iconStyle?: string;
}

export type SocialIcon = {
  name: string;
  url: string;
  type: string;
  colour: string;
}

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
}

export type ProjectArticles = {
  project: string;
  articles: Article[];
}