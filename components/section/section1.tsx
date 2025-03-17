import { Github, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <div className=" hidden overflow-hidden w-full relative  h-full lg:gap-16 xl:gap-32 lg:flex justify-center items-center">
      <div className="relative  shadow-lg  overflow-hidden w-[512px] h-[642px] rounded-2xl ">
        <Image
          className="absolute bottom-12"
          src="/main.png"
          alt="main"
          width={512}
          height={642}
        />
        <div className="p-5 pt-[18px]  flex gap-2 px-6 bottom-0 absolute w-full h-[80px] bg-white ">
          <Heart size={40} />
          <MessageCircle className="transform scale-x-[-1]" size={40} />
          <Send size={40} />
        </div>
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="text-third  min-[1070px]:text-6xl  tracking-wide text-[50px] font-semibold">
          <div className="min-[1070px]:mb-3">안녕하세요</div>
          <div className="min-[1070px]:mb-3">개발자가 되고픈</div>
          <div>김영주입니다</div>
        </div>
        <p className="text-black text-2xl font-semibold ">
          제 포트폴리오에
          <br /> 관심가져 주셔서 감사합니다
        </p>
        <div className="flex  ">
          <Link
            href={"https://github.com/youngjjju"}
            className="w-28 hoverScale flex justify-center gap-2 items-center rounded-3xl bg-white ring-black ring-2 shadow-sm text-primary h-8"
          >
            <Github />
            Github
          </Link>
        </div>
        <p className="w-[420px] xl:w-[500px] text-third text-lg z-10 font-semibold">
          늦은 나이에 성균관대에 입학하여 3학년이 되기까지 <br /> 진로에 대한
          고민이 많았습니다. 프로그래머가 되야겠다고
          <br /> 결정하기까지 제가 거쳐왔던 과정을 소개하도록 하겠습니다.
          <br /> 아직 많이 부족하지만, 노력하는 모습에 주목해주세요!
        </p>
      </div>
      <div className="hidden xl:w-[100px]" />
      {/* <div className="absolute flex justify-center items-center bg-second   right-12 top-0 blur-sm shadow-2xl w-10 h-[1000px] rotate-[35deg]"></div>
       */}
    </div>
  );
}
