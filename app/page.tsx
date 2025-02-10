import Image from "next/image";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <section id="item-1" class="item">
        <Header />
        <div className="flex justify-center w-full h-full">
          <div className="w-[602px] h-[787px] bg-white shadow-lg rounded-3xl">
            <div className="flex items-center w-full h-[105px] ml-7">
              <Image
                src="/nickname.png"
                width={179}
                height={67}
                alt="nickname"
              />
            </div>
            <Image src="/main.png" width={600} height={801} alt="main" />

            <div className="flex items-center pt-4 pl-7">
              <Image src="/insta.png" width={548} height={40} alt="insta" />
            </div>
          </div>
        </div>
      </section>
      <section id="item-2" class="item"></section>
      <section id="item-3" class="item"></section>
    </>
  );
}
