import { MotionDiv } from "../UI/Motion";

export default function Intro() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-micro-6-intro bg-cover bg-no-repeat lg:bg-cover px-4 py-[2.75rem] lg:px-lg-x lg:py-[16rem] w-screen"
    >
      <div className="text-start lg:text-center w-fit lg:w-[50%]">
        <h3 className="font-caladea font-bold text-[25px] lg:text-[49px] tracking-[-0.5px]">
          Introducing
        </h3>
        <h2 className="font-bold text-[59px] lg:text-[118px] tracking-[-0.5px]">
          Micro 6
        </h2>
        <p className="lg:text-[29px]">
          An <span className="text-primaryPurple">affordable</span> mini PC
          which <br className="lg:hidden" /> delivers{" "}
          <span className="text-primaryPurple">high performance</span> even on
          <br className="lg:hhidden" />
          <span className="text-primaryPurple">low power</span>
        </p>
      </div>
    </MotionDiv>
  );
}
