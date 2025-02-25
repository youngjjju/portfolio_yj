import ProjectCard from "./project_card";
import { projectNameObject } from "./project_card";

export default function ProjectList() {
  return (
    <>
      <div className="mt-28 md:mt-32 flex gap-7 w-full h-10 items-center justify-center">
        <span className="sm:text-xl text-lg font-semibold">
          프로젝트 / 스터디
        </span>
        <div className="w-1/2 sm:w-7/12  h-1 bg-second"></div>
      </div>
      <div className="mb-24 w-[70%] xl:w-[65%] h-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Object.keys(projectNameObject).map((projectName) => (
          <ProjectCard
            key={projectName}
            projectName={projectName as keyof typeof projectNameObject}
          />
        ))}
      </div>
    </>
  );
}
