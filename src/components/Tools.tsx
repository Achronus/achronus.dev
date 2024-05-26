import { IconType, SvgType } from "@/types/global";
import { Icon } from "./Icon";

export type ToolIconType = React.SVGAttributes<SVGElement> & {
  svg: SvgType;
};

export const ToolIcon = ({ svg, ...props }: ToolIconType) => {
  return (
    <div key={svg.name} className="tooltip" data-tip={svg.name}>
      <Icon
        key={svg.name}
        svg={svg}
        {...props}
        className={`${svg.name}-logo w-5 h-5 lg:w-6 lg:h-6`}
        styles="hover:bg-inherit p-0"
      />
    </div>
  );
};

const IconTools = ({ tools }: { tools: IconType[] }) => {
  return (
    <div className="tools flex gap-4">
      {tools.map((tool) => (
        <ToolIcon key={tool.svg.name} {...tool} />
      ))}
    </div>
  );
};

const SvgTools = ({ tools }: { tools: SvgType[] }) => {
  return (
    <div className="tools flex gap-4">
      {tools.map((tool) => (
        <ToolIcon key={tool.name} svg={tool} {...tool} />
      ))}
    </div>
  );
};

export { IconTools, SvgTools };
