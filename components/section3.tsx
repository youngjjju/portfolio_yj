import ProjectList from "./project_list";
import Skills from "./skills";

export default function section3() {
  return (
    <>
      <div className="w-full h-full flex flex-col  items-center ">
        <ProjectList />
        <Skills />
      </div>
    </>
  );
}
