import React from "react";

import type { Article } from "@/types/collections";

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
    <>
      <div>
        <h2 className="tw-text-black-theme tw-font-dm-mono tw-font-semibold tw-mt-6 tw-pb-2 tw-mb-4 tw-text-2xl tw-mx-2 tw-border-b">
          Journal Logs
        </h2>
      </div>
      <section
        id="articles"
        className="tw-inline-grid tw-w-full sm:tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4"
      >
        {articles.map((article) => (
          <a key={article.slug} href={`/journal/${project}/${article.slug}`}>
            <article className="tw-relative tw-m-2 tw-h-140 tw-overflow-hidden tw-rounded-md tw-border tw-border-torquoise-fade tw-bg-torquoise-fade tw-p-4 tw-transition-all hover:tw-border-torquoise-light hover:tw-drop-shadow-sm">
              <h3 className="tw-text-base tw-font-semibold tw-tracking-normal tw-text-slate-800">
                {article.title}
              </h3>
              <small className="tw-mt-1 tw-text-sm tw-text-slate-500">
                {formatDate(article.date)}
              </small>
              <p className="excerpt tw-mt-1 tw-text-sm tw-text-slate-800">
                {article.content}
              </p>
              <div className="row">
                <div className="cta col-12 text-end tw-mt-2">
                  <i className="fas fa-arrow-alt-circle-right tw-text-blue-dark tw-transition-all tw-text-xl"></i>
                </div>
              </div>
            </article>
          </a>
        ))}
      </section>
    </>
  );
};

export default JournalPages;
