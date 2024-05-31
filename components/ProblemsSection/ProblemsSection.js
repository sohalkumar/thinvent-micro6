import bulb from "@/public/graphics/bulb.svg";
import dotted_pattern from "@/public/graphics/dotted_pattern.svg";
import particle from "@/public/graphics/particle.svg";
import pencil from "@/public/graphics/pencil.svg";
import Image from "next/image";

export default function ProblemsSection() {
  return (
    <div className="relative px-4 py-8 lg:px-lg-x lg:py-[3.75rem] overflow-x-clip">
      <div className="border-[3px] border-primaryPurple rounded-[2rem] text-center py-[3.5rem]">
        <h3 className="font-medium text-[21.5px] lg:text-[43px] tracking-[-0.5px]">
          <span className="text-primaryPurple font-bold">Problems</span> in the
          Education Sector
        </h3>
        <div className="flex flex-col lg:flex-row justify-around align-middle gap-10 my-10 lg:mt-[75px] lg:mb-[99px]">
          <div>
            <h2 className="font-caladea font-bold text-primaryPurple text-[2.25rem] lg:text-[5.5rem] tracking-[-0.5px]">
              66%
            </h2>
            <p className="lg:text-[30px]">
              Schools lack
              <span className="font-inter font-bold block">
                Internet Access
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-caladea font-bold text-primaryPurple text-[2.25rem] lg:text-[5.5rem] tracking-[-0.5px]">
              &gt;50%
            </h2>
            <p className="lg:text-[30px]">
              Schools have
              <span className="font-inter font-bold block">
                functional Computers
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-caladea font-bold text-primaryPurple text-[2.25rem] lg:text-[5.5rem] tracking-[-0.5px]">
              16%
            </h2>
            <p className="lg:text-[30px]">
              Schools have functional
              <span className="font-inter font-bold block">
                Smart Classroom
              </span>
            </p>
          </div>
        </div>
        <p className="lg:text-[22px] mx-auto">
          Computers are no longer just required to pick up IT skills, but to
          accomplish any kind <br />
          of learning at the school and college level. They are an essential
          tool when it comes <br /> to{" "}
          <span className="font-bold">
            research, collaboration and content creation.
          </span>
        </p>
      </div>
      {/* source info */}
      <div className="flex">
        <div className="hidden lg:inline-block lg:border-primaryPurple lg:border-r-[3px] lg:h-[222px] w-[50%]"></div>
        <div className="text-primaryPurple text-center mx-auto lg:mx-0 lg:ms-auto lg:text-right pt-[28px] lg:pr-6">
          <p>Source: 2021-22 UDISE+ report by the Ministry of Education</p>
        </div>
      </div>

      {/* bg graphics */}
      <div>
        <div className="absolute left-[-40%] lg:top-[750px] lg:left-[-25%] bg-[#3D5CFF] h-[347px] w-[347px] lg:h-[694px] lg:w-[694px] rounded-full opacity-15 blur-[100px]"></div>
        <div className="absolute top-[825px] left-0 lg:top-[750px] lg:left-[75px] w-[82px] lg:w-fit">
          <Image src={particle} alt="particle vector" />
        </div>

        <div className="absolute left-[320px] top-[590px] lg:left-[80%] lg:top-[375px] bg-[#3D5CFF] h-[347px] w-[347px] lg:h-[694px] lg:w-[694px] rounded-full opacity-15 blur-[100px]"></div>
        <div className="absolute top-[850px] right-3 lg:top-[850px] lg:right-[9.75rem] w-[65px] lg:w-fit">
          <Image src={bulb} alt="bulb vector" />
        </div>
      </div>

      {/* solutions provided by thinvent */}
      <div className="text-center my-[8rem] lg:mt-[3.75rem] lg:mb-[16rem]">
        <h2 className="font-caladea font-bold text-[35px] lg:text-[70px] tracking-[-0.5px]">
          Thinvent is at the forefront <br />
          to <span className="text-primaryPurple">transform education</span> in
          India
        </h2>
        <p className="lg:text-[22px] mt-[25px] lg:mt-[50px]">
          We have played a crucial role in advancing the{" "}
          <span className="text-primaryPurple font-bold">
            Digital Literacy Mission
          </span>{" "}
          in India by supplying
          <br className="hidden lg:block" /> hundreds of school labs with
          Thinvent computers. These computers are designed to be{" "}
          <br className="hidden lg:block" />
          affordable, enabling schools to set up more systems within their
          budget constraints.
        </p>
      </div>

      {/* bottom graphics */}
      <div>
        <div className="absolute bottom-[-34px] left-[3rem] lg:bottom-[-156px] lg:left-[15rem] w-[100px] lg:w-fit">
          <Image src={dotted_pattern} alt="dotted pattern vector" />
        </div>
        <div className="absolute bottom-[75px] left-[10rem] lg:bottom-[147px] lg:left-[33.5rem] w-[38px] lg:w-fit">
          <Image src={pencil} alt="pencil vector" />
        </div>
      </div>
    </div>
  );
}
