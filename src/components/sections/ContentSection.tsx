type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section className="flex flex-col gap-6 xl:mt-2 mb-8">
      <h1 className="text-slate-300 text-4xl font-extrabold">{title}</h1>
      {children}
    </section>
  );
};

export default ContentSection;
