type HeaderProps = {
  caption: string;
  title: string;
  desc: string;
};

const Header = ({ caption, title, desc }: HeaderProps) => {
  return (
    <div className="wrapper">
      <h2 className="mb-2 block font-black lg:mb-4 text-blue-500">{caption}</h2>
      <h1 className="mb-4 text-3xl font-black text-slate-300 lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-lg text-slate-400">{desc}</p>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div id="projects" className="flex flex-col">
      <section id="dev-tools" className="mb-40">
        <Header
          caption="Build Faster"
          title="Simple, Consistent, Development Tools."
          desc="Empowering development with intuitive tools."
        />
      </section>
      <section id="full-stack" className="mb-40">
        <Header
          caption="Complete Builds"
          title="End-to-End Solutions with Elegant Execution."
          desc="Complete, cohesive applications with a refined touch."
        />
      </section>
    </div>
  );
};

export default ProjectsSection;
