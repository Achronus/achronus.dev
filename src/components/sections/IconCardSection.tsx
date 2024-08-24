"use client";

import { genericAnimation } from "@/constants/motion";
import { motion } from "framer-motion";

import IconCard from "@/components/IconCard";
import { cn } from "@/lib/utils";
import { IconCardType } from "@/types/card";

type IconCardSectionProps = {
  cards: IconCardType[];
  className?: string;
};

const IconCardSection = ({ cards, className }: IconCardSectionProps) => {
  return (
    <motion.section
      className={cn("wrapper flex gap-8 mt-12 flex-wrap", className)}
      initial={genericAnimation.hide}
      animate={genericAnimation.show}
      transition={{ delay: 0.5 }}
    >
      {cards.map((card) => (
        <IconCard key={card.title} {...card} />
      ))}
    </motion.section>
  );
};

export default IconCardSection;
