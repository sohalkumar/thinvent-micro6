import dotted_pattern from "@/public/graphics/dotted_pattern.svg";
import ruler from "@/public/graphics/ruler.svg";
import artboard1 from "@/public/images/Artboard1.png";
import artboard2 from "@/public/images/Artboard2.png";
import artboard3 from "@/public/images/Artboard3.png";
import Image from "next/image";

export default function Action() {
  return (
    <div className="px-4 py-8 lg:px-lg-x lg:py-[8.75rem] lg:mt-0 relative overflow-x-clip">
      <h2 className="font-caladea font-bold text-center text-[2rem] lg:text-[70px] tracking-[-0.5px]">
        Ideal for
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[3rem] lg:gap-[6rem] my-[3rem] lg:my-[6rem]">
        <div className="w-[50%]">
          <Image src={artboard1} alt="" />
        </div>
        <div className="w-[50%]">
          <Image src={artboard2} alt="" />
        </div>
        <div className="w-[50%]">
          <Image src={artboard3} alt="" />
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
