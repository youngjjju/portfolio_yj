import Chapter from "../chapter";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Introduction from "../introduction";

import TimeLine from "../timeline";
import { Button } from "../ui/button";

export default function Section2() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Chapter title="약력" className="mt-32" />
      <Introduction />

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">타임라인</Button>
        </DrawerTrigger>
        <DrawerContent className="bg-white">
          <div className="w-full h-auto text-3xl text-start ml-[5%] font-semibold">
            타임라인 in SKKU
          </div>
          <TimeLine />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
