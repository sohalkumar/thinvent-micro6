import miro_6_specs from "@/public/images/micro_6_specs.png";
import Image from "next/image";
import Description from "./Description";
import Feature from "./Feature";

export default function Specifications() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0">
      <div className="bg-micro-6-specs bg-contain lg:bg-cover bg-no-repeat  w-full ">
        {/* <Image src={miro_6_specs} alt="Micro 6 image" /> */}
      </div>
      <div className="bg-white px-4 py-8 lg:px-[6.75rem]">
        <h2 className="font-caladea font-bold text-[24px] lg:text-[49px] text-primaryPurple tracking-[-0.5px] w-fit">
          Technical Specifications <br />
          of Thinvent Micro 6
        </h2>
        <div className="border-primaryPurple border-t-[4px] mt-[24px] lg:mt-[45px] lg:mb-[1rem] w-[23%] lg:w-[30%]" />
        <div className="grid grid-cols-3 my-8">
          <Feature>
            <p>OS:</p>
          </Feature>
          <Description>
            <p>Thinux Embedded Linux</p>
          </Description>
          <Feature>
            <p>Processor:</p>
          </Feature>
          <Description className="w-[75%]">
            <p>ARM 1.91 GHz Quad Core Cortex A55</p>
          </Description>
          <Feature>
            <p>Memory:</p>
          </Feature>
          <Description>
            <p>4 GB DDR3 RAM @1066MHz</p>
          </Description>
          <Feature>
            <p>Storage:</p>
          </Feature>
          <Description>
            <p>64GB eMMC Flash</p>
          </Description>
          <Feature>
            <p>Resolution:</p>
          </Feature>
          <Description>
            <p>4K (3840×2160)</p>
          </Description>
          <Feature>
            <p>Ports:</p>
          </Feature>
          <Description>
            <p>HDMI, Ethernet, USB</p>
          </Description>
          <Feature>
            <p>Dimension:</p>
          </Feature>
          <Description>
            <p>10.2 x 10.2 x 2.0 cm</p>
          </Description>
          <Feature>
            <p>Power:</p>
          </Feature>
          <Description>
            <p>5V 2A</p>
          </Description>
        </div>
      </div>
    </div>
  );
}
