import Icon, { SocialIconType } from "./Icon";

type SocialIconElement = React.ReactElement<
  SocialIconType,
  typeof Icon
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

Socials.Icon = Icon;

export default Socials;
