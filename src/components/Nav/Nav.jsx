// import React from "react";
// import "../Nav/script";
// export default function Nav() {
//   return (
//     <>
//       {/* <!-- Hero Container --> */}
//       <div class=" px-20 py-8 bg-black m-auto">
//         {/* <!-- Menu/Logo Container --> */}
//         <nav class="flex items-center justify-between font-bold text-custom-font">
//           {/* ///Logo///  */}
//           <img src="images/logo.svg" alt="" />
//           {/* //  Menu // */}
//           <div class="hidden h-10 font-alata md:flex md:space-x-8">
//             <div class="group">
//               <a href="#">About</a>
//               <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//             </div>
//             <div class="group">
//               <a href="#">Careers</a>
//               <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//             </div>
//             <div class="group">
//               <a href="#">Events</a>
//               <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//             </div>
//             <div class="group">
//               <a href="#">Products</a>
//               <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//             </div>
//             <div class="group">
//               <a href="#">Support</a>
//               <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//             </div>
//           </div>
//           {/* // Hamburger Button // */}
//           <div class="md:hidden">
//             <button
//               id="menu-btn"
//               type="button"
//               class="z-40 block hamburger md:hidden focus:outline-none"
//             >
//               <span class="hamburger-top"></span>
//               <span class="hamburger-middle"></span>
//               <span class="hamburger-bottom"></span>
//             </button>
//           </div>
//         </nav>

//         {/* // Mobile Menu // */}
//         <div
//           id="menu"
//           class="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
//         >
//           <a href="#" class="hover:text-pink-500">
//             About
//           </a>
//           <a href="#" class="hover:text-pink-500">
//             Careers
//           </a>
//           <a href="#" class="hover:text-pink-500">
//             Events
//           </a>
//           <a href="#" class="hover:text-pink-500">
//             Products
//           </a>
//           <a href="#" class="hover:text-pink-500">
//             Support
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }
/////////////////////////////////////////
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "../Nav/style.scss";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    function navToggle() {
      btn.classList.toggle("open");
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }

    // Add click event listener for the button
    btn.addEventListener("click", navToggle);

    // Clean up the event listener
    return () => {
      btn.removeEventListener("click", navToggle);
    };
  }, []);

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to homepage and scroll after navigation
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the component is rendered
    } else {
      // Direct scroll if already on homepage
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className="fixed top-0 w-full px-10 md:px-8 pt-8 bg-custom-font m-auto z-50 pb-5 md:pb-1 opacity-60">
        <nav className="flex items-center justify-between font-bold text-black">
          {/* <img src="images/logo.svg" alt="Logo" /> */}
          <a href="/" className="text-black font-bold text-2xl pb-5">
            {"<Mozhdeh/> "}
          </a>
          {/* Desktop Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            {[
              { label: "AboutMe", link: "/#AboutMeDesktop" },
              { label: "MyProjects", link: "/#MyProjects" },
              { label: "ContactMe", link: "/#ContactMeDesktop" },
              {
                label: "MyResume",
                link: "https://drive.google.com/file/d/13aiYvZHDL5PlRqOvZoBsbOIgTx6NSrOP/view?usp=sharing",
              },
            ].map((item) => (
              <div
                className="group"
                key={item.label}
                // onClick={() => handleScroll(item.sectionId)}
              >
                <a href={item.link}>{item.label}</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            ))}
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {/* Overlay for dark background */}
          {/* <div
            id="NavOverlay"
            className="hidden fixed inset-0 bg-black bg-opacity-70 z-40"
          ></div> */}
        </nav>
        {/* Mobile Menu */}
        <div
          id="menu"
          className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black  backdrop-blur-4xl"
        >
          {[
            { label: "AboutMe", link: "#AboutMe" },
            { label: "MyProjects", link: "#MyProjects" },
            { label: "ContactMe", link: "#ContactMe" },
            {
              label: "MyResume",
              link: "https://drive.google.com/file/d/13aiYvZHDL5PlRqOvZoBsbOIgTx6NSrOP/view?usp=sharing",
            },
          ].map((item) => (
            <a
              href={item.link}
              className="hover:text-custom-font"
              key={item.label}
              onClick={() => handleScroll(item.sectionId)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
