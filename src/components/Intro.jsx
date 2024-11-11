import React, { useEffect } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  useEffect(() => {
    const text = "A software Developer";
    const typingElement = document.getElementById("typing-text");
    const typingDelay = 130;
    const resetDelay = 2000; // 2 seconds delay before restarting the typing effect

    let charIndex = 0;
    let typingForward = true;
    let typingTimeout;

    function typingEffect() {
      if (typingElement) {
        if (typingForward) {
          typingElement.textContent = text.substring(0, charIndex + 1); // Type next character
          charIndex++;
          if (charIndex === text.length) {
            typingForward = false;
            typingTimeout = setTimeout(typingEffect, resetDelay); // Pause before deleting
          } else {
            typingTimeout = setTimeout(typingEffect, typingDelay);
          }
        } else {
          typingElement.textContent = text.substring(0, charIndex); // Delete character
          charIndex--;
          if (charIndex === 0) {
            typingForward = true;
            typingTimeout = setTimeout(typingEffect, resetDelay); // Pause before re-typing
          } else {
            typingTimeout = setTimeout(typingEffect, typingDelay);
          }
        }
      }
    }

    typingEffect();

    // Clean up timeout on component unmount
    return () => clearTimeout(typingTimeout);
  }, []);
  return (
    <div className=" h-3/4 overflow-hidden">
      <motion.div style={{ y }} className="relative h-full bg-black ">
        {/* Background Video for mobile */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" md:hidden absolute -top-64 left-10 w-full h-full object-cover z-0"
        >
          <source src="/images/moonMobile.mp4" type="video/mp4" />
        </video>
        {/* Background Video for Desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" hidden md:block absolute -top-5 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/stars.mp4" type="video/mp4" />
        </video>
        <div className="container  m-auto p-7 flex flex-col md:flex md:flex-row gap-5 align-center md:justify-between ">
          <div className="mt-20 md:mt-18 md:w-2/3 z-10">
            <h1 className=" text-custom-font text-center text-4xl md:text-4xl lg:text-6xl  mt-8 pt-4 xl:mt-32 lg:mt-24 font-bold  text-shadow-custom-beige ">
              Mozhdeh Khorashahi
            </h1>
            <h6
              className="text-custom-font text-center text-xl mt-8 pt-8 font-bold xl:mt-20 xl:text-3xl"
              data-text="A software Developer"
              id="typing-text"
            ></h6>
          </div>
          <div className="  md:w-2/3">
            <img
              src="./images/profile-photo.png"
              alt="moji-photo"
              className="scale-75 md:scale-75 lg:scale-75 "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
