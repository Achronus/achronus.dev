import { AboutDetailsType } from "@/types/about";

import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";
import Description from "./AboutDesc";
import Socials from "@components/Socials";

const About = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="about text-center justify-center lg:text-start lg:justify-start">
        {children}
      </div>
    </>
  );
};

About.ProfileImg = ProfileImg;
About.ProfileDetails = ProfileDetails;
About.Description = Description;
About.Socials = Socials;

const AboutCard = (details: AboutDetailsType) => {
  return (
    <>
      <About>
        <About.ProfileImg
          src={details.profileImg}
          alt="me"
        />
        <About.ProfileDetails>
          <About.ProfileDetails.Name>
            {details.name}
          </About.ProfileDetails.Name>
          <About.ProfileDetails.Location>
            {details.locationTags.map((tag) => (
              <About.ProfileDetails.Location.Tag
                key={tag.type}
                text={tag.name}
                viewBox={tag.viewBox}
                path={tag.path}
                className="mr-1"
              />
            ))}
          </About.ProfileDetails.Location>
        </About.ProfileDetails>
        <About.Description>
          {details.description}
        </About.Description>
        <About.Socials>
          {details.socials.map((icon) => (
            <About.Socials.Icon
              key={icon.name}
              name={icon.name}
              url={icon.url}
              viewBox={icon.viewBox}
              path={icon.path}
            />
          ))}
        </About.Socials>
      </About>
    </>
  );
};

export default AboutCard;
