import Image from "next/image";
import Link from "next/link";

const projectNameObject = {
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
  urp3Project: {
    name: "융합연구학점제(URP 3형): 성균융합원 홈페이지 개발",
    img: "/urp2.png",
    semester: "2025년 1학기",
  },
} as const; // `as const`를 사용하여 문자열 리터럴 타입을 보장

type ProjectName = keyof typeof projectNameObject; // "logicCircuitProject" | "amangProject" | "urp3Project" 타입을 가져옴

interface ProjectCardProps {
  projectName: ProjectName;
}

export default function ProjectCard({ projectName }: ProjectCardProps) {
  const project = projectNameObject[projectName];
  return (
    <Link
      href={`/project/${projectName}`}
      className="w-full mt-10 h-[300px] flex-col gap-5 text-black flex justify-center items-center"
    >
      <div className="w-full h-5 flex justify-start text-third font-semibold">
        {project.semester}
      </div>
      <Image
        className="w-44 h-56 object-cover"
        width={150} // Next.js 최적화를 위해 width, height 유지
        height={200}
        alt={project.name}
        src={project.img}
      />
      <div className="w-2/3"> {project.name}</div>
    </Link>
  );
}
