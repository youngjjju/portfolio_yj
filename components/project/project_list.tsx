import Chapter from "../chapter";
import ProjectCard from "./project_card";
import { projectNameObject } from "./project_card";

export default function ProjectList() {
  return (
    <>
      <Chapter title="프로젝트 / 스터디" className="mt-28 md:mt-32" />
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
