import { cn } from "@/lib/utils";
import { ChartColumn, Heart, Link } from "lucide-react";

type FeaturedCardProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
  iconStyles?: string;
};

const FeaturedCard = ({ icon, title, desc, iconStyles }: FeaturedCardProps) => {
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

const FeaturedCardSection = () => {
  return (
    <section
      className={cn(
        "wrapper flex flex-col justify-center items-center mt-12 gap-8",
        "md:flex-row"
      )}
    >
      <FeaturedCard
        icon={<Link size={24} strokeWidth={1.5} />}
        title="API Craftsman"
        desc="Keeping API's clean, efficient, scalable, and maintainable."
        iconStyles="bg-amber-900"
      />
      <FeaturedCard
        icon={<Heart size={24} strokeWidth={1.5} fill="white" />}
        title="Detail Oriented"
        desc="Awareness to ease of access, accessibility, and a seamless UX."
        iconStyles="bg-pink-900"
      />
      <FeaturedCard
        icon={<ChartColumn size={24} strokeWidth={1.5} />}
        title="Intuitive Visuals"
        desc="Turning complex data into clear, actionable insights."
        iconStyles="bg-sky-900"
      />
    </section>
  );
};

export default FeaturedCardSection;
