import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import styles from "../Skills/style.module.scss";
import React from "react";
import SmoothScroll from "../smoothScroll/index";
import "../ContactMe/ContactMe.scss";
import FrontSkills from "../Skills/FrontSkills/index";
import BackSkills from "../Skills/BackSkills/index";
import OtherSkills from "../Skills/OtherSkills/index";
export default function ContactMe() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex flex-row items-center justify-between overflow-hidden m-auto  "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className=" left-0  bottom-[1vh] w-1/2 m-auto bg-black text-white">
        <SmoothScroll>
          <main className={styles.main}>
            <div
              className="fixed flex flex-col md:flex md:flex-col md:space-x-1 top-[20vh] justify-center m-auto "
              style={{ transform: "scale(1)" }}
            >
              <h1 className="text-custom-font text-center m-auto  md:mb-20 text-5xl font-bold text-shadow-custom-beige">
                My Skills
              </h1>
              <div
                className="flex flex-row md:pl-10 lg:pl-10 gap-2"
                style={{ transform: "scale(0.85)" }}
              >
                <FrontSkills />
                <BackSkills />
                <OtherSkills />
              </div>
            </div>
          </main>
        </SmoothScroll>
      </div>

      <div className=" left-0  bottom-[1vh] w-1/2 m-auto text-white">
        <main className={styles.main}>
          <div className="fixed top-[20vh]">
            <h1 className="text-custom-font text-center m-auto   text-5xl font-bold text-shadow-custom-beige">
              Contact Me
            </h1>
            <motion.div style={{ y }} className="relative w-fit h-screen">
              <section className="Contact-form  text-black">
                <p className="font-bold text-center mb-3">
                  Send a message and I'll get back to you as soon as I can
                </p>
                <form id="contactForm" action="/send-email" method="POST">
                  <div className="mb-3 flex flex-row justify-between my-5 gap-10">
                    <label
                      htmlFor="name"
                      className="form-label flex-start font-bold  "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control pl-6 py-2 "
                      id="name"
                      name="name"
                      required
                    ></input>
                  </div>
                  <div className="mb-3 flex flex-row justify-between my-5 gap-4">
                    <label
                      htmlFor="email"
                      className="form-label font-bold w-1/3"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control md:pl-6 lg:pl-6 py-2"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      required
                    ></input>
                  </div>
                  <div className="mb-3 gap-14 flex flex-row justify-between my-5 ">
                    <label htmlFor="message" className="form-label font-bold ">
                      Message
                    </label>
                    <textarea
                      className="form-control md:pl-14 lg:pl-4 py-3"
                      id="message"
                      name="message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn font-bold text-xl w-2/3 p-2  items-center ml-32"
                  >
                    Submit
                  </button>
                </form>
              </section>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
