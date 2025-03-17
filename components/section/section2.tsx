import Chapter from "../chapter";

import Introduction from "../introduction";

import TimeLine from "../timeline";

export default function Section2() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Chapter title="약력" className="mt-[6.5%] mb-[3%]" />

      <Introduction />
      <TimeLine />
    </div>
  );
}
