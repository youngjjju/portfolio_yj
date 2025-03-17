import Image from "next/image";

export const projectNameObject = {
  logicCircuitProject: {
    name: "논리회로설계 실험 : Systolic Array를 이용한 LLM 구현",
    img: "/logic_circuit.png",
    semester: "2024년 겨울학기",
  },
  amangProject: {
    name: "융합연구학점제(URP 3형): 동아리 팀모집 시스템 개발",
    img: "/urp1.png",
    semester: "2024년 2학기",
  },
  cStudy: {
    name: "중앙코딩동아리 C언어 스터디장",
    img: "/cstudy.png",
    semester: "2024년 2학기",
  },
  urp3Project: {
    name: "융합연구학점제(URP 3형): 성균융합원 홈페이지 개발",
    img: "/urp2.png",
    semester: "2025년 1학기",
  },
} as const;

type ProjectName = keyof typeof projectNameObject;
interface ProjectCardProps {
  projectName: ProjectName;
}

export default function ProjectCard({ projectName }: ProjectCardProps) {
  const project = projectNameObject[projectName];
  return (
    <div className="w-full mt-10 h-[300px] flex-col gap-5 text-black flex justify-center items-center">
      <div className="w-full h-5 flex justify-center md:justify-start text-third font-semibold">
        {project.semester}
      </div>
      <Image
        className="w-44 h-56 hoverScale object-cover"
        width={150}
        height={200}
        alt={project.name}
        src={project.img}
      />
      <div className="w-2/3 hover:underline-offset-4 hover:underline text-md font-medium text-center">
        {" "}
        {project.name}
      </div>
    </div>
  );
}
