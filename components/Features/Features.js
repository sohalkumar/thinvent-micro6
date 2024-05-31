
import electronics from "@/public/graphics/Electronics.svg";
import media from "@/public/graphics/Media.svg";
import playstore from "@/public/graphics/Playstore.svg";
import radioTower from "@/public/graphics/RadioTower.svg";
import tesseract from "@/public/graphics/Tesseract.svg";
import training from "@/public/graphics/Training.svg";
import Feature from "./Feature";

export default function Features() {
  return (
    <div className="relative px-4 py-8 lg:px-lg-x lg:py-[8.75rem]">
      <h2 className="font-caladea font-bold text-center text-[2rem] lg:text-[70px] tracking-[-0.5px]">
        For Schools & Colleges <br /> related learnings
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[2rem] mt-[50px] lg:mt-[100px]">
        <Feature
          image={training}
          altText={"training graphic"}
          content={
            <>
              Database, Spread-
              <br /> sheet, Presentation
            </>
          }
        />

        <Feature
          image={radioTower}
          altText={"radio tower graphic"}
          content={
            <>
              ICT based
              <br />
              solutions
            </>
          }
        />

        <Feature
          image={tesseract}
          altText={"tesseract graphic"}
          content={
            <>
              Computer Aided
              <br />
              Design (CAD)
            </>
          }
        />

        <Feature
          image={media}
          altText={"media graphic"}
          content={
            <>
              Video, graphics
              <br />& audio editing
            </>
          }
        />

        <Feature
          image={playstore}
          altText={"playstore graphic"}
          content={
            <>
              Applets and
              <br />
              apps
            </>
          }
        />

        <Feature
          image={electronics}
          altText={"electronics graphic"}
          content={
            <>
              Impact of emerging
              <br />
              technologies
            </>
          }
        />
      </div>

      {/* bg graphic */}
      <div className="absolute left-[-30%] lg:top-[80%] lg:left-[-20%] bg-[#3D5CFF] h-[347px] w-[347px] lg:h-[694px] lg:w-[694px] rounded-full opacity-15 blur-[100px]"></div>
    </div>
  );
}
