import TechStack from "@/components/TechStack";

import { cn } from "@/lib/utils";
import { AboutDetailsType } from "@/types/details";
import Image from "next/image";

type AboutHeroProps = {
  details: AboutDetailsType;
};

const AboutHero = ({ details }: AboutHeroProps) => {
  return (
    <>
      <div
        className={cn(
          "before:absolute before:inset-0 before:w-full before:h-full before:bg-grid-top before:z-[-1]",
          "flex flex-col w-full justify-center items-center"
        )}
      >
        <div className={cn("flex pt-32 z-10", "lg:mx-auto")}>
          <section className="flex flex-col gap-6 justify-center px-6 lg:mr-14">
            <h6 className="text-slate-500 text-2xl sm:text-4xl">
              {details.intro}
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-slate-300">
              {"I'm"} <span className="text-blue-500">{details.firstName}</span>{" "}
              {details.lastName},
            </h1>
            <p className="text-slate-500 text-xl max-w-[35rem]">
              A{" "}
              <span className="text-slate-300 font-bold">{details.title}</span>{" "}
              {details.desc}
            </p>

            <TechStack />
          </section>
          <section className="hidden lg:flex">
            <Image
              src={details.image}
              alt="Me"
              width={500}
              height={500}
              className="rounded-full bg-slate-900 border-none"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
