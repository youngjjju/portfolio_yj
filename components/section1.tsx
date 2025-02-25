import { Github, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";

export default function Section1() {
  return (
    <div className=" hidden overflow-hidden w-full relative h-[760px] lg:gap-16 xl:gap-32 lg:flex justify-center items-center">
      <div className="relative  shadow-lg overflow-hidden w-[512px] h-[642px] rounded-2xl ">
        <Image
          className="absolute bottom-12"
          src="/image.png"
          alt="main"
          width={512}
          height={642}
        />
        <div className="p-5 pt-[18px] flex gap-2 px-6 bottom-0 absolute w-full h-[80px] bg-white ">
          <Heart size={40} />
          <MessageCircle className="transform scale-x-[-1]" size={40} />
          <Send size={40} />
        </div>
      </div>
      <div className="flex flex-col gap-8 ">
        <p className="text-third min-[1070px]:text-6xl leading-[4rem] tracking-wide text-[52px] font-semibold">
          안녕하세요
          <br /> 개발자가 되고픈
          <br /> 김영주입니다.
        </p>
        <p className="text-black text-2xl font-semibold ">
          부족한 제 포트폴리오에
          <br /> 관심가져 주셔서 감사합니다
        </p>
        <div className="flex  ">
          <button className="w-28 flex justify-center gap-2 items-center rounded-3xl bg-white ring-black ring-2 shadow-sm text-primary h-8">
            <Github />
            Github
          </button>
        </div>
        <p className="w-[400px] xl:w-[500px] text-[#333333] text-lg z-10 font-semibold">
          늦은 나이에 성균관대에 입학하여 3학년이 되기까지 진로에 대한 고민이
          많았습니다. 프로그래머가 되야겠다고 결정하기까지 제가 거쳐왔던 과정을
          소개하도록 하겠습니다. 아직 많이 부족하지만, 노력하는 모습에
          주목해주세요!
          <br />이 포트폴리오 웹사이트는 제가 괜찮은 개발자가 되었다고 자부할 수
          있을 때까지 계속해서 업데이트할 예정입니다. 가끔씩 들러주세요! 🌈
        </p>
      </div>
      <div className="hidden xl:w-[100px]" />
      <div className="absolute flex justify-center items-center bg-second   right-12 top-0 blur-sm shadow-2xl w-10 h-[1000px] rotate-[35deg]"></div>
    </div>
  );
}
