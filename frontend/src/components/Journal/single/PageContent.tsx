import React from "react";

type PageProps = {
  type: string;
  title: string;
  date: string; // ISO format date string
  imgUrl: string;
  tags: string[];
  githubUrl?: string;
};

type SiteTag = {
  slug: string;
  title: string;
  icon: string;
};

type Props = {
  page: PageProps;
  siteTags: SiteTag[];
};

const SinglePageContent: React.FC<Props> = ({ page, siteTags }) => {
  return <></>;
};

export default SinglePageContent;
