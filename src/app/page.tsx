import {
  AboutHero,
  FeaturedCardSection,
  ProjectsSection,
} from "@/components/sections";
import { AboutDetails, FeaturedCards } from "@/constants/about";

export default function Home() {
  return (
    <>
      <AboutHero details={AboutDetails} />
      <FeaturedCardSection cardDetailsList={FeaturedCards} />
      <main className="bg-card border-y border-y-border flex items-center justify-center my-20 lg:my-40 py-20">
        <ProjectsSection />
      </main>
    </>
  );
}
