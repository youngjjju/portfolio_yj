import Chapter from "../chapter";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Introduction from "../introduction";

import TimeLine from "../timeline";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Section2() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Chapter title="약력" className="mt-32" />

      <div className="w-[1200px] mt-8 flex opacity-90 justify-center gap-5  h-[400px] *:h-[90%] *:hover:cursor-pointer">
        <div className="w-1/2 justify-center relative gap-5  items-center group flex flex-col group text-white hover:w-full transition-all duration-500 h-1/2 bg-fourth"></div>
        <div className="w-1/2 justify-center gap-10 items-center group flex flex-col  text-white hover:w-full transition-all duration-500 h-1/2 bg-seventh"></div>

        <div className="w-1/2 justify-center gap-10 items-center group flex flex-col  text-white hover:w-full transition-all duration-500 h-1/2 bg-second"></div>
        <div className="w-1/2 justify-center gap-10 items-center group flex flex-col  text-white hover:w-full transition-all duration-500 h-1/2 bg-sixth"></div>
      </div>

      <Introduction />
      <div className="flex w-full justify-center gap-10">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className="w-1/5 h-14 ring-2 rounded-3xl mt-5 ring-black hover:scale-110 transition-all duration-500 text-seventh z-10 text-2xl font-bold border-0"
              variant="outline"
            >
              타임라인
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <div className="w-full h-auto text-3xl text-start ml-[5%] font-semibold">
              타임라인 in SKKU
            </div>
            <TimeLine />
          </DrawerContent>
        </Drawer>
        <Link
          href="/"
          className="w-1/5 h-14 ring-2 rounded-3xl mt-5 flex items-center justify-center ring-black hover:scale-110 transition-all duration-500 text-seventh z-10 text-2xl font-bold border-0"
        >
          이력서 보러가기
        </Link>
      </div>
    </div>
  );
}
