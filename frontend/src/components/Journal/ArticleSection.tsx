import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import {
  type Article,
  type Project,
  type ProjectArticles,
} from "@/types/collections";

import type { SvgItem } from "@/types/common";

import TechStack from "../TechStack";
import JournalPages from "./JournalPages";
import ProjectDescription from "./ProjectDescription";
import ProjectDetails from "./ProjectDetails";
import Filter from "./ProjectFilter";

type Props = {
  categories: Project[];
  articles: ProjectArticles[];
  tools: SvgItem[];
};

const ArticleSection: React.FC<Props> = ({ categories, articles, tools }) => {
  const [currentProject, setCurrentProject] = useState(categories[0].slug);
  const [categoryDetails, setCategoryDetails] = useState<Project | undefined>(
    undefined
  );
  const [projectArticles, setProjectArticles] = useState<Article[] | undefined>(
    undefined
  );

  const handleFilterChange = (newFilter: string) => {
    setCurrentProject(newFilter);
  };

  const AnimationVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  useEffect(() => {
    const cat = categories.find((cat) => cat.slug === currentProject);
    setCategoryDetails(cat);

    const arts = articles
      .find((p) => p.project == currentProject)
      ?.articles.sort((a, b) => a.order - b.order);
    setProjectArticles(arts);
  }, [currentProject]);

  return (
    <>
      <Filter
        categories={categories}
        currentFilter={currentProject}
        handleFilterChange={handleFilterChange}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject}
          variants={AnimationVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {categoryDetails && (
            <>
              <ProjectDetails category={categoryDetails} />
              {categoryDetails.tools && (
                <TechStack
                  stack={tools.filter((tool) =>
                    categoryDetails.tools!.includes(tool.name!)
                  )}
                />
              )}
              <ProjectDescription category={categoryDetails} />
            </>
          )}
          {projectArticles && (
            <JournalPages articles={projectArticles} project={currentProject} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ArticleSection;
