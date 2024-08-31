import {
  AboutHero,
  IconCardSection,
  ProjectsSection,
} from "@/components/sections";
import TechStack from "@/components/TechStack";
import { AboutDetails, FeaturedCards } from "@/constants/about";
import { TechStackIcons, TechToolIcons } from "@/constants/menu";
import {
  DevTools,
  FullStackProjects,
  Interests,
} from "@/constants/projectSections";

export default function Home() {
  return (
    <>
      <AboutHero details={AboutDetails}>
        <TechStack leftStack={TechStackIcons} rightStack={TechToolIcons} />
      </AboutHero>
      <IconCardSection cards={FeaturedCards} />
      <main className="bg-card border-y border-y-border flex flex-col items-center justify-center mt-20 lg:mt-40 pt-20">
        <ProjectsSection
          sectionDetails={[Interests, DevTools, FullStackProjects]}
        />
      </main>
    </>
  );
}
