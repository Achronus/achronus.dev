import { Icon } from "@/components/Icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import { IconCardStyles } from "@/types/card";
import { IconType } from "@/types/core";
import Link from "next/link";
import { Badge } from "./ui/badge";

type IconCardProps = {
  title: string;
  desc: string;
  icon: React.ReactElement;
  styles?: IconCardStyles;
  headerIcons?: IconType[];
  status?: string;
};

const IconCard = ({
  title,
  desc,
  icon,
  styles,
  headerIcons,
  status,
}: IconCardProps) => {
  return (
    <Card
      className={cn(
        "min-w-[300px] relative z-10 flex-1 bg-background",
        styles?.card
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 inset-y-8 z-[-1] border-t border-slate-800",
          styles?.topLine
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 inset-x-8 z-[-1] border-l border-slate-800",
          styles?.leftLine
        )}
      />
      <CardHeader
        className={cn(
          "p-4 text-sm font-bold text-slate-300",
          styles?.cardHeader
        )}
      >
        <div
          className={cn(
            "flex items-center rounded-full py-0.5 pr-1 bg-slate-900",
            styles?.headerContainer
          )}
        >
          <section
            className={cn("flex gap-2 items-center", styles?.headerWrapper)}
          >
            <div
              className={cn(
                "rounded-full p-2.5 -m-1 bg-sky-900",
                styles?.iconContainer
              )}
            >
              {icon}
            </div>
            <h3 className={cn("ml-1 font-medium", styles?.titleContainer)}>
              {title}
            </h3>
          </section>
          {headerIcons && (
            <TooltipProvider>
              <section className="flex ml-auto gap-1">
                {headerIcons.map((icon) => (
                  <Tooltip key={icon.name}>
                    <TooltipTrigger asChild>
                      <Link href={icon.url}>
                        <Icon svg={icon.svg} styles="rounded-full" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{icon.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </section>
            </TooltipProvider>
          )}
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-col gap-2 ml-6 items-start",
          styles?.cardContent
        )}
      >
        {status && (
          <Badge className={cn("ml-auto text-slate-300", styles?.badge)}>
            {status}
          </Badge>
        )}
        <CardDescription
          className={cn("text-sm text-slate-400", styles?.cardDescription)}
        >
          {desc}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default IconCard;
