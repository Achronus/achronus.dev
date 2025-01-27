import type { Project } from "@/types/common";

type Props = {
  category: Project;
};

const ProjectDescription = ({ category }: Props) => {
  return (
    <p className="project-desc tw-font-rubik tw-font-light tw-m-2 tw-mt-4 tw-rounded tw-border tw-p-4 tw-text-sm tw-text-black-theme tw-border-torquoise-fade tw-bg-torquoise-fade">
      <a
        href={category.url}
        className="tw-font-dm-mono tw-font-semibold tw-text-blue-dark hover:tw-text-black-theme tw-transition-colors"
      >
        {category.title}
      </a>{" "}
      {category.description}
    </p>
  );
};

export default ProjectDescription;
