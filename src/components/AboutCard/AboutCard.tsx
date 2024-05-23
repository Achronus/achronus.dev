import { AboutDetailsType } from "@/types/about";

import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";

/**
 * @name AboutCard
 * @description Represents a card to display the `Author` details.
 *
 * Divided into two components:
 * 1. `ProfileImg` - displays the authors image
 * 2. `ProfileDetails` - displays the information about the author
 *
 * @param {AboutDetailsType} details - An object of information for the card.
 **/
const AboutCard = (details: AboutDetailsType) => {
  return (
    <>
      <div className="about text-center justify-center lg:text-start lg:justify-start">
        <ProfileImg src={details.profileImg} alt="me" />
        <ProfileDetails
          name={details.name}
          locationTags={details.locationTags}
          description={details.description}
          socials={details.socials}
        />
      </div>
    </>
  );
};

export default AboutCard;
