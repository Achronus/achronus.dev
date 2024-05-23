import Svg from "@/components/Svg";
import { IconType } from "@/types/global";

export type IconProps = React.SVGAttributes<SVGElement> &
  IconType;

const Icon = ({ name, url, svg, ...props }: IconProps) => {
  return (
    <div
      className={`${name}-icon hover:bg-base-content/10 hover:opacity-85 p-2 transition-all rounded-md items-center`}
    >
      <a href={url.href}>
        <Svg
          path={svg.path}
          viewBox={svg.viewBox}
          {...props}
        />
      </a>
    </div>
  );
};

export default Icon;
