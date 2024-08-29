"use client";

import { motion } from "framer-motion";

import { genericAnimation } from "@/constants/motion";
import { cn } from "@/lib/utils";

type BasicHeroProps = {
  title: string;
  desc: string;
};

const BasicHero = ({ title, desc }: BasicHeroProps) => {
  return (
    <div
      className={cn(
        "before:absolute before:inset-0 before:w-full before:h-full before:bg-grid-top-small before:z-[-1]",
        "wrapper md:pt-40 pt-32"
      )}
    >
      <motion.h1
        className="text-7xl font-extrabold leading-tight text-slate-300"
        initial={genericAnimation.hide}
        animate={genericAnimation.show}
        transition={{ delay: 0 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg font-medium text-slate-500"
        initial={genericAnimation.hide}
        animate={genericAnimation.show}
        transition={{ delay: 0.1 }}
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default BasicHero;
