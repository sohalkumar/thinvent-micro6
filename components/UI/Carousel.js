"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Carousel({ logos, dataSpeed = "slow" }) {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          duplicatedItem.className = item.className;
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="bg-primaryPurple rounded-3xl">
      <div className="scroller" data-speed={dataSpeed}>
        <ul className="scroller__inner">
          {logos.map((logo, index) => (
            <li key={index} className="carousel-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="w-[150px] lg:w-[250px]"
                width={100}
                height={50}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
