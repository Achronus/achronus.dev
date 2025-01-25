import React, { useEffect } from "react";

import type { Project } from "@/types/common";

type Props = {
  projects: Project[];
  currentFilter: string;
};

const ProjectSection: React.FC<Props> = ({ projects, currentFilter }) => {
  useEffect(() => {
    const portfolioItems = Array.from(
      document.querySelectorAll(".project-item")
    ) as HTMLElement[];

    const render = (filter: string) => {
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        // Remove 'show' to retrigger animation
        item.classList.remove("show");

        if (filter === "all" || category === filter) {
          setTimeout(() => {
            item.classList.add("show");
          }, 50); // Delay to reset animation
        }
      });
    };

    render(currentFilter);
  }, [currentFilter]);

  return (
    <section
      id="portfolio"
      className="pt-3 tw-my-10 tw-min-h-[60vh] tw-transition-all"
    >
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div
              className="project-item col-md-6 col-xl-4 tw-mb-12"
              data-category={project.category}
              key={project.url}
            >
              <div className="content tw-bg-torquoise-light tw-border-[3px] tw-border-torquoise-light tw-rounded-md tw-transition-all tw-m-0">
                <div className="img-container tw-flex tw-justify-center tw-align-middle tw-h-72 tw-bg-white">
                  <a href={project.url}>
                    <img
                      src={project.img_url}
                      alt={project.title}
                      className="project-image"
                    />
                  </a>
                </div>
                <div className="description tw-p-4 tw-m-0">
                  <a href={project.url}>
                    <div className="tags col-12 tw-flex tw-justify-between">
                      {project.tags.map(({ title, slug, icon }) => (
                        <div
                          className="project-tag tw-text-blue-dark"
                          key={slug}
                        >
                          <i className={`icon-${slug} ${icon} tw-mr-1`} />
                          {title}
                        </div>
                      ))}
                    </div>
                    <div className="text tw-pt-2.5 tw-font-rubik">
                      <h2 className="tw-text-black-theme tw-font-medium tw-text-2xl tw-mt-2.5">
                        {project.title}
                      </h2>
                      <p className="tw-text-base tw-my-5 tw-font-light">
                        {project.desc}
                      </p>
                      <div className="row">
                        <div className="cta col-12 text-end">
                          <i className="fas fa-arrow-alt-circle-right tw-transition-all tw-bg-white tw-text-blue-dark tw-rounded-full tw-text-3xl" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
