import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        {/* <div className="grid gap-4 lg:grid-cols-12 mb-10">
        <section className="grid lg:col-span-4 xl:col-span-3 xl:px-10">
          <AboutCard {...AboutDetailsData} />
        </section>

        <section className="lg:hidden">
          <div className="divider"></div>
          <h1 className="text-center font-medium text-2xl">Projects</h1>
        </section>

        <section className="projects grid gap-4 md:grid-cols-2 lg:col-span-8 xl:col-span-9 xl:m-8">
          <div className="col-span-full">
            <h1 className="font-semibold mb-4 text-lg text-center lg:text-3xl lg:text-left">
              Development Tools
            </h1>
          </div>
          <Projects projects={DevTools} />

          <div className="col-span-full">
            <h1 className="font-semibold mt-8 mb-4 text-lg text-center lg:text-3xl lg:text-left">
              Full-stack Projects
            </h1>
          </div>
          <Projects projects={WebProjects} />
        </section>
      </div> */}
      </main>
    </>
  );
}
