import { TagType, SkillSetType } from "@/types/global";

import { IconProps } from "@/components/Icon";
import Description from "@/components/Description";
import Socials from "@/components/Socials";
import Tag from "@/components/Tag";
import { SvgTools } from "@/components/Tools";

import { toTitle } from "@/libs/utils";

type ProfileDetailsProps = {
  name: string;
  description: string;
  locationTags: TagType[];
  socials: IconProps[];
  skills: SkillSetType[];
};

const Name = ({ children }: { children: string }) => {
  return (
    <div className="name gap-2 md:mt-2">
      <h2 className="mt-3 font-medium text-3xl lg:mb-3">{children}</h2>
    </div>
  );
};

const Location = ({ tags }: { tags: TagType[] }) => {
  return (
    <div className="location flex justify-center lg:justify-start gap-4 mt-2">
      {tags.map((tag) => (
        <Tag key={tag.type} {...tag} />
      ))}
    </div>
  );
};

const TechStack = ({ skills }: { skills: SkillSetType[] }) => {
  return (
    <div className="tech-stack">
      <div className="divider"></div>
      <h1 className="font-medium text-lg mb-4">Tech Stack</h1>
      <div className="skills sm:grid sm:grid-cols-2 sm:gap-4 lg:block">
        {skills.map((skillSet) => (
          <div
            key={skillSet.type}
            className={`${skillSet.type} bg-base-200 rounded-lg p-4 mb-4`}
          >
            <h2 className="font-medium text-md mb-2">
              {toTitle(skillSet.type)}
            </h2>
            <SvgTools tools={skillSet.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * @name ProfileDetails
 * @description Displays information about the author.
 *
 * Divided into four components:
 * 1. `Name` - the name of the author.
 * 2. `Location` - the authors location.
 * 3. `Description` - a brief description about the author.
 * 4. `Socials` - social links related to the author.
 *
 * @param {string} name - the name of the author.
 * @param {TagType[]} locationTags - an array of objects containing the `location type`, `name`, `svg viewbox` and `svg path` for each location.
 * @param {string} description - a description of the author.
 * @param {IconProps[]} socials - an array of objects containing the `svg path`, `name`, `url`, and `svg viewbox` for each social icon.
 **/
const ProfileDetails = ({
  name,
  locationTags,
  description,
  socials,
  skills,
}: ProfileDetailsProps) => {
  return (
    <>
      <div className="profile mb-3">
        <Name>{name}</Name>
        <Location tags={locationTags} />
      </div>
      <Description>{description}</Description>
      <Socials>
        {socials.map((icon) => (
          <Socials.Icon key={icon.svg.name} {...icon} />
        ))}
      </Socials>
      <TechStack skills={skills} />
    </>
  );
};

export default ProfileDetails;
