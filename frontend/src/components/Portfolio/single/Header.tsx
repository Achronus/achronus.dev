import React from "react";

import type { Article } from "@/types/common";

type PageProps = {
  details: Article;
};

const SingleHeader: React.FC<PageProps> = ({ details }) => {
  const formattedDate = new Date(details.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container tw-mt-10 tw-mb-20">
      <div className="row">
        <div className="col-12 page-content">
          <div className="header text-center mt-5">
            <h3 className="mb-4 tw-text-black-theme tw-font-rubik tw-font-light tw-text-3xl">
              PROJECT
            </h3>
            <h2 className="mt-3 mb-4 display-5 tw-text-black-theme tw-font-dm-sans tw-font-semibold">
              {details.title}
            </h2>
            <p className="mb-5 tw-text-black-theme tw-font-dm-mono tw-text-lg">
              {formattedDate}
            </p>
            <div className="bg-img tw-flex tw-justify-center">
              <img
                src={details.imgUrl}
                alt={details.title}
                className="tw-rounded"
              />
            </div>
            <div className="row mt-5 tw-border-y-2 tw-border-torquoise-light tw-py-6">
              {details.githubUrl && (
                <div className="code col-12 col-sm-auto col-lg-2 text-center text-sm-end">
                  <a
                    href={details.githubUrl}
                    className="hover:tw-text-blue-dark tw-transition-all"
                  >
                    <i className="fa-solid fa-code"></i> View code
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
