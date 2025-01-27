import React from "react";

import type { Project } from "@/types/common";

type Props = {
  categories: Project[];
  currentFilter: string;
  handleFilterChange: (filter: string) => void;
};

const ProjectFilter: React.FC<Props> = ({
  categories,
  currentFilter,
  handleFilterChange,
}) => {
  return (
    <section
      id="project-filter"
      className="tw-m-2 tw-border-b tw-border-torquoise-light tw-text-center tw-text-sm tw-text-black-theme tw-font-dm-mono tw-transition-all"
    >
      <ul className="project-categories tw--mb-px tw-flex tw-flex-wrap">
        {categories.map((category) => (
          <li
            key={category.slug}
            className={`tw-inline-block tw-rounded-t-lg tw-border-b-2 tw-border-transparent tw-px-4 tw-py-2 hover:tw-border-black-theme hover:tw-text-black-theme tw-cursor-pointer tw-transition-all ${
              currentFilter === category.slug
                ? "tw-text-blue-dark !tw-border-blue-dark"
                : ""
            }`}
            onClick={() => handleFilterChange(category.slug)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectFilter;
