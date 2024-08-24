import {
  AboutHero,
  FeaturedCardSection,
  ProjectsSection,
} from "@/components/sections";
import TechStack from "@/components/TechStack";
import { AboutDetails, FeaturedCards } from "@/constants/about";
import { TechStackIcons, TechToolIcons } from "@/constants/menu";
import { DevTools, FullStackProjects } from "@/constants/projectSections";

export default function Home() {
  return (
    <>
      <AboutHero details={AboutDetails}>
        <TechStack leftStack={TechStackIcons} rightStack={TechToolIcons} />
      </AboutHero>
      <FeaturedCardSection cardDetailsList={FeaturedCards} />
      <main className="bg-card border-y border-y-border flex items-center justify-center my-20 lg:my-40 py-20">
        <ProjectsSection sectionDetails={[DevTools, FullStackProjects]} />
      </main>
    </>
  );
}
