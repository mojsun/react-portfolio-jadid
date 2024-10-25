import React from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-3/4 overflow-hidden">
      <motion.div style={{ y }} className="relative h-full bg-black">
        {/* <img
          src="./images/2.jpg"
          alt="image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        /> */}
        <div className="container bg-black m-auto p-7 flex flex-col md:flex md:flex-row gap-5 align-center md:justify-between ">
          <div className="md:mt-20 md:w-2/3">
            <h1 className="text-white text-center text-4xl md:text-6xl pb-7 mt-6 lg:mt-36">
              Mozhdeh Khorashahi
            </h1>
            <h6 className="text-white text-center">A software Developer</h6>
          </div>
          <div className="md:w-2/3">
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
