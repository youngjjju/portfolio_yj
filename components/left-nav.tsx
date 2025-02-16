import { headerList } from "./header";
export default function Left_nav({ className }: { className?: string }) {
  return (
    <div className={`w-[95px] h-[352px] bg-[rgb(224,0,49)] ${className}`}>
      {Object.entries(headerList).map(([key, value]) => (
        <div
          key={value}
          className="w-full text-white flex justify-center items-center text-lg font-semibold h-[84px]"
        >
          {key}
        </div>
      ))}
    </div>
  );
}
