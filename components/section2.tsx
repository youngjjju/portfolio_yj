import ProjectCard from "./project_card";

const projectObject = ["logicCircuitProject", "amangProject", "urp3Project"];

export default function Section2() {
  return (
    <div className="w-full h-full flex flex-col  items-center bg-yellow-50">
      <div className="mt-32 flex gap-7 w-full h-10 items-center justify-center">
        <span className="text-xl font-semibold">프로젝트 활동</span>
        <div className="w-7/12  h-1 bg-black"></div>
      </div>
      <div className="w-[60%] h-auto grid grid-cols-4">
        {projectObject.map((projectName, id) => (
          <ProjectCard key={id} projectName={projectName} />
        ))}
      </div>
    </div>
  );
}
