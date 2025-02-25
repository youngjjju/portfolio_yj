export default function Section1() {
  return (
    <div className=" hidden overflow-x-visible w-full relative h-[800px] lg:gap-16 xl:gap-32 lg:flex justify-center items-center">
      <div className="relative  shadow-lg overflow-hidden w-[512px] h-[642px] rounded-3xl bg-second">
        <div className=" bottom-0 absolute w-full h-[80px] bg-white "></div>
      </div>
      <div className="flex flex-col gap-8 ">
        <p className="text-primary text-6xl font-semibold">
          HELLO
          <br /> EVERYONE
        </p>
        <p className="text-black text-2xl font-semibold">{`Here's Who I am & What I do`}</p>
        <div className="flex gap-4 ">
          <button className="w-28 rounded-3xl shadow-md bg-black text-white h-8">
            Resume
          </button>
          <button className="w-28 rounded-3xl bg-white ring-black ring-2 shadow-sm text-primary h-8">
            Projects
          </button>
        </div>
        <p className="w-[400px] xl:w-[500px] text-black text-lg z-10 font-semibold">
          The About Me or Profile section of your portfolio, is a short summary
          about yourself in relation to the type of role you are applying for.
          In the sample portfolio, the student has highlighted their program,
          the projects they ve worked on and their specific area of interest in
          their field. Im a great place for you to tell a story and let your
          users know a little more about you.
        </p>
      </div>
      <div className="hidden xl:w-[100px]" />
      <div className="absolute bg-second   right-0 top-0 blur-sm shadow-2xl w-10 h-[1000px] rotate-[35deg]">
        {" "}
      </div>
    </div>
  );
}
