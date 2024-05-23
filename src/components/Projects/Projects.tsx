import { ProjectType } from "@/types/projects";
import ProjectCard from "./ProjectCard";

const Projects = ({
  projects,
}: {
  projects: ProjectType[];
}) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </>
  );
};

export default Projects;
