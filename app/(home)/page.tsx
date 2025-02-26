import Footer from "@/components/footer";
import Section1 from "@/components/section/section1";
import Section2 from "@/components/section/section2";
import Section3 from "@/components/section/section3";

export default function Home() {
  return (
    <>
      <section
        id="section1"
        className="relative  overflow-hidden   h-[960px] w-full "
      >
        <div className="w-full  h-[100px]"></div>
        <Section1 />
        <div className="w-full h-[100px] flex justify-center">
          <Footer />
        </div>
      </section>

      <section id="section2" className="w-full h-[1000px]">
        <Section2 />
      </section>

      <section id="section3" className="  w-full h-auto">
        <Section3 />
      </section>
      <section id="section4" className="w-full h-[1000px]"></section>
    </>
  );
}
