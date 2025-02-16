import Link from "next/link";
export const headerList: Record<string, string> = {
  소개: "introduce",
  프로젝트: "project",
  "교과/비교과": "curricular",
  학교생활: "school-life",
};
export default function Header() {
  return (
    <nav className=" flex items-center justify-center w-full h-40">
      <Link
        href={"/"}
        className="pr-5  mr-80 flex items-center h-full text-black text-4xl font-semibold"
      >
        YOUNGJU
      </Link>
      {Object.entries(headerList).map(([key, value]) => (
        <Link
          href={`/${value}`}
          key={value}
          className="flex px-10 items-center h-full text-black text-xl font-semibold"
        >
          {key}
        </Link>
      ))}
      <div className="w-11"></div>
    </nav>
  );
}
