import icon from "@/public/icon/Thinvent-Logo1.png";
import Image from "next/image";
import BookDemoButton from "../UI/BookDemoButton";

export default function Navbar() {
  return (
    <div className="sticky top-[-2%] lg:top-[-5%] flex justify-between items-center bg-bgPurple px-4 py-5 lg:px-lg-x lg:py-[2.75rem] sroll z-[999]">
      <div className="w-[125.5px] md:w-fit">
        <a href="/">
          <Image src={icon} alt="Thinvent brand icon" />
        </a>
      </div>
      <BookDemoButton pulse={true} />
    </div>
  );
}
