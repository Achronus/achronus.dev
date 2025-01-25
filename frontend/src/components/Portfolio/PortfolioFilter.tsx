import React, { useState } from "react";

import type { ProjectCategory } from "@/types/common";

interface Props {
  categories: ProjectCategory[];
  onFilterChange: (filter: string) => void;
}

const PortfolioFilter: React.FC<Props> = ({ categories, onFilterChange }) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilterClick = (filter: string) => {
    setCurrentFilter(filter);
    onFilterChange(filter);
  };

  return (
    <section id="portfolio-filter" className="pb-0 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button
              type="button"
              className={`btn btn-link tw-no-underline tw-text-black-theme hover:tw-text-blue-dark tw-transition-all ${currentFilter === "all" ? "tw-text-blue-dark" : ""}`}
              data-filter="all"
              onClick={() => handleFilterClick("all")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={`btn btn-link tw-no-underline tw-text-black-theme hover:tw-text-blue-dark tw-transition-all ${currentFilter === category.slug ? "tw-text-blue-dark" : ""}`}
                data-filter={category.slug}
                onClick={() => handleFilterClick(category.slug)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;
