import React, { useEffect } from "react";
import "particles.js";

function ParticlesComponent() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles.json", function () {
        console.log("particles.js loaded - callback");
      });
    } else {
      console.error("particlesJS is not available or loaded correctly.");
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{ width: "100%", height: "100vh", zIndex: 0 }}
    ></div>
  );
}

export default ParticlesComponent;
