"use client";

import { genericAnimation } from "@/constants/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock2 } from "lucide-react";

type ShimmerBadgeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

type BorderMagicProps = ShimmerBadgeProps;

export const ShimmerBadge = ({
  children,
  delay,
  className,
}: ShimmerBadgeProps) => {
  return (
    <motion.div
      initial={genericAnimation.hide}
      animate={genericAnimation.show}
      transition={{ delay: delay ?? 0.1 }}
      className="mr-3"
    >
      <button
        className={cn(
          "inline-flex animate-shimmer items-center justify-center rounded-lg border border-blue-900 bg-[linear-gradient(110deg,#1e40af,45%,#3b82f6,55%,#1e40af)] bg-[length:200%_100%] py-2 px-3 font-medium text-slate-300 transition-colors text-sm cursor-default tracking-wide",
          className
        )}
      >
        {children}
      </button>
    </motion.div>
  );
};

export const BorderMagicBadge = ({ children, delay }: BorderMagicProps) => {
  return (
    <motion.div
      initial={genericAnimation.hide}
      animate={genericAnimation.show}
      transition={{ delay: delay ?? 0.1 }}
      className="mr-3"
    >
      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93c5fd_0%,#3b82f6_50%,#93c5fd_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 pl-4 pr-5 text-sm font-medium text-white backdrop-blur-3xl">
          <Clock2 className="mr-2 h-4 w-4" />
          {children}
        </span>
      </button>
    </motion.div>
  );
};
