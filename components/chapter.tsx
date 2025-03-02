interface ChapterProps {
  title: string;
  className?: string;
}

export default function Chapter({ title, className }: ChapterProps) {
  return (
    <div
      className={`flex gap-7 mb-5 w-full h-10 items-center justify-center ${
        className ?? ""
      }`}
    >
      <span className="sm:text-3xl text-lg font-semibold text-third">
        {title}
      </span>
      <div className="w-1/2 sm:w-7/12 h-1 bg-second"></div>
    </div>
  );
}
