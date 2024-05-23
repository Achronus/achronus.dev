import Svg from "@/components/Svg";

export type SocialIconProps = SvgProps & {
  name: string;
  url: URL;
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
        <Svg path={path} {...props} />
      </a>
    </div>
  );
};

export default SocialIcon;
