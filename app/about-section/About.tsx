
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "ABOUT"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "SMT TRAVELS AND TOURS (PVT) LIMITED, is a licensed recruitment company under the Sri Lanka Bureau of Foreign Employment as (License No: 3118)."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "SMT Travels and Tours has committed professional teams with industry-specific specializations to guarantee that the proper expertise is sourced to meet the needs of our clients. Every team is led by a seasoned expert with extensive experience. We source applicants for our multinational clients, the majority of whom are stationed in Romania and the Middle East.  "
              }
            />
            <AnimatedBody
              text={
                "We work closely with our clients to assist them in becoming high-performance establishments by conducting in-depth research on labor market trends across various geographic areas. We view every hiring project as distinct."
              }
            />
            <AnimatedBody
              text={
                " Our core values—Respect, Diversity, Empowerment, Teamwork, and Community—allow us to concentrate on a number of areas that will contribute to the advancement of society as a whole as well as ourselves."
              }
            />
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default About;
