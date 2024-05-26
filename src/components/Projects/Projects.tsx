import { ProjectType } from "@/types/projects";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </>
  );
};

export default Projects;
