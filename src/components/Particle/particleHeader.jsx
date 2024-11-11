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

  return <div id="particles-js"></div>;
}

export default ParticlesComponent;
