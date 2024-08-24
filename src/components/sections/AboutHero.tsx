"use client";

import { motion, useAnimationControls } from "framer-motion";

import { genericAnimation } from "@/constants/motion";
import { cn } from "@/lib/utils";
import { AboutDetailsType } from "@/types/details";
import Image from "next/image";

type AboutHeroProps = {
  details: AboutDetailsType;
  children: React.ReactNode;
};

const AboutHero = ({ details, children }: AboutHeroProps) => {
  const controls = useAnimationControls();

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
            <motion.h6
              className="text-slate-500 text-2xl sm:text-4xl"
              initial={genericAnimation.hide}
              animate={genericAnimation.show}
              transition={{ delay: 0.1 }}
            >
              {details.intro}
            </motion.h6>
            <motion.h1
              className="font-bold text-4xl sm:text-6xl text-slate-300"
              initial={genericAnimation.hide}
              animate={genericAnimation.show}
              transition={{ delay: 0.2 }}
            >
              {"I'm"} <span className="text-blue-500">{details.firstName}</span>{" "}
              {details.lastName},
            </motion.h1>
            <motion.p
              className="text-slate-500 text-xl max-w-[35rem]"
              initial={genericAnimation.hide}
              animate={genericAnimation.show}
              transition={{ delay: 0.3 }}
            >
              A{" "}
              <span className="text-slate-300 font-bold">{details.title}</span>{" "}
              {details.desc}
            </motion.p>
            {children}
          </section>
          <motion.section
            className="hidden lg:flex"
            initial={{
              opacity: 0,
              y: 16,
              rotate: 30,
              transformOrigin: "right center",
            }}
            animate={controls}
            transition={{
              type: "spring",
              delay: 0.4,
              bounce: 0.7,
              duration: 1,
            }}
          >
            <Image
              src={details.image}
              alt="Me"
              width={500}
              height={500}
              className="rounded-full bg-slate-900 border-none"
              onLoadingComplete={() => {
                controls.start({
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                });
              }}
              priority
            />
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
