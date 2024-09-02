import BasicHero from "@/components/BasicHero";
import IconArray from "@/components/IconArray";
import { Badge } from "@/components/ui/badge";

import { IconType } from "@/types/core";
import { BasicHeroDetails, ProjectBadge } from "@/types/details";

type PageLayoutProps = {
  details: BasicHeroDetails;
  children: React.ReactNode;
  created?: {
    logo: string;
    links: IconType[];
    badges?: ProjectBadge[];
  };
};

const PageLayout = ({ details, children, created }: PageLayoutProps) => {
  return (
    <>
      <BasicHero title={details.title} desc={details.desc} />
      {created && (
        <div className="wrapper gap-3 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex gap-3 flex-col sm:flex-row items-start justify-center">
            {created.badges &&
              created.badges.map((badge) => (
                <Badge
                  key={badge.text}
                  className="flex justify-center items-center py-1 text-slate-300 bg-blue-900 hover:bg-blue-900"
                >
                  {badge.icon}
                  {badge.text}
                </Badge>
              ))}
          </div>
          <IconArray icons={created.links} />
        </div>
      )}
      <main className="flex flex-col gap-8 wrapper py-20">
        <div className="xl:border-l xl:pl-10">{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
