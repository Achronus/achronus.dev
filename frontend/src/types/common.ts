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