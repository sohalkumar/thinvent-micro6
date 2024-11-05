import Image from "next/image";
import { MotionBr, MotionH2, MotionSpan } from "../../UI/Motion";
import Description from "./Description";
import Feature from "./Feature";

export default function Specifications({
  image,
  deviceName,
  os,
  processor,
  memory,
  storage,
  resolution,
  ports,
  dimension,
  power,
}) {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0">
      <div>
        <Image src={image} alt={`${deviceName}'s image`} className="min-h-full" />
      </div>
      <div className="bg-white px-4 py-8 lg:px-[6.75rem]">
        <h2 className="font-caladea font-bold text-[24px] lg:text-[49px] text-primaryPurple tracking-[-0.5px] w-fit">
          <MotionSpan
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block"
          >
            {" "}
            Technical Specifications
          </MotionSpan>{" "}
          <br />
          <MotionSpan
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block"
          >
            of Thinvent {deviceName}
          </MotionSpan>
        </h2>
        <div className="border-primaryPurple border-t-[4px] mt-[24px] lg:mt-[45px] lg:mb-[1rem] w-[23%] lg:w-[30%]" />
        <div className="grid grid-cols-3 my-8">
          <Feature>
            <p>OS:</p>
          </Feature>
          <Description>
            <p>{os}</p>
          </Description>
          <Feature>
            <p>Processor:</p>
          </Feature>
          <Description className="w-[75%]">
            <p>{processor}</p>
          </Description>
          <Feature>
            <p>Memory:</p>
          </Feature>
          <Description>
            <p>{memory}</p>
          </Description>
          <Feature>
            <p>Storage:</p>
          </Feature>
          <Description>
            <p>{storage}</p>
          </Description>
          <Feature>
            <p>Resolution:</p>
          </Feature>
          <Description>
            <p>{resolution}</p>
          </Description>
          <Feature>
            <p>Ports:</p>
          </Feature>
          <Description>
            <p>{ports}</p>
          </Description>
          <Feature>
            <p>Dimension:</p>
          </Feature>
          <Description>
            <p>{dimension}</p>
          </Description>
          <Feature>
            <p>Power:</p>
          </Feature>
          <Description>
            <p>{power}</p>
          </Description>
        </div>
      </div>
    </div>
  );
}
