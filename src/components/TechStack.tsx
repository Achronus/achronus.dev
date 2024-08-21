import Svg from "@/components/Svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TechStackIcons, TechToolIcons } from "@/constants/menu";
import { cn } from "@/lib/utils";
import { SvgItem } from "@/types/core";

const IconStack = ({ icons }: { icons: SvgItem[] }) => {
  return (
    <section className="flex gap-3">
      {icons.map((icon) => (
        <Tooltip key={icon.name}>
          <TooltipTrigger asChild>
            <Svg
              path={icon.path}
              viewBox={icon.viewBox}
              className={cn(
                "text-slate-500 w-6 h-6 transition-colors",
                `hover:text-icon-${icon.name?.toLowerCase()}`
              )}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{icon.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="flex flex-col mt-16">
      <p className="text-slate-500 text-sm">Current tech stack/tools:</p>
      <TooltipProvider>
        <div className="flex gap-3 items-center mt-3">
          <IconStack icons={TechStackIcons} />
          <div className="h-3 w-[1px] bg-slate-500" />
          <IconStack icons={TechToolIcons} />
        </div>
      </TooltipProvider>
    </section>
  );
};

export default TechStack;
