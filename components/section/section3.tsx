"use client";

import { useState } from "react";
import Chapter from "../chapter";
import Carousel from "../slide_show";
import Image from "next/image";
import Link from "next/link";

const slide = ["/amang.png", "/skku_home.png", "/wordle.png"];
export default function Section3() {
  const [curr, setCurr] = useState(0);
  return (
    <div className="w-full h-full flex items-center flex-col">
      <Chapter title="프로젝트" className="mt-[6.5%]  mb-[2%]" />
      <div className="w-[71%] flex gap-5 h-full pb-10">
        <div className="w-[400px] pt-16 rounded-xl h-[500px] ">
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
        <div className={`w-2/3 h-full   transition-all p-12 duration-500 `}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2">📌 첫번째 프로젝트</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>동아리 합주 모집 플랫폼 개발</strong> (2024년 8월 ~ 진행
                중)
              </li>
              <li>
                처음 프론트엔드 개발에 뛰어든 프로젝트지만 가장 큰 프로젝트
              </li>
              <li>
                <Link href="https://amang.vercel.app/">
                  https://amang.vercel.app/
                </Link>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2">📌 두번째 프로젝트</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>성균융합원 URP 팀 모집 플랫폼 개발</strong> (2025년 2월
                ~ 진행 중)
              </li>
              <li>
                성균융합원 측의 제안으로 시작한 프로젝트로 URP 3형 활성화를 위한
                페이지 제작 중
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2">📌 세번째 프로젝트</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>WORDLE 게임 기능 개발</strong> (2025년 3월)
              </li>
              <li>WORDLE 게임의 기능을 구현한 개인 토이 프로젝트</li>
              <li>
                <Link href="https://wordle-yj.vercel.app/">
                  https://wordle-yj.vercel.app/
                </Link>
              </li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2">📌 생각해 본 프로젝트</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>
                  아직 구체적인 내용은 없어서, 같이 생각해보면 좋을 거
                  같습니다ㅠㅠ
                </strong>
              </li>
              <li>
                저는 사용자 UI/UX가 있는 웹 활용 플랫폼이나, 간단한 서버 구축에
                힘을 보탤 수 있습니다.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div></div>
    </div>
  );
}
