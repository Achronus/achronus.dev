"use client";

import { motion } from "framer-motion";

import Svg from "@/components/Svg";
import { genericAnimation } from "@/constants/motion";
import { cn } from "@/lib/utils";
import { SvgItem } from "@/types/core";
import { useState } from "react";

type TechStackProps = {
  leftStack: SvgItem[];
  rightStack: SvgItem[];
};

type IconStackProps = {
  icons: SvgItem[];
};

const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const IconStack = ({ icons }: IconStackProps) => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | undefined>(
    undefined
  );

  return (
    <section className="flex gap-3">
      {icons.map((icon) => (
        <div key={icon.name} className="relative inline-block">
          <div
            className="cursor-help"
            onMouseEnter={() => setVisibleTooltip(icon.name)}
            onMouseLeave={() => setVisibleTooltip(undefined)}
          >
            <Svg
              path={icon.path}
              viewBox={icon.viewBox}
              className={cn(
                "text-slate-500 w-6 h-6 transition-colors",
                `hover:text-icon-${icon.name?.toLowerCase()}`
              )}
            />
          </div>
          {visibleTooltip === icon.name && (
            <motion.div
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="absolute bottom-full mb-2 p-2 bg-slate-900 border text-white text-sm rounded"
            >
              <p>{icon.name}</p>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

const TechStack = ({ leftStack, rightStack }: TechStackProps) => {
  return (
    <motion.section
      className="flex flex-col mt-6"
      initial={genericAnimation.hide}
      animate={genericAnimation.show}
      transition={{ delay: 0.4 }}
    >
      <p className="text-slate-500 text-sm">Current tech stack/tools:</p>
      <div className="flex gap-3 items-center mt-3">
        <IconStack icons={leftStack} />
        <div className="h-3 w-[1px] bg-slate-500" />
        <IconStack icons={rightStack} />
      </div>
    </motion.section>
  );
};

export default TechStack;
