import BasicHero from "@/components/BasicHero";
import { BasicHeroDetails } from "@/types/details";

type PageLayoutProps = {
  details: BasicHeroDetails;
  children: React.ReactNode;
};

const PageLayout = ({ details, children }: PageLayoutProps) => {
  return (
    <>
      <BasicHero title={details.title} desc={details.desc} />
      <main className="flex flex-col gap-8 wrapper py-20">
        <div className="xl:border-l xl:pl-10">{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
