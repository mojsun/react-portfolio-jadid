// import { Canvas, useLoader } from "@react-three/fiber";
// import { useRef, useEffect, useState } from "react";
// import { useScroll } from "framer-motion";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { motion } from "framer-motion-3d";

// // Custom hook for screen width detection
// function useScreenWidth() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile;
// }
// export default function Earth() {
//   const scene = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: scene,
//     offset: ["start end", "end start"],
//   });

//   const [color, normal, aoMap] = useLoader(TextureLoader, [
//     "../assets/color.jpg",
//     "../assets/normal.png",
//     "../assets/occlusion.jpg",
//   ]);
//   // Use the custom hook to determine the scale based on screen size
//   const isMobile = useScreenWidth();
//   const scale = isMobile ? 2.5 : 1.5; // Scale values based on screen width
//   return (
//     <Canvas ref={scene}>
//       <ambientLight intensity={0.1} />
//       <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
//       <motion.mesh scale={scale} rotation-y={scrollYProgress}>
//         <sphereGeometry args={[isMobile ? 1 : 1.5, 64, 64]} />
//         <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
//       </motion.mesh>
//     </Canvas>
//   );
// }

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
/////////////////////////////////////////////////
// Custom hook for responsive scale detection
// function useResponsiveScale() {
//   const [scale, setScale] = useState(1); // Default scale for mobile

// // Custom hook for responsive scale and height detection
//   useEffect(() => {
//     const updateScale = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) {
//         setScale(1.8); // xl screen
//       } else if (width >= 1024) {
//         setScale(1.5); // lg screen
//       } else if (width >= 768) {
//         setScale(1.1); // md screen
//       } else {
//         setScale(2.5); // mobile screen
//       }

//     };

//     updateScale();
//     window.addEventListener("resize", updateScale);
//     return () => window.removeEventListener("resize", updateScale);
//   }, []);

//   return scale;
// }
////////////////////////////////////////////////

// Custom hook for responsive scale and height detection
function useResponsiveProperties() {
  const [properties, setProperties] = useState({ scale: 1, height: "100vh" });

  useEffect(() => {
    const updateProperties = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setProperties({ scale: 1.8, height: "70vh" }); // xl screen
      } else if (width >= 1024) {
        setProperties({ scale: 1.5, height: "50vh" }); // lg screen
      } else if (width >= 768) {
        setProperties({ scale: 1.1, height: "30vh" }); // md screen
      } else {
        setProperties({ scale: 2.5, height: "100vh" }); // mobile screen
      }
    };

    updateProperties();
    window.addEventListener("resize", updateProperties);
    return () => window.removeEventListener("resize", updateProperties);
  }, []);

  return properties;
}
export default function Earth() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "../assets/color.jpg",
    "../assets/normal.png",
    "../assets/occlusion.jpg",
  ]);

  //////////////////////////////////////////
  // Use the custom hook to get the responsive scale value
  // const scale = useResponsiveScale();
  //////////////////////////////////////////

  // Use the custom hook to get the responsive properties
  const { scale, height } = useResponsiveProperties();
  return (
    <Canvas
      ref={scene}
      style={{ width: "100%", height: "100%" }}
      className="md:h-1/3"
    >
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={scale} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
}
