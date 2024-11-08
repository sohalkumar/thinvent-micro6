export default function BookDemoButton({ pulse, className }) {
  const buttonStyles = `bg-primaryPurple font-semibold text-[1.125rem] rounded-full py-[8.75px] px-[16.5px] md:py-[17.5px] md:px-[33px] hover:bg-white hover:text-primaryPurple duration-100 ${
    pulse ? "animate-pulse" : ""
  } ${className ? className : ""}`;
  return (
    <a href="tel:+911143077467">
      <button className={buttonStyles} href>
        Book Demo
      </button>
    </a>
  );
}
