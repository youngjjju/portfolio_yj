import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <div className="w-[768px] mt-32 ml-24 h-[600px]">
        <Image
          src="/main0.jpg"
          alt="샘플 이미지"
          width="768"
          height="600"
          className=" "
        />
      </div>
      <Image
        src="/main1.jpg"
        alt="샘플 이미지"
        width="962"
        height="749"
        className="mt-14"
      />
    </div>
  );
}
