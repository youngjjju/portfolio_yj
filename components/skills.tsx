import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className="flex gap-7 w-full h-10 items-center justify-center">
        <span className="sm:text-xl text-lg font-semibold text-third">
          다뤄본 스택들
        </span>
        <div className="w-1/2 sm:w-7/12  h-1 bg-second"></div>
      </div>
      <div className="mt-16 mb-32 w-full gap-10 max-lg:flex-col flex items-center justify-center">
        <Image
          src="/stacks.png"
          className="w-1/3 max-lg:w-2/3"
          width={600}
          height={600}
          alt="stacks"
        />
        <div className="max-lg:w-2/3 w-1/3 text-md font-medium leading-8 text-third indent-4">
          <p>
            웹 개발부터 회로설계 언어까지 다양한 기술을 활용해왔습니다. HTML,
            CSS, JavaScript, React, Next.js, TypeScript로 직관적이고 반응형 UI를
            구현하고, Tailwind CSS로 스타일링을 빠르고 일관성 있게 처리했습니다.
          </p>
          <p>
            백엔드에서는 Django로 REST API를 구축하며 데이터베이스 연동과
            비즈니스 로직을 처리했으며, Node.js로 비동기 처리를 최적화했습니다.
          </p>
          <p>
            또한 C와 Verilog를 사용해 저수준 프로그래밍과 하드웨어 제어 경험을
            쌓았고, Git과 Github로 체계적인 버전 관리와 협업을 진행했습니다.
          </p>
        </div>
      </div>
    </>
  );
}
