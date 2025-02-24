import Section1 from "@/components/section1";

export default function Home() {
  return (
    <>
      <div className="w-full  h-[100px]"></div>
      <section id="section1" className="bg-blue-50 w-full h-screen">
        <Section1 />
      </section>
      <section id="section2" className="w-full bg-blue-100 h-screen"></section>
      <section id="section3" className="w-full h-screen bg-blue-200"></section>
      <section id="section4" className="w-full h-screen bg-blue-300"></section>
    </>
  );
}
