"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export const headerList: Record<string, string> = {
  자기소개: "section1",
  약력: "section2",
  프로젝트: "section3",
  //학교생활: "section4",
};

export default function Header() {
  const [sidebarIsOpen, setsidebarIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className=" fixed shadow-sm  z-50 px-3 min-[880px]:px-12 flex items-center justify-between md:justify-evenly w-full bg-white h-[70px]">
      <Link
        href={"/"}
        className="mr-8 xl:mr-40 flex items-center h-full text-third text-3xl min-[1090px]:text-4xl font-semibold"
      >
        YOUNGJU / PROGRAMMER
      </Link>

      {Object.entries(headerList).map(([key, value]) => (
        <div
          key={value}
          onClick={() => scrollToSection(value)}
          className="hoverScale hover:cursor-pointer hidden max-[980px]:w-[100px] md:flex  max-[980px]:px-0 w-auto px-3 items-center h-full text-black text-lg min-[1005px]:text-xl font-semibold"
        >
          {key}
        </div>
      ))}
      <Menu
        className=" rounded-full size-14 block md:hidden"
        onClick={() => setsidebarIsOpen(!sidebarIsOpen)}
      />
      <div
        className={`bg-second  text-xl font-semibold absolute flex flex-col top-full right-0 w-1/5 transition-transform duration-150 h-[30vh]  ${
          sidebarIsOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {Object.entries(headerList).map(([key, value]) => (
          <div
            key={value}
            className="w-full h-1/4 flex justify-center hoverScale items-center"
            onClick={() => scrollToSection(value)}
          >
            {key}
          </div>
        ))}
      </div>
    </nav>
  );
}
