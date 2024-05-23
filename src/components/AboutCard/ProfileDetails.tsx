import { TagType } from "@/types/global";
import { IconProps } from "../Icon";

import Description from "@components/Description";
import Socials from "@components/Socials";
import Tag from "@components/Tag";

type ProfileDetailsProps = {
  name: string;
  description: string;
  locationTags: TagType[];
  socials: IconProps[];
};

const Name = ({ children }: { children: string }) => {
  return (
    <div className="name gap-2 md:mt-2">
      <h2 className="mt-3 font-medium text-3xl lg:mb-3">
        {children}
      </h2>
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
          <Socials.Icon key={icon.name} {...icon} />
        ))}
      </Socials>
    </>
  );
};

export default ProfileDetails;
