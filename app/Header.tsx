import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"], // 필요한 서브셋 (보통 'latin' 사용)
  weight: ["400", "700"], // 사용할 폰트 두께 지정
});

export default function Header() {
  return (
    <header className="w-full h-[120px] flex bg-white shadow-[0_5.33px_80px_0_rgba(0,0,0,0.1)]">
      <div
        className={`${gabarito.className} flex justify-left text-shadow font-semibold text-[32px]  items-center ml-[95px] w-80 h-full text-black`}
      >
        Portfolio of YOUNGJU
      </div>
    </header>
  );
}
