// import React from "react";

// function Projects() {
//   return (
//     <>
//       <section className=" container  mx-auto bg-black text-white">
//         <div className="flex flex-col md:flex md:flex-row items-center  md:justify-between p-7 text-center my-5 ">
//           <div className="w-3/4 font-bold text-3xl py-3 my-5 ">
//             FrontEnd Projects
//           </div>
//           <div className="w-3/4 font-bold text-3xl py-3 my-5 ">
//             Backend Projects
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Projects;

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import FrontProjectCube from "../MojiProjects/FrontProjectCube/FrontProjectCube";
import BackProjectCube from "../MojiProjects/BackProjectCube /BackProjectCube";
import "../Particle/Particle.scss";
import ParticlesComponent from "../Particle/particle";
export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-[1vh] left-0 h-screen w-full  bg-black">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div className="video">
            <ParticlesComponent />
          </div>
          <section className=" fixed top-[5vh] container md:top-[20vh] md:ma-auto md:ml-8 lg:ma-auto lg:ml-4 ">
            <div className="flex flex-col md:flex md:flex-row items-center  md:justify-center  lg:justify-center text-center my-1 md:m-auto">
              <div className=" relative w-3/4 font-bold  md:ml-20">
                <Link to="/frontend" className="md:hidden text-3xl">
                  <h1 className="absolute top-52 left-1 md:top-64  text-decoration-none text-custom-font text-center z-10  text-shadow-custom-beige ">
                    Front
                  </h1>
                  <h1 className="absolute top-52 left-72  md:left-96 md:top-64 text-decoration-none text-custom-font text-center z-10 text-shadow-custom-beige">
                    End
                  </h1>
                </Link>
                <Link to="/frontend" className="hidden md:block">
                  <h1 className="absolute  md:top-20  md:left-40 md:text-5xl text-decoration-none text-custom-font text-center z-10 lg:left-54 xl:left-42 2xl:left-72 xl:text-7xl text-shadow-custom-beige">
                    FrontEnd
                  </h1>
                </Link>
                <FrontProjectCube />
              </div>

              <div className="w-3/4 font-bold   ">
                <Link to="/backend" className="md:hidden text-3xl">
                  <h1 className="absolute bottom-36 right-76 md:top-64 text-decoration-none text-custom-font text-center z-10 text-shadow-custom-beige">
                    Back
                  </h1>
                  <h1 className="absolute bottom-36 right-20 md:top-64 text-decoration-none text-custom-font text-center z-10 text-shadow-custom-beige">
                    End
                  </h1>
                </Link>
                <Link to="/backend" className="hidden md:block">
                  <h1 className="absolute  md:top-20 md:right-10 md:text-5xl text-decoration-none text-custom-font text-center z-10 lg:right-32 xl:right-46 2xl:right-64 xl:text-7xl text-shadow-custom-beige">
                    BackEnd
                  </h1>
                </Link>
                <BackProjectCube />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
