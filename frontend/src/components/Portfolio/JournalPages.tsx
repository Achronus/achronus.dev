import React from "react";

import type { Article } from "@/types/common";

type Props = {
  articles: Article[];
  project: string;
};

const JournalPages: React.FC<Props> = ({ articles, project }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section
      id="articles"
      className="tw-inline-grid tw-w-full sm:tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4"
    >
      {articles.map((article) => (
        <a key={article.slug} href={`/journal/${project}/${article.slug}`}>
          <article className="tw-relative tw-m-2 tw-h-140 tw-overflow-hidden tw-rounded-md tw-border tw-border-torquoise-fade tw-bg-torquoise-fade tw-p-4 tw-transition-all hover:tw-border-black-theme hover:tw-drop-shadow-sm">
            <h3 className="tw-text-base tw-font-medium tw-tracking-normal tw-text-slate-800">
              {article.title}
            </h3>
            <small className="tw-mt-1 tw-text-sm tw-text-slate-500">
              {formatDate(article.date)}
            </small>
            <p className="excerpt tw-mt-1 tw-text-sm tw-text-slate-800">
              {article.content}
            </p>
          </article>
        </a>
      ))}
    </section>
  );
};

export default JournalPages;
