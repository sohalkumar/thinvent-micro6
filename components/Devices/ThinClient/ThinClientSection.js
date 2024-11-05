import { AnimatePresence, motion } from "framer-motion";
import Micro5Intro from "./Micro5Intro";
import m5_dimensions from "@/public/images/micro5/M5_Dimensions.png";
import Image from "next/image";
import Specifications from "../Specifications/Specifications";
import micro5_specs from "@/public/images/micro5/micro-5-pro_wifi.jpg";
import Testimonial from "../components/Testimonial";

import poornima_kavlekar from "@/public/images/Poornima-Kavlekar-Marketing.webp";
import Carousel from "@/components/UI/Carousel";

import logoPaths from "./institute_logos.json";

export default function ThinClientSection() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="thin_client"
      >
        <Micro5Intro />

        {/* M5 Dimensions */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-0 justify-center align-middle lg:mt-0 relative">
          <div className="">
            <Image
              src={m5_dimensions}
              alt="micro 5 dimensions image"
              className="w-full"
            />
          </div>
          <div className="flex flex-col px-4 lg:px-lg-x py-5 lg:py-0 justify-center gap-5">
            <h3 className="font-caladea font-bold text-[2.5rem] lg:text-[4rem] leading-none text-primaryPurple">
              Less Space <br className="hidden md:block" />
              No Fuss
            </h3>
            <p className="lg:text-[22px] ">
              The compact Micro 5 is designed to seamlessly fit into the
              tightest spots. Whether on your desk or mounted discreetly behind
              your monitor, it&apos;s out of sight but always within reach.
            </p>
          </div>
        </div>

        <Specifications
          image={micro5_specs}
          deviceName={"Micro 5"}
          os={"Thinux Embedded Linux"}
          processor={"ARM 1.5 GHz Quad Core Cortex A53"}
          memory={"2 GB DDR3 RAM @1066 MHz"}
          storage={"16 GB eMMC Flash"}
          resolution={"4K (3840×2160)"}
          ports={"HDMI, Ethernet, USB"}
          dimension={"110×106×26 mm"}
          power={"5V 2A"}
        />

        <Testimonial
          image={poornima_kavlekar}
          imageAltText={"Poornima Kavlekar, Marketing, Thinvent Technologies"}
          name={"Poornima Kavlekar"}
          designation={"Marketing"}
          heading={
            <h4 className="text-[1.5rem] lg:text-[2.5rem] py-5 text-darkPurple font-semibold">
              Thin client with a purpose
            </h4>
          }
          text={
            <p className="inline lg:w-[75%]">
              At Thinvent, we believe in making technology accessible to
              everyone, regardless of economic status, caste, or gender.
              That&apos;s what drives us. Before we created the{" "}
              <strong> Micro 5 Thin Client</strong>, we spent a lot of time in
              schools, seeing firsthand how tough the environment can be; rough
              handling, no air conditioning, cramped spaces. We wanted to create
              something that would thrive in those conditions, something that
              would truly make a difference. <strong>Micro 5</strong> is the
              result of that purpose.
            </p>
          }
        />

        {/* Why choose Micro 5 */}
        <div className="bg-bgPurple px-4 lg:px-lg-x lg:py-[3rem] py-[4rem] lg:my-0">
          <div className="text-center">
            <h3 className="text-[2rem] lg:text-[3.5rem] text-secondaryPurple font-bold">
              Why choose Micro 5 thin client for your institution?
            </h3>
          </div>
          <div className="my-8 relative">
            <h4 className="text-[1.25rem] lg:text-[2rem] font-semibold text-primaryPurple">
              Never stop saving.
            </h4>
            <p className="pt-4">
              Educational institutions need to provide up-to-date technology for
              students to stay competitive. This means whenever there is a new
              upgrade the PCs needs to be upgraded with new updates. Instead of
              upgrading PCs every 2-3 years, thin clients offer a smarter
              solution. All processing power comes from the server, so if
              performance slows, only the server needs upgrading. A single
              server, which costs about twice that of a PC, can power 40 thin
              clients. This means instead of replacing 40 PCs every few years,
              you only invest in the cost of two PCs for the server upgrade.
            </p>
            <p className="text-primaryPurple pt-4">
              We have supplied thousands of Micro 5 thin clients to various
              schools and colleges across India.
            </p>
            <p className="pt-4">
              Some of the institutes that use Thinvent devices :{" "}
            </p>
            <Carousel logos={logoPaths} />

            <ul className="flex flex-col gap-4 list-disc p-4">
              <li>
                <span className="text-primaryPurple font-bold">Noiseless:</span>{" "}
                Its silent operation ensures that the students can focus on the
                subject and not the noise.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  No UPS for computer but just for server:
                </span>{" "}
                Consumes no more power than charging a phone. Extremely energy
                efficient.
              </li>
              <li>
                <span className="text-primaryPurple font-bold">
                  Interact and Learn:
                </span>{" "}
                Supports multimedia applications making learning interactive and
                fun.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  Centralized Management:
                </span>{" "}
                It supports remote management tools and cloud-based
                applications, allowing for easy updates to course materials
                remotely.
              </li>
              <li>
                <span className="text-primaryPurple font-bold">
                  Built to last:
                </span>{" "}
                No moving parts, low maintenance - designed for longevity.
              </li>
              <li>
                <span className="text-secondaryPurple font-bold">
                  No Update:
                </span>{" "}
                So it doesn&apos;t take any bandwidth.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
