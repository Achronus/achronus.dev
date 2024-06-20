import { IconType, SvgType } from "@/types/global";
import {
  ProjectType,
  StatusOptions,
} from "@/types/projects";

import Description from "@/components/Description";
import { Icon } from "@/components/Icon";
import { SvgTools } from "@/components/Tools";
import Image from "next/image";
import { colourMap } from "@/data/colours";

type HeaderProps = {
  name: string;
  logo: string;
  links: IconType[];
};

type ToolsProps = {
  tools: SvgType[];
  badgeText: StatusOptions;
};

const Links = ({ links }: { links: IconType[] }) => {
  return (
    <>
      {links.map((link, idx) => (
        <Icon key={link.svg.name ?? idx} {...link} />
      ))}
    </>
  );
};

const ToolsHeaderWithBadge = ({
  text,
}: {
  text: string;
}) => {
  const colour = colourMap.find(
    (item) => item.name === text
  );

  return (
    <div className="header flex gap-2 mb-3">
      <h2 className="font-medium">Tools</h2>
      <div className="ml-auto">
        <div
          className={`badge ${
            colour ? colour.value : ""
          } badge-outline`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const ProjectTools = ({ tools, badgeText }: ToolsProps) => {
  return (
    <>
      <ToolsHeaderWithBadge text={badgeText} />
      <SvgTools tools={tools} />
    </>
  );
};

const Header = ({ name, logo, links }: HeaderProps) => {
  return (
    <div className="header mb-3 flex items-center align-middle">
      <div className="branding flex gap-2 mr-auto">
        {!logo.startsWith("/") ? (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-6 h-6">
              <span className="text-xs">{logo}</span>
            </div>
          </div>
        ) : (
          <Image
            style={{ borderRadius: "9999px" }}
            src={logo}
            alt={`${name} logo`}
            width={24}
            height={24}
          />
        )}
        <h1 className="font-medium">{name}</h1>
      </div>
      <div className="links flex ml-auto">
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
        <Description>{description}</Description>
        <div className="divider my-2.5"></div>
        <ProjectTools tools={tools} badgeText={status} />
      </div>
    </div>
  );
};

export default ProjectCard;
