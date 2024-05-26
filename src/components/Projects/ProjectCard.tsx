import { IconType } from "@/types/global";
import { ProjectType } from "@/types/projects";

import Description from "@components/Description";
import { Icon } from "@components/Icon";
import { useEffect, useState } from "react";
import { IconTools } from "@components/Tools";

type HeaderProps = {
  name: string;
  logo: string;
  links: IconType[];
};

type ToolsProps = {
  tools: IconType[];
  badgeText?: string;
};

const Links = ({ links }: { links: IconType[] }) => {
  return (
    <>
      {links.map((link) => (
        <Icon key={link.svg.name} {...link} />
      ))}
    </>
  );
};

const ToolsHeaderWithBadge = ({ text }: { text: string }) => {
  const [badgeColour, setBadgeColour] = useState("badge-accent");

  useEffect(() => {
    if (text !== "In Development") {
      setBadgeColour("badge-secondary");
    }
  }, []);

  return (
    <div className="header flex gap-2 mb-3">
      <h2 className="font-medium">Tools</h2>
      <div className="ml-auto">
        <div className={`badge ${badgeColour} badge-outline`}>{text}</div>
      </div>
    </div>
  );
};

const ProjectTools = ({ tools, badgeText }: ToolsProps) => {
  return (
    <>
      {badgeText ? (
        <ToolsHeaderWithBadge text={badgeText} />
      ) : (
        <h2 className="font-medium mb-3">Tools</h2>
      )}
      <IconTools tools={tools} />
    </>
  );
};

const Header = ({ name, logo, links }: HeaderProps) => {
  return (
    <div className="header grid grid-cols-2 mb-3 items-center align-middle">
      <div className="branding flex gap-2 justify-start">
        <img className="w-6 h-6 rounded-full" src={logo} alt={`${name} logo`} />
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
  status,
}: ProjectType) => {
  return (
    <div className="project items-center justify-center align-middle">
      <div className="bg-base-200 rounded-lg p-6">
        <Header name={name} logo={logo} links={links} />
        <Description styles="md:min-h-20 lg:min-h-20 xl:min-h-12">
          {description}
        </Description>
        <div className="divider my-2.5"></div>
        <ProjectTools tools={tools} badgeText={status} />
      </div>
    </div>
  );
};

export default ProjectCard;
