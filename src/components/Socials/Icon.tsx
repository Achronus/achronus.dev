import Svg from "@/components/Svg";

export type SocialIconType = SvgProps & {
  name: string;
  url: URL;
};

const Icon = ({
  name,
  url,
  path,
  ...props
}: SocialIconType) => {
  return (
    <div
      className={`${name}-icon hover:bg-base-content/10 hover:opacity-85 p-2 transition-all rounded-md items-center`}
    >
      <a href={url.href}>
        <Svg path={path} {...props} />
      </a>
    </div>
  );
};

export default Icon;
