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
      <main className="wrapper mt-20 py-20">{children}</main>
    </>
  );
};

export default PageLayout;
