"use client";

import { useState } from "react";
import Chapter from "../chapter";
import Carousel from "../slide_show";
import Image from "next/image";

const slide = ["/amang.png", "/main.png", "/wordle.png"];
export default function Section3() {
  const [curr, setCurr] = useState(0);
  return (
    <div className="w-full h-full flex items-center flex-col">
      <Chapter title="프로젝트" className="mt-[6.5%]  mb-[2%]" />
      <div className="w-[71%] flex gap-5 h-full pb-10">
        <div className="w-[400px] rounded-xl h-[500px] ">
          <Carousel curr={curr} setCurr={setCurr}>
            {[...slide].map((src, i) => (
              <Image
                className="rounded-xl"
                width={400}
                height={500}
                key={i}
                src={src}
                alt="img"
              ></Image>
            ))}
          </Carousel>
        </div>
        <div
          className={`w-2/3 h-full bg-pink-50 transition-all duration-500 ${
            curr === 0 ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          이거1
        </div>
        <div
          className={`w-2/3 h-full bg-slate-50 transition-all duration-500 ${
            curr === 1 ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          이거2
        </div>
        <div
          className={`w-2/3 h-full bg-red-50 transition-all duration-500 ${
            curr === 2 ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          이거3
        </div>
      </div>
      <div></div>
    </div>
  );
}
