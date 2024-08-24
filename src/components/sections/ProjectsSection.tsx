import Image from "next/image";

import IconCard from "@/components/IconCard";

import { statusMap } from "@/constants/status";
import { ProjectHeader, ProjectItem, ProjectSection } from "@/types/core";

type HeaderProps = ProjectHeader;

type ProjectCardsProps = {
  projects: ProjectItem[];
};

type ProjectsSectionProps = {
  sectionDetails: ProjectSection[];
};

const Header = ({ caption, title, desc }: HeaderProps) => {
  return (
    <div className="wrapper">
      <h2 className="mb-2 block font-black lg:mb-4 text-blue-500">{caption}</h2>
      <h1 className="mb-4 text-3xl font-black text-slate-300 lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-lg text-slate-400">{desc}</p>
    </div>
  );
};

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  const setColour = (status: string) => {
    const bg =
      statusMap.find((item) => item.name === status)?.bgColour ??
      "bg-secondary";

    return `${bg} hover:${bg}`;
  };

  return (
    <div className="wrapper flex gap-4 mt-8 flex-wrap">
      {projects.map((project) => (
        <IconCard
          key={project.name}
          title={project.name}
          desc={project.desc}
          icon={
            <Image
              src={project.logo}
              alt={project.name}
              width={24}
              height={24}
            />
          }
          headerIcons={project.links}
          styles={{ badge: setColour(project.status) }}
          status={project.status}
        />
      ))}
    </div>
  );
};

const ProjectsSection = ({ sectionDetails }: ProjectsSectionProps) => {
  return (
    <div id="projects" className="flex flex-col">
      {sectionDetails.map((section) => (
        <section key={section.tag} id={section.tag} className="mb-28">
          <Header {...section.header} />
          <ProjectCards projects={section.projects} />
        </section>
      ))}
    </div>
  );
};

export default ProjectsSection;
