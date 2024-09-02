import { ProjectItem } from "./core";

export type AboutDetailsType = {
  intro: string;
  firstName: string;
  lastName: string;
  title: string;
  desc: string;
  image: string;
};

export type FooterAboutDetailsType = {
  title: string;
  name: string;
  position: string;
  desc: string;
};

export type BasicHeroDetails = {
  title: string;
  desc: string;
};

export type ProjectBadge = {
  icon: React.ReactNode;
  text: string;
};

export type ProjectPageDetails = ProjectItem & {
  badges?: ProjectBadge[];
};
