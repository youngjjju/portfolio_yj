import Footer from "@/components/footer";
//import Skills from "@/components/project/skills";
import Section1 from "@/components/section/section1";
import Section2 from "@/components/section/section2";
import Section3 from "@/components/section/section3";
//https://kr.pinterest.com/pin/678988081316322978/
export default function Home() {
  return (
    <>
      <section
        id="section1"
        className="relative  overflow-hidden   h-screen w-full "
      >
        <Section1 />
        <div className="w-full h-[100px] flex justify-center">
          <Footer />
        </div>
      </section>

      <section id="section2" className="w-full h-screen">
        <Section2 />
      </section>

      <section id="section3" className="  w-full h-screen">
        <Section3 />
      </section>

      {/*      <section id="section4" className="w-full h-screen">
        <Skills />
      </section>*/}
    </>
  );
}
