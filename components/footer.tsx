import { Mail, MessageCircleCodeIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className=" w-full text-white gap-12 flex justify-end items-center absolute bottom-0 max-lg:hidden  h-[100px] z-20 bg-third">
      <div className=" absolute leading-6 left-5 text-lg font-extralight">
        Sungkyunkwan University,
        <br />
        School of Electronic and Electrical Engineering,
        <br />
        YOUNGJU KIM
      </div>
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <span>Email</span>
        </div>
        <span className="font-extralight">2000dudwn@naver.com</span>
      </div>
      <div className="mr-10 flex items-center flex-col">
        <div className="flex items-center gap-2">
          <MessageCircleCodeIcon size={20} />
          <span>Kakaotalk</span>
        </div>
        <span className="font-extralight">2000dudwn</span>
      </div>
    </div>
  );
}
