import { Navbar } from "@/components/layouts";
import {
  FeaturedCardSection,
  Hero,
  ProjectsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero hideCTAs />
      <FeaturedCardSection />
      <main className="bg-card border-t border-t-border flex items-center justify-center my-20 lg:my-40 py-20">
        <ProjectsSection />
      </main>
    </>
  );
}
