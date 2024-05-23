import { cn } from "@/libs/utils";
import Svg from "@/components/Svg";

type NameProps =
  React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
  };

type LocationTagProps = SvgProps & {
  text: string;
};

type LocationTagElement = React.ReactElement<
  LocationTagProps,
  typeof LocationTag
>;

const Name = ({ children, ...props }: NameProps) => {
  return (
    <div className="name gap-2 md:mt-2">
      <h2
        {...props}
        className={cn(
          "mt-3 font-medium text-3xl lg:mb-3",
          props.className
        )}
      >
        {children}
      </h2>
    </div>
  );
};

const Location = ({
  children,
}: {
  children: LocationTagElement[];
}) => {
  return (
    <div className="location flex justify-center lg:justify-start gap-4 mt-2">
      {children}
    </div>
  );
};

const LocationTag = ({
  text,
  path,
  ...props
}: LocationTagProps) => {
  return (
    <div className="flex items-center mb-1">
      <Svg path={path} {...props} />
      <p>{text}</p>
    </div>
  );
};

const ProfileDetails = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="profile mb-3">{children}</div>;
};

ProfileDetails.Name = Name;
ProfileDetails.Location = Location;

Location.Tag = LocationTag;

export default ProfileDetails;
