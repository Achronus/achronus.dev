import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DevTools, FullStackProjects } from "@/constants/projectSections";
import { statusMap } from "@/constants/status";
import { cn } from "@/lib/utils";
import { ProjectHeader, ProjectItem } from "@/types/core";

type HeaderProps = ProjectHeader;

type ProjectCardsProps = {
  projects: ProjectItem[];
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
    <div className="wrapper flex flex-col lg:flex-row gap-4 mt-8">
      {projects.map((project) => (
        <Card key={project.name} className="relative z-10 flex-1 bg-background">
          <div className="absolute inset-x-0 inset-y-8 z-[-1] border-t border-slate-800" />
          <div className="absolute inset-y-0 inset-x-8 z-[-1] border-l border-slate-800" />
          <CardHeader className="p-4">
            <div className="flex items-center rounded-full bg-slate-900 py-0.5 pr-1">
              <section className="flex gap-2 items-center">
                <div className="rounded-full p-2.5 -m-1 bg-sky-900">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="ml-1 font-medium">{project.name}</h3>
              </section>
              <TooltipProvider>
                <section className="flex ml-auto gap-1">
                  {project.links.map((link) => (
                    <Tooltip key={link.name}>
                      <TooltipTrigger asChild>
                        <Link href={link.url!}>
                          <Icon svg={link.svg} styles="rounded-full" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </section>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 ml-6 items-start">
            <Badge
              className={cn(
                "ml-auto text-slate-300",
                setColour(project.status)
              )}
            >
              {project.status}
            </Badge>
            <CardDescription>{project.desc}</CardDescription>
          </CardContent>
          <CardFooter className="ml-6">
            {/* <Button className="bg-blue-800 text-slate-300 font-bold rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
              Learn More
              <ArrowRight size={20} className="ml-2" />
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div id="projects" className="flex flex-col">
      <section id="dev-tools" className="mb-28">
        <Header {...DevTools.header} />
        <ProjectCards projects={DevTools.projects} />
      </section>

      <section id="full-stack" className="mb-28">
        <Header {...FullStackProjects.header} />
        <ProjectCards projects={FullStackProjects.projects} />
      </section>
    </div>
  );
};

export default ProjectsSection;
