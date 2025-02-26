import ProjectCard, { projectNameObject } from "../project/project_card";
import Skills from "../project/skills";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import Chapter from "../chapter";
export default function section3() {
  return (
    <>
      <Chapter title="프로젝트" className="mt-32" />
      <div className="w-full h-full flex flex-col  items-center ">
        <Drawer>
          <DrawerTrigger asChild>
            <>
              <div className="mb-24 w-[70%] xl:w-[65%] h-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {Object.keys(projectNameObject).map((projectName) => (
                  <ProjectCard
                    key={projectName}
                    projectName={projectName as keyof typeof projectNameObject}
                  />
                ))}
              </div>
            </>
          </DrawerTrigger>
          <DrawerContent className="bg-white"></DrawerContent>
        </Drawer>
        <Skills />
      </div>
    </>
  );
}
