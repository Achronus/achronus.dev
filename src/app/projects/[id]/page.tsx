"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { ProjectsMapping } from "@/constants/pages";

import { cn } from "@/lib/utils";
import { ProjectItem } from "@/types/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const pathname = usePathname();

  const [projectName, setProjectName] = useState(
    pathname!.split("/").at(-1)
  );
  const [projectDetails, setProjectDetails] =
    useState<ProjectItem | null>(null);

  useEffect(() => {
    const details = ProjectsMapping.find(
      (project) => project.name == projectName
    )?.details;

    if (details) {
      setProjectDetails(details);
    }
  }, [projectName, projectDetails]);

  return projectDetails ? (
    <PageLayout
      details={{
        title: projectDetails.name,
        desc: projectDetails.desc,
      }}
      created={{
        logo: projectDetails.logo,
        badges: projectDetails.pageBadges,
        links: projectDetails.links,
      }}
    >
      {projectDetails.page}
    </PageLayout>
  ) : (
    <div
      className={cn(
        "before:absolute before:inset-0 before:w-full before:h-full before:bg-grid-top-small before:z-[-1]",
        "wrapper md:pt-40 pt-32"
      )}
    >
      Loading...
    </div>
  );
};

export default SingleProject;
