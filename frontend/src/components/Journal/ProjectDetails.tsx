import type { Project } from "@/types/collections";

type Props = {
  category: Project;
};

const ProjectDetails = ({ category }: Props) => {
  return (
    <div className="project-details tw-m-2">
      <div className="tw-flex tw-gap-6 tw-my-4 tw-align-middle tw-font-rubik tw-font-light tw-text-sm tw-justify-between">
        {category.timeTaken && (
          <p className="tw-text-gray-600">
            <i className="fa-regular fa-clock tw-mr-1" /> Time Taken:{" "}
            {category.timeTaken} Hrs
          </p>
        )}
        <a
          href={category.url}
          className="tw-text-blue-dark hover:tw-text-black-theme hover:tw-underline tw-transition-all"
        >
          <i className="fa-solid fa-code tw-mr-1" /> View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
