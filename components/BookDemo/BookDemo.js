import flask from "@/public/graphics/flask.svg";
import globe from "@/public/graphics/globe.svg";
import Image from "next/image";
import BookDemoButton from "../UI/BookDemoButton";

export default function BookDemo() {
  return (
    <div className="text-center mx-auto my-[5rem] w-fit relative">
      <h2 className="font-caladea font-bold  text-[2rem] lg:text-[70px] tracking-[-0.5px]">
        Transform your educational
        <br /> institution with{" "}
        <span className="text-primaryPurple">Micro 6</span> today.
      </h2>
      <p className="mt-6 mb-8 text-[1.25rem] lg:text-[24px]">
        Reach out to our Customer representative
        <br />
        by clicking the below button
      </p>
      <BookDemoButton />

      <div className="absolute w-[25%] lg:w-fit left-[-10%] bottom-0 lg:left-[-25%] lg:bottom-[15%]">
        <Image src={flask} alt="" />
      </div>
      <div className="absolute w-[25%] lg:w-fit bottom-[-25%] right-[0%] lg:right-[-20%] lg:bottom-[-40%]">
        <Image src={globe} alt="" />
      </div>
    </div>
  );
}
