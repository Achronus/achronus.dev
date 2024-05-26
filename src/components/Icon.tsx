import Svg from "@/components/Svg";
import { cn } from "@/libs/utils";
import { IconType } from "@/types/global";

export type IconProps = React.SVGAttributes<SVGElement> & IconType;

export const Icon = ({ url, svg, styles, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        `${svg.name?.toLowerCase()}-icon hover:bg-base-content/10 hover:opacity-85 p-2 transition-all rounded-md items-center tooltip`,
        styles
      )}
      data-tip={svg.name}
    >
      {url ? (
        <a href={url.href}>
          <Svg path={svg.path} viewBox={svg.viewBox} {...props} />
        </a>
      ) : (
        <Svg path={svg.path} viewBox={svg.viewBox} {...props} />
      )}
    </div>
  );
};
