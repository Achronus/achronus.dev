import React, { useState } from "react";

import type { Project, ProjectCategory } from "@/types/common";
import PortfolioFilter from "./PortfolioFilter";
import ProjectSection from "./ProjectSection";

type Props = {
  categories: ProjectCategory[];
  projects: Project[];
};

const Portfolio: React.FC<Props> = ({ categories, projects }) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div className="tw-mt-6 tw-mb-12 tw-pb-12">
      <PortfolioFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      <ProjectSection projects={projects} currentFilter={currentFilter} />
    </div>
  );
};

export default Portfolio;
