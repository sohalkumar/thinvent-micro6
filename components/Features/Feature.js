import Image from "next/image";

export default function Feature({ image, altText, content }) {
  return (
    <div className="border-[3px] border-primaryPurple rounded-2xl flex items-center gap-6 p-5 lg:p-[2rem] lg:text-[1.5rem]">
      <div className="w-[38px] lg:w-fit flex">
        <Image src={image} alt={altText} />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}
