import "./App.css";
import AboutCard from "@components/AboutCard";
import Projects from "@components/Projects";

import { AboutDetailsData } from "@data/about";
import { ProjectData } from "@data/projects";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-12 mb-10">
        <section className="grid lg:col-span-4 xl:col-span-3 xl:px-10">
          <AboutCard {...AboutDetailsData} />
        </section>
        {windowWidth <= 1023 ? (
          <div>
            <div className="divider"></div>
            <h1 className="text-center font-medium text-lg">Projects</h1>
          </div>
        ) : (
          <></>
        )}
        <section className="projects grid gap-4 md:grid-cols-2 lg:col-span-8 xl:col-span-9 xl:m-8">
          <Projects projects={ProjectData} />
        </section>
      </div>
    </>
  );
}

export default App;
