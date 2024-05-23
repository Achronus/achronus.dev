import { IconType } from "@/types/global";
import { ProjectType } from "@/types/projects";

import Description from "@components/Description";
import Icon from "@components/Icon";

type HeaderProps = {
  name: string;
  logo: string;
  links: IconType[];
};

const Links = ({ links }: { links: IconType[] }) => {
  return (
    <>
      {links.map((link) => (
        <Icon key={link.name} {...link} />
      ))}
    </>
  );
};

const Tools = ({ tools }: { tools: IconType[] }) => {
  return (
    <>
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="tooltip"
          data-tip={tool.name}
        >
          <Icon
            key={tool.name}
            {...tool}
            className={`${tool.name}-logo w-5 h-5 lg:w-6 lg:h-6`}
            styles="hover:bg-inherit p-0"
          />
        </div>
      ))}
    </>
  );
};

const Header = ({ name, logo, links }: HeaderProps) => {
  return (
    <div className="header grid grid-cols-2 mb-3 items-center align-middle">
      <div className="branding flex gap-2 justify-start">
        <img
          className="w-6 h-6 rounded-full"
          src={logo}
          alt={`${name} logo`}
        />
        <h1 className="font-medium">{name}</h1>
      </div>
      <div className="links flex gap-2 justify-end">
        <Links links={links} />
      </div>
    </div>
  );
};

const ProjectCard = ({
  name,
  description,
  logo,
  links,
  tools,
}: ProjectType) => {
  return (
    <div className="project items-center justify-center align-middle">
      <div className="bg-base-200 rounded-lg p-6">
        <Header name={name} logo={logo} links={links} />
        <Description>{description}</Description>
        <div className="divider my-2.5"></div>
        <h2 className="font-medium mb-3">Tools</h2>
        <div className="tools flex gap-4">
          <Tools tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
