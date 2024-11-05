import Image from "next/image";
import { MotionDiv } from "../../UI/Motion";
import micro5_intro from "@/public/images/micro5/micro-5.webp";

export default function Micro5Intro() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="lg:grid lg:grid-cols-2">
        <div className="col-auto px-4 py-[2.75rem] lg:ps-[20%]">
          <h3 className="font-caladea font-bold text-[25px] lg:text-[49px] tracking-[-0.5px]">
            Say hello to
          </h3>
          <h2 className="font-bold text-[59px] lg:text-[118px] tracking-[-0.5px]">
            Micro 5
          </h2>
          <p className="lg:text-[29px]">
            This <span className="text-primaryPurple">thin client</span> is
            another palm-sized wonder perfect for any kind of computer labs. Our
            team has carefully designed Micro 5 to be{" "}
            <span className="text-primaryPurple">
              highly beneficial to education sector
            </span>{" "}
            in many ways.
          </p>
        </div>
        <div className="col-auto">
          <Image
            src={micro5_intro}
            alt="Micro 5 Image"
            className="min-h-[100%]"
          />
        </div>
      </div>
    </MotionDiv>
  );
}
