import { useEffect, React } from "react";
import Lenis from "lenis";
import Intro from "../components/Intro";
// import Description1 from "../components/Descriptions/Description1";
// import Description2 from "../components/Descriptions/Description2";
// import Description3 from "../components/Descriptions/Description3";
// import Description4 from "../components/Descriptions/Description4";
import AboutMeMobile from "../components/AboutMe/AboutMeMobile";
import AboutMeDesktop from "../components/AboutMe/AboutMeDesktop";
import SkillsMobile from "../components/Skills/SkillsMobile";
import MojiProjects from "../components/MojiProjects/MojiProjects";

import ContactMeMobile from "../components/ContactMe/ContactMeMobile";
import ScDesktop from "../components/ContactMe/ScDesktop";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Intro />
      {/* <Description1 /> */}
      <div id="AboutMe" className="md:hidden">
        <AboutMeMobile />
      </div>
      <div id="AboutMeDesktop" className="hidden md:block">
        <AboutMeDesktop />
      </div>

      {/* <Description2 /> */}
      <MojiProjects id="MyProjects" />
      {/* <Description3 /> */}
      <div className="md:hidden">
        <SkillsMobile />
      </div>
      {/* <Description4 /> */}
      <div id="ContactMe" className="md:hidden">
        <ContactMeMobile />
      </div>
      <div id="ContactMeDesktop" className="hidden md:block">
        <ScDesktop />
      </div>
    </>
  );
}
