// 머리 굴리기 힘들어서 코드 더럽...
export default function TimeLine() {
  return (
    <div className="w-full mb-32 *:font-light justify-center flex flex-col mt-16 gap-5 items-center h-auto ">
      <div className="w-[90%] h-auto flex flex-col gap-5">
        <div className="w-full h-auto flex flex-col items-end  *:bg-fourth *:timeLineBlock">
          <div className="w-[10%] mr-[30%] h-10  ">
            논회실
            <br /> 프로젝트
          </div>

          <div className="w-[15%] relative mr-[20%] mt-2 h-10  ">
            URP 3형
            <div className="absolute flex justify-center items-center w-[90%] h-full bg-fourth right-[100%] rounded-full">
              URP 3형
              <br />
              {`(장려상)`}
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-end  *:bg-sixth *:timeLineBlock">
          <div className="w-[50%] mr-[25%] h-10  ">자유음악동아리 아망</div>

          <div className="w-[15%] relative mr-[35%] mt-2 h-10  ">
            코딩동아리
            <br /> COMMIT
            <div className="absolute flex justify-center items-center w-[90%] h-full bg-sixth right-[170%] rounded-full">
              SG MAPLE <br />
              수료
            </div>
          </div>
        </div>
        <div className="w-full h-autos *:bg-seventh *:timeLineBlock">
          <div className="w-[22%] h-10  ">
            군 복무 중 <br />
            성대 입학
          </div>
        </div>
      </div>
      <div className="relative w-[90%] h-1 mt-5  bg-seventh *:rounded-full">
        <div className="absolute  w-1 h-9 bg-seventh -top-4 left-[12%]">
          <div className="w-full h-full relative">
            <span className="absolute top-10 -left-5 whitespace-nowrap">
              2023년
            </span>
          </div>
        </div>
        <div className="absolute w-1 h-9 bg-seventh -top-4 left-[37%]">
          <div className="w-full h-full relative">
            <span className="absolute top-10 text- -left-5 whitespace-nowrap">
              2024년
            </span>
          </div>
        </div>
        <div className="absolute w-1 h-9 bg-seventh -top-4 left-[63%]">
          <div className="w-full h-full relative">
            <span className="absolute top-10 text- -left-5 whitespace-nowrap">
              2025년
            </span>
          </div>
        </div>
        <div className="absolute w-1 h-9 bg-seventh -top-4 left-[88%]">
          <div className="w-full h-full relative">
            <span className="absolute top-10 text- -left-5 whitespace-nowrap">
              2026년
            </span>
          </div>
        </div>
        <div className="absolute right-0 bottom-10 text-balck">
          <div className="flex justify-start items-center gap-1">
            <div className="w-6 h-2 bg-fourth rounded-full" />
            <span className="text-sm font-semibold">프로젝트</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="w-6 h-2 bg-sixth rounded-full" />
            <span className="text-sm font-semibold">대내외활동</span>
          </div>
        </div>
      </div>
    </div>
  );
}
