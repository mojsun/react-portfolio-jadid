import styles from "./style.module.scss";
import React from "react";
import SmoothScroll from "../smoothScroll/index";

// import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FrontSkills from "./FrontSkills/index";
import BackSkills from "./BackSkills/index";
import OtherSkills from "./OtherSkills/index";
export default function Section() {
  const container = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative overflow-hidden "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <SmoothScroll>
        <main className={styles.main}>
          <div className="fixed flex flex-col md:flex md:flex-col md:space-x-1 top-[25vh] justify-center m-auto">
            <h1 className="text-custom-font text-center m-auto mb-4 md:mb-20 text-5xl font-bold text-shadow-custom-beige">
              My Skills
            </h1>
            <div className="flex flex-row ">
              <FrontSkills />
              <BackSkills />
              <OtherSkills />
            </div>
          </div>
        </main>
      </SmoothScroll>
    </div>
  );
}
