import "./App.css";
import AboutCard from "@components/AboutCard";
import Projects from "@components/Projects";

import { AboutDetailsData } from "@data/about";
import { ProjectData } from "@data/projects";

function App() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-12 mb-10">
        <section className="grid lg:col-span-4 xl:col-span-3 xl:px-10">
          <AboutCard {...AboutDetailsData} />
        </section>
        <section className="projects grid gap-4 grid-cols-2 lg:col-span-8 xl:col-span-9 m-4">
          <Projects projects={ProjectData} />
        </section>
      </div>
    </>
  );
}

export default App;
