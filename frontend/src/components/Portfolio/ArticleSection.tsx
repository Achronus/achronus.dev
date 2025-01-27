import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import type { Project, ProjectArticles } from "@/types/common";

import JournalPages from "./JournalPages";
import ProjectDescription from "./ProjectDescription";
import Filter from "./ProjectFilter";

type Props = {
  categories: Project[];
  articles: ProjectArticles[];
};

const ArticleSection: React.FC<Props> = ({ categories, articles }) => {
  const [currentProject, setCurrentProject] = useState(categories[0].slug);

  const handleFilterChange = (newFilter: string) => {
    setCurrentProject(newFilter);
  };

  const AnimationVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

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
          <ProjectDescription
            category={categories.find((cat) => cat.slug === currentProject)!}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject}
          variants={AnimationVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <JournalPages
            articles={
              articles
                .find((p) => p.project == currentProject)
                ?.articles.sort((a, b) => a.order - b.order) || []
            }
            project={currentProject}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ArticleSection;
