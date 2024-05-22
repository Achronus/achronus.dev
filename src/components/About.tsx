import { AboutDetailsType } from "@/types/about";
import { cn } from "@/libs/utils";

type SVGProps = React.SVGAttributes<SVGElement> & {
  path: string;
};

type LocationTagProps = SVGProps & {
  text: string;
};

type ProfileImgProps =
  React.ImgHTMLAttributes<HTMLImageElement> & {
    styles?: string;
  };

type NameProps =
  React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
  };

type SocialIconProps = SVGProps & {
  name: string;
  url: URL;
};

type LocationTagElement = React.ReactElement<
  LocationTagProps,
  typeof LocationTag
>;

type SocialIconElement = React.ReactElement<
  SocialIconProps,
  typeof SocialIcon
>;

const SVG = ({ path, ...props }: SVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn(
        "w-4 h-4 lg:w-5 lg:h-5 text-base-content/80",
        props.className
      )}
    >
      <path d={path} />
    </svg>
  );
};

const ProfileImg = ({
  styles,
  ...props
}: ProfileImgProps) => {
  return (
    <div className="avatar m-auto sm:m-0">
      <div
        className={cn(
          "w-36 h-36 rounded-full lg:w-48 lg:h-48 md:ml-4",
          styles
        )}
      >
        <img {...props} />
      </div>
    </div>
  );
};

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

const LocationTag = ({
  text,
  path,
  ...props
}: LocationTagProps) => {
  return (
    <div className="flex items-center mb-1">
      <SVG path={path} {...props} />
      <p>{text}</p>
    </div>
  );
};

const Description = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="desc">
      <p>{children}</p>
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

const SocialIcon = ({
  name,
  url,
  path,
  ...props
}: SocialIconProps) => {
  return (
    <div
      className={`${name}-icon hover:bg-base-content/10 hover:opacity-85 p-2 transition-all rounded-md items-center`}
    >
      <a href={url.href}>
        <SVG path={path} {...props} />
      </a>
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

const AboutDetails = (details: AboutDetailsType) => {
  return (
    <>
      <About>
        <ProfileImg src={details.profileImg} alt="me" />
        <ProfileDetails>
          <Name>{details.name}</Name>
          <Location>
            {details.locationTags.map((tag) => (
              <LocationTag
                key={tag.type}
                text={tag.name}
                viewBox={tag.viewBox}
                path={tag.path}
                className="mr-1"
              />
            ))}
          </Location>
        </ProfileDetails>
        <Description>{details.description}</Description>
        <Socials>
          {details.socials.map((icon) => (
            <SocialIcon
              key={icon.name}
              name={icon.name}
              url={icon.url}
              viewBox={icon.viewBox}
              path={icon.path}
            />
          ))}
        </Socials>
      </About>
    </>
  );
};

export default AboutDetails;
