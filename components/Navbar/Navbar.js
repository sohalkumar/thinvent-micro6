import icon from "@/public/icon/Thinvent-Logo1.png";
import Image from "next/image";
import BookDemoButton from "../UI/BookDemoButton";
import { MotionDiv } from "../UI/Motion";

export default function Navbar() {
  return (
    <div className="sticky top-[-2%] lg:top-[-5%] flex justify-between items-center bg-bgPurple px-4 py-5 lg:px-lg-x lg:py-[2.75rem] sroll z-[999] opacity-95">
      <MotionDiv
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[125.5px] md:w-fit"
      >
        <a href="/">
          <Image src={icon} alt="Thinvent brand icon" />
        </a>
      </MotionDiv>
      <MotionDiv
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BookDemoButton pulse={true} />
      </MotionDiv>
    </div>
  );
}
