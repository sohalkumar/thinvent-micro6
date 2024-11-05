import dotted_pattern from "@/public/graphics/dotted_pattern.svg";
import ruler from "@/public/graphics/ruler.svg";
import artboard1 from "@/public/images/Artboard1.png";
import artboard2 from "@/public/images/Artboard2.png";
import artboard3 from "@/public/images/Artboard3.png";
import Image from "next/image";
import { MotionDiv } from "../UI/Motion";

export default function Action() {
  return (
    <div className="px-4 py-8 lg:px-lg-x lg:py-[8.75rem] lg:mt-0 relative overflow-x-clip">
      <h2 className="font-caladea font-bold text-center text-[2rem] lg:text-[70px] tracking-[-0.5px]">
        Ideal for
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[3rem] lg:gap-[6rem] my-[3rem] lg:my-[6rem]">
        <MotionDiv whileHover={{ scale: 1.1 }} className="w-[50%]">
          <Image src={artboard1} alt="" />
        </MotionDiv>
        <MotionDiv whileHover={{ scale: 1.1 }} className="w-[50%]">
          <Image src={artboard2} alt="" />
        </MotionDiv>
        <MotionDiv whileHover={{ scale: 1.1 }} className="w-[50%]">
          <Image src={artboard3} alt="" />
        </MotionDiv>
      </div>

      <div>
        <h1 className="text-[2rem] text-center font-caladea font-bold">
          Buy any 50 computer lab kit from Thinvent, <br />
          get{" "}
          <span className="text-primaryPurple underline">
            free shipping and installation anywhere in India
          </span>
          .
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-[5rem] text-[1.25rem] text-center font-semibold py-8">
          <div className="border-x-8 border-primaryPurple p-3 rounded-xl">
            <h4 className="text-secondaryPurple lg:text-[1.75rem]">
              Micro 6 mini PC Computer Lab Kit :{" "}
              <span className="block text-[1.5rem]">@ Rs XXX</span>
            </h4>
            <ul>
              <li>Monitor</li>
              <li>M5 - Thin client</li>
              <li>Keyboard Mouse</li>
              <li>Neo H</li>
              <li>Cables</li>
              <li>Visa Mounting</li>
            </ul>
          </div>
          <div className="border-x-8 border-secondaryPurple mt-8 md:mt-0 p-3 rounded-xl">
            <h4 className="text-primaryPurple lg:text-[1.75rem]">
              Micro 5 Pro thin client Computer Lab Kit :{" "}
              <span className="block text-[1.5rem]">@ Rs XXX</span>
            </h4>
            <ul>
              <li>Monitor</li>
              <li>M5 - Thin client</li>
              <li>Keyboard Mouse</li>
              <li>Neo H</li>
              <li>Cables</li>
              <li>Visa Mounting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* bg graphics */}
      <div className="absolute left-[-21px] lg:bottom-[-164px] lg:left-[-62px] w-[100px] lg:w-fit">
        <Image src={dotted_pattern} alt="dotted pattern vector" />
      </div>
      <div className="absolute right-[50px] lg:bottom-[-52px] lg:right-[20%] w-[100px] lg:w-fit z-[-10]">
        <Image src={ruler} alt="dotted pattern vector" />
      </div>

      <div className="absolute right-[-40%] bottom-[-15%] lg:right-[-25%] lg:bottom-[-35%] bg-[#3D5CFF] h-[347px] w-[347px] lg:h-[694px] lg:w-[694px] rounded-full opacity-15 blur-[100px] z-[-10]"></div>
    </div>
  );
}
