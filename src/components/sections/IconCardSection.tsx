import IconCard from "@/components/IconCard";
import { cn } from "@/lib/utils";
import { IconCardType } from "@/types/card";

type IconCardSectionProps = {
  cards: IconCardType[];
  className?: string;
};

const IconCardSection = ({ cards, className }: IconCardSectionProps) => {
  return (
    <section className={cn("wrapper flex gap-8 mt-12 flex-wrap", className)}>
      {cards.map((card) => (
        <IconCard key={card.title} {...card} />
      ))}
    </section>
  );
};

export default IconCardSection;
