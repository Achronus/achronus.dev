import SocialIcon, { SocialIconProps } from "./SocialIcon";

type SocialIconElement = React.ReactElement<
  SocialIconProps,
  typeof SocialIcon
>;

const Socials = ({
  children,
}: {
  children: SocialIconElement[];
}) => {
  return (
    <div className="location flex justify-center lg:justify-start gap-4 mt-2">
      {children}
    </div>
  );
};

Socials.Icon = SocialIcon;

export default Socials;
