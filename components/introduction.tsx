export default function Introduction() {
  return (
    <div className="w-[71%] flex">
      <div className="w-1/2 h-full   rounded-lg ">
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">📌 학력</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>성균관대학교 전자전기공학부 3학년</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">📌 융합연구학점제</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>융합연구학점제(URP 3형) 1회 참여</li>
            <li>2회차 현재 진행 중 (이번 학기, 두 차례 모두 WEB 개발)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">📌 동아리 및 활동</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>아망</strong>: 정보통신대학 소속 밴드동아리 (2023년 2학기
              ~ 2024년 2학기)
            </li>
            <li>
              <strong>Commit</strong>: 중앙 코딩동아리 스터디장 (2024년 2학기)
            </li>
          </ul>
        </section>
      </div>
      <div className="w-1/2 h-full  rounded-lg ">
        {" "}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">📌대내외활동</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>교환학생 버디 프로그램 SG MAPLE </li>
            <li>융합연구학점제 장려상 수상</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
