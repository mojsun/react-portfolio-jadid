// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// export default function Section() {
//   const container = useRef();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

//   return (
//     <div
//       ref={container}
//       className="relative flex items-center justify-center h-screen overflow-hidden"
//       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
//     >
//////////////////////////////////
//       <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
//         <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference">
//           Beauty and quality need the right time to be conceived and realised
//           even in a world that is in too much of a hurry.
//         </p>
//         <p className="text-[5vw] uppercase mix-blend-difference">
//           Background Parallax
//         </p>
//       </div>
////////////////////////
//       <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
//         <motion.div style={{ y }} className="relative w-full h-full">
//           <img
//             src="/images/1.jpg"
//             alt="image"
//             style={{ objectFit: "cover", width: "100%", height: "100%" }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////
// import styles from "./style.module.scss";
// import React, { Suspense } from "react";
// import SmoothScroll from "../smoothScroll/index";
// import Projects from "../projects/index";
// import ErrorBoundary from "../AboutMe/ErrorBoundry";
// // Lazy load the Earth component
// const Earth = React.lazy(() => import("../earth/index"));

// export default function Home() {
//   return (
//     <SmoothScroll>
//       <main className={styles.main}>
//         <ErrorBoundary>
//           <Suspense
//             fallback={<img src="/assets/placeholder.png" alt="Loading..." />}
//           >
//             <Earth />
//           </Suspense>
//         </ErrorBoundary>
//         <Projects />
//       </main>
//     </SmoothScroll>
//   );
// }
/////////////////////////////////////////////////////////////////////////
import styles from "./style.module.scss";
import React, { Suspense } from "react";
import SmoothScroll from "../smoothScroll/index";
import Projects from "../projects/index";
import ErrorBoundary from "./ErrorBoundry";
// import { useScroll } from "framer-motion";
import { useRef } from "react";
// Lazy load the Earth component
const Earth = React.lazy(() => import("../earth/index"));

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
          <ErrorBoundary>
            <Suspense
              fallback={<img src="/assets/placeholder.png" alt="Loading..." />}
            >
              <Earth />
            </Suspense>
          </ErrorBoundary>
          <Projects />
        </main>
      </SmoothScroll>
    </div>
  );
}
