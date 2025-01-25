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

export type ProjectCategory = {
  slug: string;
  title: string;
};

export type ProjectTag = {
  slug: string;
  title: string;
  icon: string;
}

export type Project = {
  title: string;
  desc: string;
  url: string;
  img_url: string;
  github_url: string;
  category: string;
  tags: ProjectTag[];
}