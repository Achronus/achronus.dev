import { cn } from "@/libs/utils";

const Svg = ({ path, ...props }: SvgProps) => {
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

export default Svg;
