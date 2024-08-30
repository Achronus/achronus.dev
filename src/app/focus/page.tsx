import IconArray from "@/components/IconArray";
import PageLayout from "@/components/layouts/PageLayout";
import { ContentSection } from "@/components/sections";

import { ContactIcons } from "@/constants/menu";
import { FocusHeroDetails } from "@/constants/pages";

const About = () => {
  return (
    <PageLayout details={FocusHeroDetails}>
      <div className="flex font-medium text-lg text-muted-foreground leading-relaxed justify-start items-start">
        <div className="flex flex-col flex-1">
          <ContentSection title="At a Glance">
            <p></p>
          </ContentSection>

          <ContentSection title="The Why">
            <p></p>
          </ContentSection>

          <nav className="flex text-slate-300 gap-2">
            <IconArray icons={ContactIcons} />
          </nav>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
