import { MotionBr, MotionH2, MotionSpan } from "../UI/Motion";
import Description from "./Description";
import Feature from "./Feature";

export default function Specifications() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0">
      <div className="bg-micro-6-specs bg-contain lg:bg-cover bg-no-repeat  w-full "></div>
      <div className="bg-white px-4 py-8 lg:px-[6.75rem]">
        <h2 className="font-caladea font-bold text-[24px] lg:text-[49px] text-primaryPurple tracking-[-0.5px] w-fit">
          <MotionSpan
            initial={{ x: "-100%",opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            transition={{ duration: 1 }}
            className="inline-block"
          >
            {" "}
            Technical Specifications
          </MotionSpan>{" "}
          <br />
          <MotionSpan
            initial={{ x: "100%",opacity:0 }}
            whileInView={{ x: 0,opacity:1 }}
            transition={{ duration: 1 }}
            className="inline-block"
          >
            of Thinvent Micro 6
          </MotionSpan>
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
