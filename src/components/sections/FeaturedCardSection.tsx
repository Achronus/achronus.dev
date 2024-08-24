import { cn } from "@/lib/utils";
import { FeaturedCardType } from "@/types/details";

type FeaturedCardSectionProps = {
  cardDetailsList: FeaturedCardType[];
};

const FeaturedCard = ({ icon, title, desc, iconStyles }: FeaturedCardType) => {
  return (
    <div className="relative z-10 rounded-2xl border bg-background border-slate-800 md:min-h-36 lg:min-h-min w-96">
      <div className="absolute inset-x-0 inset-y-8 z-[-1] border-t border-slate-800" />
      <div className="absolute inset-y-0 inset-x-8 z-[-1] border-l border-slate-800" />
      <div className="-mt-0.5">
        <div className="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-900">
          <div className={cn("rounded-full p-2.5 -m-1", iconStyles)}>
            {icon}
          </div>
          <div className="truncate py-2 pr-4 text-sm font-bold text-slate-300">
            {title}
          </div>
        </div>
      </div>
      <div className="p-4 pl-12 text-sm text-slate-400">{desc}</div>
    </div>
  );
};

const FeaturedCardSection = ({ cardDetailsList }: FeaturedCardSectionProps) => {
  return (
    <section
      className={cn(
        "wrapper flex flex-col justify-center items-center mt-12 gap-8",
        "md:flex-row"
      )}
    >
      {cardDetailsList.map((card) => (
        <FeaturedCard key={card.title} {...card} />
      ))}
    </section>
  );
};

export default FeaturedCardSection;
