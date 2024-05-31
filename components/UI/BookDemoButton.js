export default function BookDemoButton({ pulse, className }) {
  const buttonStyles = `bg-primaryPurple font-semibold text-[1.125rem] rounded-full py-[8.75px] px-[16.5px] md:py-[17.5px] md:px-[33px] ${
    pulse ? "animate-pulse" : ""
  } ${className ? className : ""}`;
  return <button className={buttonStyles}>Book Demo</button>;
}
