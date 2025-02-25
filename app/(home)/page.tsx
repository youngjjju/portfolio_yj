import Section1 from "@/components/section1";

export default function Home() {
  return (
    <>
      <section
        id="section1"
        className="bg-third overflow-hidden lg:bg-white h-[1000px] w-full "
      >
        <div className="w-full  h-[100px]"></div>
        <Section1 />
      </section>
      <section
        id="section2"
        className="w-full bg-blue-100 h-[1000px]"
      ></section>
      <section
        id="section3"
        className="w-full h-[1000px] bg-blue-200"
      ></section>
      <section
        id="section4"
        className="w-full h-[1000px] bg-blue-300"
      ></section>
    </>
  );
}
