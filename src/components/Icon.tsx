import Svg from "@/components/Svg";
import { cn } from "@/lib/utils";
import { SvgIconType } from "@/types/core";
import Link from "next/link";

export type IconProps = React.SVGAttributes<SVGElement> & SvgIconType;

export const Icon = ({ url, svg, styles, ...props }: IconProps) => {
  return (
    <div
      className={cn(
        `${svg.name?.toLowerCase()}-icon hover:bg-muted transition-colors rounded-md p-2 items-center`,
        styles
      )}
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
