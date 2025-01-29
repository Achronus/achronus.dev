"use client";

import type { SvgItem } from "@/types/common";

import Svg from "@/components/Svg";
import { cn } from "@/utils";
import { useState } from "react";

type TechStackProps = {
  stack: SvgItem[];
};

type IconStackProps = {
  icons: SvgItem[];
};

const IconStack = ({ icons }: IconStackProps) => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | undefined>(
    undefined
  );

  return (
    <section className="tw-flex tw-gap-3">
      {icons.map((icon) => (
        <div key={icon.name} className="tw-relative tw-inline-block">
          <div
            className="tw-cursor-help"
            onMouseEnter={() => setVisibleTooltip(icon.name)}
            onMouseLeave={() => setVisibleTooltip(undefined)}
          >
            <Svg
              path={icon.path}
              viewBox={icon.viewBox}
              className={cn(
                "tw-text-slate-500 tw-w-6 tw-h-6 tw-transition-colors",
                `hover:tw-text-icon-${icon.name?.toLowerCase()}`
              )}
            />
          </div>
          {visibleTooltip === icon.name && (
            <div className="tw-absolute tw-bottom-full tw-mb-2 tw-p-2 tw-bg-slate-900 tw-border tw-text-white tw-text-sm tw-rounded">
              <p>{icon.name}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="tw-flex tw-gap-3 tw-items-center tw-px-2 tw-mt-2">
      <IconStack icons={stack} />
    </div>
  );
};

export default TechStack;
