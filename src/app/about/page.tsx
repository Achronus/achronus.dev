import IconArray from "@/components/IconArray";
import PageLayout from "@/components/layouts/PageLayout";
import { ContentSection } from "@/components/sections";

import { ContactIcons } from "@/constants/menu";
import { AboutHeroDetails } from "@/constants/pages";

import Image from "next/image";

const About = () => {
  return (
    <PageLayout details={AboutHeroDetails}>
      <div className="flex font-medium text-lg text-muted-foreground leading-relaxed justify-start items-start">
        <div className="flex flex-col flex-1">
          <ContentSection title="The Early Days">
            <p>
              Since I was a kid, {"I've"} always been fascinated by{" "}
              <strong className="text-slate-300">technology</strong>. But it{" "}
              {"wasn't"} until I watched the first{" "}
              <strong className="text-slate-300">Iron Man</strong> movie that I
              truly grasped its incredible possibilities. While mostly fantasy,
              the idea of having a metal suit to beat up bad guys, powered by a
              talking machine, was the 😎 thing {"I'd"} ever seen. Even now, it
              gives me 🥶!
            </p>
            <p>
              {"That's"} when it all started. After school, I went to{" "}
              <strong className="text-slate-300">college</strong> and studied{" "}
              <strong className="text-slate-300">IT</strong>. Even then, I still
              had no idea what specific career path I wanted to pursue, but I
              knew one thing for sure: it had to involve{" "}
              <strong className="text-slate-300">
                technology that benefits humanity
              </strong>{" "}
              🚀.
            </p>
            <p>
              I got lucky 🍀 and landed an apprenticeship with a small company,
              where I spent four years there, learning the ropes. I began by
              building <strong className="text-slate-300">HTML</strong> and{" "}
              <strong className="text-slate-300">CSS</strong> email creatives,
              and quickly moved on to building{" "}
              <strong className="text-slate-300">WordPress</strong> websites.
              This was my first real taste of{" "}
              <strong className="text-slate-300">programming</strong> ✨, and
              honestly, I hated it.{" "}
            </p>
            <p>
              <strong className="text-slate-300">PHP</strong> was a messy
              language, and building websites just {"didn't"} scratch the itch
              that my soul craved. I wanted to learn more and dive deeper into
              technology, but I still {"wasn't"} sure what the right path was.
              Two years in, and hit me 👊 -{" "}
              <strong className="text-slate-300">
                Artificial Intelligence
              </strong>{" "}
              🤖. A was struct by a{" "}
              <strong className="text-slate-300">bold idea</strong> 💡 -
              autonomous nanobots curing diseases from inside our bodies. It 🤯
              my mind.
            </p>
          </ContentSection>

          <ContentSection title="A New Hope">
            <p>
              That was it. The <strong className="text-slate-300">spark</strong>{" "}
              inside my soul had{" "}
              <strong className="text-slate-300">reignited</strong> 🔥 - a
              chance to truly change the world. So, I started taking{" "}
              <strong className="text-slate-300">Machine Learning</strong>{" "}
              courses on <strong className="text-slate-300">Udemy</strong> and{" "}
              <strong className="text-slate-300">Udacity</strong> in my
              spare-time.{" "}
              <strong className="text-slate-300">
                Best decision of my life.
              </strong>{" "}
              It became all I could think about, so I moved on and enrolled in a{" "}
              <strong className="text-slate-300">
                BSc in Computer Science
              </strong>{" "}
              at the{" "}
              <strong className="text-slate-300">University of Lincoln</strong>{" "}
              🎩.
            </p>
            <p>
              I 💕d the mix of{" "}
              <strong className="text-slate-300">social life</strong> and the{" "}
              <strong className="text-slate-300">freedom</strong> to work on{" "}
              <strong className="text-slate-300">tech projects</strong> that
              helped deepen my knowledge in the field. Even when assignments
              were done, I{" "}
              <strong className="text-slate-300">
                {"couldn't"} stop studying
              </strong>
              ; I was always learning something new, and I continued my journey
              with an{" "}
              <strong className="text-slate-300">
                MSc in Machine Learning
              </strong>{" "}
              at the{" "}
              <strong className="text-slate-300">University of Bath</strong> 🎓.
              It was tough, but the experience was worth it.
            </p>
            <p>
              After graduation, sadly, I{" "}
              <strong className="text-slate-300">struggled</strong> to find a
              tech job and had to make ends meet, so I started working retail
              night-shifts. I made some{" "}
              <strong className="text-slate-300">great friends</strong> 👨‍👨‍👦, but
              started to feel lost, like I {"wasn't"} living up to potential. I
              knew I needed to return to my{" "}
              <strong className="text-slate-300">true passion</strong> -
              building software that makes a{" "}
              <strong className="text-slate-300">
                positive impact on {"people's"} lives
              </strong>
              .
            </p>
          </ContentSection>

          <ContentSection title="Here and Now">
            <p>
              Which leads me to where I am{" "}
              <strong className="text-slate-300">today</strong>. A shiny ✨ new
              portfolio website,{" "}
              <strong className="text-slate-300">developing APIs</strong> and
              projects with <strong className="text-slate-300">Python</strong>,
              and an intense <strong className="text-slate-300">hunger</strong>{" "}
              🥩 to make{" "}
              <strong className="text-slate-300">
                great products for others
              </strong>
              .
            </p>
            <p>
              If {"you're"} looking for someone who likes to build{" "}
              <strong className="text-slate-300">quality products</strong> and
              leveraging{" "}
              <strong className="text-slate-300">technology for good</strong>,
              reach out and say{" "}
              <strong className="text-slate-300">hello</strong> 👋!{" "}
              <strong className="text-slate-300">
                {"I'd"} love to hear from you!
              </strong>{" "}
              🤙
            </p>
          </ContentSection>

          <nav className="flex text-slate-300 gap-2">
            <IconArray icons={ContactIcons} />
          </nav>
        </div>
        <div className="hidden lg:flex ml-8">
          <Image
            src="/me1.jpg"
            alt="Me"
            width={350}
            height={350}
            className="rounded-full bg-slate-900"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
