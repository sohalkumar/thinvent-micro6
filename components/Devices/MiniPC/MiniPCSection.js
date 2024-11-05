import m6_dimensions from "@/public/images/micro6/M6_dimensions.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import Specifications from "../Specifications/Specifications";
import Micro6Intro from "./Micro6Intro";
import micro6_specs from "@/public/images/micro6/micro_6_specs.png";

import aniket_maurya from "@/public/images/Aniket-Maurya-Director.webp";

export default function MiniPCSection() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="mini_pc"
        className="bg-primaryPurple"
      >
        <Micro6Intro />

        {/* M6 Dimensions */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-0 justify-center align-middle lg:mt-0 relative">
          <div className="flex flex-col px-4 lg:px-lg-x py-5 lg:py-0 justify-center gap-5">
            <h3 className="font-caladea font-bold text-[2.5rem] lg:text-[4rem] leading-none text-darkPurple">
              Less Space <br className="hidden md:block" />
              No Fuss
            </h3>
            <p className="lg:text-[22px] ">
              The compact Micro 6 is designed to seamlessly fit into the
              tightest spots. Whether on your desk or mounted discreetly behind
              your monitor, it&apos;s out of sight but always within reach.
            </p>
          </div>
          <div className="">
            <Image
              src={m6_dimensions}
              alt="micro 6 dimensions image"
              className="w-full"
            />
          </div>
        </div>

        <Specifications
          image={micro6_specs}
          deviceName={"Micro 6"}
          os={"Thinux Embedded Linux"}
          processor={"ARM 1.91 GHz Quad Core Cortex A55"}
          memory={"4 GB DDR3 RAM @1066MHz"}
          storage={"64GB eMMC Flash"}
          resolution={"4K (3840×2160)"}
          ports={"HDMI, Ethernet, USB"}
          dimension={"102×102×20 mm"}
          power={"5V 2A"}
        />

        <Testimonial
          image={aniket_maurya}
          imageAltText={"Aniket Maurya, Director, Thinvent Technologies"}
          name={"Aniket Maurya"}
          designation={"Director"}
          heading={
            <h4 className="text-[1.5rem] lg:text-[2.5rem] py-5 text-darkPurple font-semibold">
              Designed to Empower Education
            </h4>
          }
          text={
            <p className="inline lg:w-[75%]">
              I&apos;ve witnessed schools struggle to afford high-end computers,
              while most low-cost options are simply built to fail. Year after
              year, they spend more on updates, upgrades, maintenance, and
              repairs—especially due to power issues—harming the students&apos;
              learning experience. That&apos;s why, at Thinvent, we designed the
              <strong> Micro 6</strong>: a rugged, reliable, and long-lasting
              mini PC that meets every educational need. It&apos;s built to
              withstand the challenges, ensuring uninterrupted learning for
              every student.
            </p>
          }
        />

        {/* Why choose Micro 6 */}
        <div className="bg-bgPurple px-4 lg:px-lg-x lg:py-[3rem] py-[4rem] lg:my-0">
          <div className="text-center">
            <h3 className="text-[2rem] lg:text-[3.5rem] text-secondaryPurple font-bold">
              Why choose our devices ?
            </h3>
            <p>
              We have supplied thousands of mini PCs to various schools,
              colleges, computer labs, and NGOs across India.
            </p>
          </div>
          <div className="my-8 relative">
            <h4 className="text-[1.25rem] lg:text-[2rem] font-semibold">
              This is how you benefit with Micro 6
            </h4>
            <ul className="flex flex-col gap-4 list-disc p-4">
              <li>
                <span className="text-primaryPurple font-bold">
                  More space, more students:
                </span>{" "}
                They are small enough to fit on any regular table, so you
                won&apos;t need to buy special desks. You can fit more computers
                in the same room.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  Forget UPS or generator<span className="text-red-400">*</span>
                  :
                </span>{" "}
                They use no more energy than charging a phone, which means you
                won&apos;t need a UPS or generator. It&apos;s extremely
                energy-efficient.
              </li>
              <li>
                <span className="text-primaryPurple font-bold">
                  Interactive learning:
                </span>{" "}
                Supports multimedia applications, making lessons more engaging
                and fun for students.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  Quiet operation:
                </span>{" "}
                The silent operation ensures that the students can focus on the
                subject and not the noise.
              </li>
              <li>
                <span className="text-primaryPurple font-bold">
                  Centralized Management:
                </span>{" "}
                Supports remote management tools and cloud-based applications,
                allowing for easy updates to course materials remotely.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  Built to last:
                </span>{" "}
                With no moving parts they require low or no maintenance -
                designed for longevity.
              </li>
            </ul>

            <p className="text-[0.75rem] text-gray mt-4 text-end ">
              <span className="text-red-400">*</span>T&C Apply : UPS and
              generator will be required for any kind of server computers.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
