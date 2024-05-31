import video from "@/public/graphics/4k.svg";
import fan_off from "@/public/graphics/FanOff.svg";
import lightning_bolt from "@/public/graphics/LightningBolt.svg";
import money_box from "@/public/graphics/MoneyBox.svg";
import recycling from "@/public/graphics/Recycling.svg";
import security_lock from "@/public/graphics/SecurityLock.svg";
import storage from "@/public/graphics/Storage.svg";
import verified_badge from "@/public/graphics/VerifiedBadge.svg";
import dotted_pattern from "@/public/graphics/dotted_pattern.svg";
import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="px-4 py-8 lg:px-lg-x lg:py-[8.75rem] mt-[6rem] lg:mt-0 relative">
      <h2 className="font-caladea font-bold text-center text-[2rem] lg:text-[70px] tracking-[-0.5px]">
        Why choose Thinvent
      </h2>

      <div className="grid lg:grid-cols-2 gap-[2rem] lg:gap-[2.25rem] mt-[3rem] lg:mt-[5rem]">
        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={verified_badge} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Proven Track Record
            </h6>
            <p className="lg:text-[22px]">
              Trusted by numerous schools, colleges, <br /> and training
              institutes across India.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={storage} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Ample Storage
            </h6>
            <p className="lg:text-[22px]">
              64GB eMMC storage accommodates educational <br /> software,
              student files, and multimedia content.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={money_box} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Budget-friendly
            </h6>
            <p className="lg:text-[22px]">
              Highly affordable compared to traditional <br /> desktops,
              reducing overall technology costs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={video} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Vibrant Visuals
            </h6>
            <p className="lg:text-[22px]">
              4K resolution delivers stunning visuals for <br /> engaging
              presentations and educational content.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={fan_off} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Fan-less Design
            </h6>
            <p className="lg:text-[22px]">
              Silent operation minimises distractions and <br /> enhances
              classroom environments.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={security_lock} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Stable & Secure
            </h6>
            <p className="lg:text-[22px]">
              Linux-based Thinux OS provides a secure <br /> and reliable
              platform for classroom use.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={lightning_bolt} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Exceptional Performance
            </h6>
            <p className="lg:text-[22px]">
              Quad-Core processor and 4GB RAM ensure
              <br /> smooth multitasking for learning applications.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[50px] lg:w-fit">
            <Image src={recycling} alt="" />
          </div>
          <div>
            <h6 className="font-bold text-[1.5rem] lg:text-[2rem] text-primaryPurple">
              Compact & Sustainable
            </h6>
            <p className="lg:text-[22px]">
              Small size saves space and energy,
              <br /> promoting greener classrooms.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-80px] left-[-52px] lg:bottom-[-164px] lg:left-[-156px] w-[100px] lg:w-fit">
        <Image src={dotted_pattern} alt="dotted pattern vector" />
      </div>
    </div>
  );
}
