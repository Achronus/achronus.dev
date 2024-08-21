import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <>
      <div
        className={cn(
          "before:absolute before:inset-0 before:w-full before:h-full before:bg-grid-top before:z-[-1]",
          "flex flex-col w-full justify-center items-center"
        )}
      >
        <div className={cn("flex pt-36 z-10", "lg:pt-40 lg:mx-auto")}>
          <section className="flex flex-col gap-6 justify-center px-6 lg:mr-14">
            <h6 className="text-slate-500 text-2xl sm:text-4xl">Hi! 👋</h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-slate-300">
              {"I'm"} <span className="text-blue-500">Ryan</span> Partridge,
            </h1>
            <p className="text-slate-500 text-xl">
              A{" "}
              <span className="text-slate-300 font-bold">
                Software Developer
              </span>{" "}
              passionate about API{" "}
              <span className="lg:block">
                development and data visualisation.
              </span>
            </p>

            <div className="flex">
              <Link href="/work/contact">
                <Button className="bg-blue-800 text-slate-300 font-bold rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  Get In Touch
                </Button>
              </Link>
              <Link href="#">
                <Button
                  variant="link"
                  className="flex gap-2 text-slate-300 hover:no-underline hover:text-primary"
                >
                  <FileText size={24} />
                  RESUME
                </Button>
              </Link>
            </div>
            <TechStack />
          </section>
          <section className="hidden lg:flex">
            <Image
              src="/me-vector.svg"
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

export default Hero;
