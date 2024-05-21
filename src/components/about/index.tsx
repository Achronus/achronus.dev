import { AboutDetailsType } from "@/types/about";

type tagProps = {
  text: string;
  viewBox: string;
  children: React.ReactNode;
};

type TitleProps = {
  devIcon: string;
  devName: string;
  name: string;
};

type ProfileImgProps = {
  url: string;
  alt: string;
};

type SocialIconProps = {
  name: string;
  url: URL;
  viewBox: string;
  path: string;
};

const ProfileImg = ({ url, alt }: ProfileImgProps) => {
  return (
    <div className="avatar m-auto sm:m-0">
      <div className="w-36 h-36 rounded-full lg:w-48 lg:h-48 md:ml-4">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

const SocialIcon = ({
  name,
  url,
  viewBox,
  path,
}: SocialIconProps) => {
  return (
    <div className={`${name}`}>
      <a href={url.href}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill="currentColor"
          className="w-4 h-4 lg:w-5 lg:h-5 text-base-content/80 mr-1"
        >
          <path d={path} />
        </svg>
      </a>
    </div>
  );
};

const Tag = ({ text, viewBox, children }: tagProps) => {
  return (
    <div className="flex items-center mb-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill="currentColor"
        className="w-4 h-4 lg:w-5 lg:h-5 text-base-content/80 mr-1"
      >
        {children}
      </svg>
      <p>{text}</p>
    </div>
  );
};

const Title = ({ devIcon, devName, name }: TitleProps) => {
  return (
    <div className="title flex justify-center gap-2 md:justify-start md:mt-2">
      <h2 className="mt-3 font-medium text-2xl lg:text-4xl lg:mb-3">
        <div className="flex items-center">
          <img
            className="w-5 h-5"
            src={devIcon}
            alt="Developer logo"
          />
        </div>
        <h1 className="font-bold text-xl mb-1 lg:font-extrabold lg:text-4xl lg:mb-3">
          {devName}
        </h1>
      </div>
      <h2 className="font-medium text-md mb-1 ml-7 lg:font-bold lg:text-4xl lg:mb-3">
        {name}
      </h2>
    </div>
  );
};

const Details = ({
  name,
  description,
  city,
  country,
  dev,
  socials,
}: AboutDetailsType) => {
  return (
    <>
      <div className="details">
        <div className="profile mb-3">
          <Title
          <div className="location flex justify-center gap-4 mt-2 md:justify-start">
            devIcon={dev.icon}
            name={name}
          />
          <div className="location flex gap-4">
            <Tag text={city} viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </Tag>
            <Tag text={country} viewBox="0 0 512 512">
              <path d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.7-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z" />
            </Tag>
          </div>
        </div>
        <div className="desc">
          <p>{description}</p>
        </div>
        <div className="socials justify-center flex gap-6 mt-4 md:justify-start">
          {socials.map((social, idx) => (
            <SocialIcon
              key={idx}
              name={social.name}
              url={social.url}
              viewBox={social.viewBox}
              path={social.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const About = (details: AboutDetailsType) => {
  return (
    <>
      <ProfileImg url={details.profileImg} alt="Me" />
      <Details {...details} />
    </>
  );
};

export default About;
