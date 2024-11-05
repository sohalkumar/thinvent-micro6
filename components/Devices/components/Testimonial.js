import Image from "next/image";

export default function Testimonial({
  image,
  imageAltText,
  name,
  designation,
  heading,
  text,
}) {
  return (
    <div className="bg-white block md:grid grid-cols-2 border border-t-2 border-t-secondaryPurple">
      <div className=" px-4 lg:px-lg-x lg:py-[6rem] py-[4rem] lg:my-0">
        <div className="mx-auto w-[50%]">
          <Image src={image} alt={imageAltText} className="rounded-full" />
        </div>
        <div className="text-center">
          <h6 className="text-[2rem] text-darkPurple font-bold">{name}</h6>
          <p className="text-[1.5rem] text-secondaryPurple font-semibold">
            {designation}
          </p>
        </div>
      </div>
      <div className="bg-primaryPurple flex flex-col justify-center items-center text-center text-white p-5">
        {heading}
        {text}
      </div>
    </div>
  );
}
