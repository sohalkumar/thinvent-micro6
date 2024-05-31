import facebook from "@/public/graphics/facebook.svg";
import instagram from "@/public/graphics/instagram.svg";
import linkedin from "@/public/graphics/linkedin.svg";
import phone_icon from "@/public/graphics/phone_icon.svg";
import twitter from "@/public/graphics/twitter.svg";
import icon from "@/public/icon/Thinvent-Logo1.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-darkPurple lg:mt-[16rem] px-4 py-8 lg:px-lg-x lg:py-[3.75rem] relative">
      <div className="my-[5rem] w-[40%] lg:w-fit">
        <Image src={icon} alt="Thinvent brand icon" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
        <div>
          <p className="lg:text-[18px]">
            Founded in 2007, Thinvent Technologies has continually evolved and{" "}
            <br /> expanded its presence in the technology sector. The journey
            began in a<br /> Gurgaon apartment, operating as a one-person entity
            and initially focusing on
            <br /> software services, notably tailored solutions for the Indian
            Railways. Today,
            <br /> we deliver a broad range of information technology solutions
            to industries as
            <br /> varied as transport, government, manufacturing, education and
            banking.
            <br />
            <span className="font-semibold">Be our next success story.</span>
          </p>
        </div>

        <div className="flex lg:text-[18px] justify-between gap-12">
          <div className="flex h-fit items-end gap-2 relative">
            <Image
              src={phone_icon}
              alt=""
              className="hidden lg:block relative bottom-1"
            />
            <div>
              <h6 className="font-bold">Gurgaon</h6>
              <p>
                1142, Tower B3, Spaze i-Tech
                <br /> Park, Sector 49, Sohna Road,
                <br />
                Gurgaon – 122018 India
                {/* <br /> */}
              </p>
              <div className="flex items-center gap-2">
                <Image src={phone_icon} alt="" className="lg:hidden" />
                <a
                  href="tel:+911143077467"
                  className="underline underline-offset-2"
                >
                  +91-11-430-77467
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-fit items-end gap-2 relative">
            <Image
              src={phone_icon}
              alt=""
              className="hidden lg:block relative bottom-1"
            />
            <div>
              <h6 className="font-bold">Goa</h6>
              <p>
                316, Gera Imperium,
                <br />
                Grand Patto, Panaji,
                <br />
                Goa – 403001 India
                <br />
              </p>
              <div className="flex items-center gap-2">
                <Image src={phone_icon} alt="" className="lg:hidden" />
                <a
                  href="tel:+911143077467"
                  className="underline underline-offset-2"
                >
                  +91-11-430-77467
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-dividerPurple my-[3rem] lg:mt-[8rem]" />
      <div className="flex justify-between">
        <p className="text-secondaryPurple lg:text-[18px]">
          Copyright 2023 | All Rights Reserved
        </p>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/company/thinvent/" target="_blank">
            <Image src={linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/thinvent_india/" target="_blank">
            <Image src={instagram} alt="" />
          </a>
          <a href="https://www.facebook.com/thinventech/" target="_blank">
            <Image src={facebook} alt="" />
          </a>
          <a href="https://x.com/thinvent" target="_blank">
            <Image src={twitter} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
