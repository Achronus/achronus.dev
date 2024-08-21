import Svg from "@/components/Svg";
import { cn } from "@/lib/utils";
import { IconType } from "@/types/global";
import Link from "next/link";

export type IconProps = React.SVGAttributes<SVGElement> & IconType;

export const Icon = ({ url, svg, styles, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        `${svg.name?.toLowerCase()}-icon hover:bg-muted transition-colors rounded-md p-2 items-center`,
        styles
      )}
      data-tip={svg.name}
    >
      {url ? (
        <Link href={url}>
          <Svg path={svg.path} viewBox={svg.viewBox} {...props} />
        </Link>
      ) : (
        <Svg path={svg.path} viewBox={svg.viewBox} {...props} />
      )}
    </div>
  );
};
