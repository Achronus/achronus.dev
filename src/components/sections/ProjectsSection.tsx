import Image from "next/image";

import IconCard from "@/components/IconCard";
import { BorderMagicBadge } from "@/components/ShimmerBadge";
import { Badge } from "@/components/ui/badge";

import { statusMap } from "@/constants/status";
import { ProjectHeader, ProjectItem, ProjectSection } from "@/types/core";

type HeaderProps = ProjectHeader;

type ProjectCardsProps = {
  projects: ProjectItem[];
};

type ProjectBadgesProps = {
  badges: string[];
  text?: string;
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

const ProjectBadges = ({ badges, text }: ProjectBadgesProps) => {
  return (
    <div className="wrapper flex gap-4 mt-6 flex-wrap">
      {badges.map((badge) => (
        <Badge
          key={badge}
          variant="secondary"
          className="cursor-default px-3 py-1 bg-[linear-gradient(110deg,#3b82f6,45%,#1e40af,55%,#3b82f6)] animate-shimmer transition-all bg-[length:200%_100%]"
        >
          {badge}
        </Badge>
      ))}
      {text && <BorderMagicBadge delay={0}>{text}</BorderMagicBadge>}
    </div>
  );
};

const ProjectsSection = ({ sectionDetails }: ProjectsSectionProps) => {
  return (
    <div id="projects" className="flex flex-col">
      {sectionDetails.map((section) => (
        <section key={section.tag} id={section.tag} className="mb-28">
          <Header {...section.header} />
          {section.badges && (
            <ProjectBadges
              badges={section.badges}
              text="Projects Coming Soon"
            />
          )}
          {section.projects && <ProjectCards projects={section.projects} />}
        </section>
      ))}
    </div>
  );
};

export default ProjectsSection;
