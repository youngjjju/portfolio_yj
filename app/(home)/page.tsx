import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-auto ">
      <div className="w-auto h-auto  flex justify-center mt-10">
        <div className="w-[600px] mr-20 mt-28 fade-in">
          <p className="text-black text-5xl font-semibold leading-[72px]">
            안녕하세요, 저는 프로그래머가
            <br /> 되고 싶은 김영주입니다.
          </p>
          <div className="w-20 bg-black h-[1px] my-10" />
          <p className="text-neutral-600 text-xl mb-14">
            저는 성균관대학교 전자전기공학부에 재학중인 김영주입니다.
            <br /> 무엇을 하고 싶은지에 대한 고민이 많았습니다. <br />
            프로그래머라는 진로를 정하기까지
            <br /> 제 고민의 흔적을 공유하고자 합니다.
          </p>
          <div className="flex gap-8 ">
            <Image
              src="/Github.png"
              alt="GitHub logo"
              width={40}
              height={40}
              layout="intrinsic"
              quality={75}
              loading="lazy"
            />
            <Image
              src="/Instagram.png"
              alt="GitHub logo"
              width={40}
              height={40}
              layout="intrinsic"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
        <Image
          className="fade-in"
          src="/main.png"
          alt="main"
          width={489}
          height={652}
        />
      </div>
    </div>
  );
}
