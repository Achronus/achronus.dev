import { cn } from "@/lib/utils";

type SvgProps = React.SVGAttributes<SVGElement> & {
  path: string;
};

const Svg = ({ path, ...props }: SvgProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn("w-5 h-5 text-base-content/80", props.className)}
    >
      <path d={path} />
    </svg>
  );
};

export default Svg;
