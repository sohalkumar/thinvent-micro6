import hero_image from "@/public/images/micro_6.png";
import Image from "next/image";
import BookDemoButton from "../UI/BookDemoButton";
import { MotionDiv } from "../UI/Motion";

export default function Hero() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-hero-bg bg-contain lg:bg-contain lg:bg-no-repeat flex flex-col lg:flex-row px-4 py-8 lg:px-lg-x lg:py-[3.75rem] relative"
    >
      {/* Text content */}
      <div>
        <h1
          className="font-caladea leading-none font-bold text-[3rem] lg:text-[5rem] tracking-[-0.5px]"
          style={{ fontFamily: "var()" }}
        >
          Making computers <br /> accessible to every child
        </h1>
        <p className="text-secondaryPurple lg:mt-[2.25rem] text-[25px]">
          We are working tirelessly to bridge India&apos;s digital gap. <br />{" "}
          Our vision is to empower every school with the means <br /> to afford
          quality computers, providing students with the <br /> tools they need
          for a brighter future.
        </p>
        <BookDemoButton className="mt-[1rem] hidden lg:inline-block" />
      </div>

      {/* Micro 6 image */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
          },
        }}
        viewport={{ once: true }}
        className="lg:absolute lg:top-[13rem] lg:right-[7rem] lg:w-[40%]"
      >
        <Image src={hero_image} alt="Hero 6 image" />
      </MotionDiv>
      <BookDemoButton className="mt-[1rem] lg:hidden w-fit mx-auto" />
    </MotionDiv>
  );
}
