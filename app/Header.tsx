import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <header className="w-full sticky h-[120px]">
      <div
        className={`${gabarito.className} flex justify-center text-5xl items-center w-full h-full text-black`}
        style={{ fontWeight: 510 }} // 여기서 font-weight를 직접 지정
      >
        KIM YOUNGJU&apos;S PORTFOLIO
      </div>
    </header>
  );
}
