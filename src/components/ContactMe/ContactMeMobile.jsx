// import React from "react";

// function ContactMe() {
//   return <div>ContactMe</div>;
// }

// export default ContactMe;
////////////////////////////////////////////
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import React from "react";

import "../ContactMe/ContactMe.scss";
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
      className="relative flex items-center justify-center  overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="  bg-black h-screen left-0 w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" md:hidden absolute -top-40 -left-20 w-full h-full object-cover  rotate-180"
        >
          <source src="/images/moonMobile.mp4" type="video/mp4" />
        </video>

        <motion.div style={{ y }} className="relative w-full h-full ">
          <h2 className=" text-custom-font text-5xl  text-center font-bold mt-8 mb-3 pt-12 text-shadow-custom-beige">
            Contact Me
          </h2>
          <section className="Contact-form ">
            <p className="font-bold text-center mb-3">
              Send a message and I'll get back to you as soon as I can
            </p>
            <form
              id="contactForm"
              action="/send-email"
              method="POST"
              className="flex flex-col justify-center items-center"
            >
              <div className="mb-3 flex flex-row justify-between my-5 gap-20">
                <label
                  htmlFor="name"
                  className="form-label flex-start font-bold  "
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control pl-16 py-2 "
                  id="name"
                  name="name"
                  required
                ></input>
              </div>
              <div className="mb-3 flex flex-row justify-between my-5 gap-4">
                <label htmlFor="email" className="form-label font-bold w-1/3">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control pl-16 py-2"
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
                  className="form-control pl-14 py-2"
                  id="message"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn font-bold text-xl w-2/3 p-1  items-center ml-32"
              >
                Submit
              </button>
            </form>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

///////falseee////////
//////////////////////////////////////////
// import React from "react";
// import ParticlesComponent from "../components/particle";
// import "../scss/pages/ContactMe.scss";
// function ContactMe() {
//   return (
//     <>
//       <main className="Contact">
//         <div className=" Home-video bg-dark">
//           <ParticlesComponent />
//         </div>
//         <section className="Contact-form">
//           <h2>Let's be in touch</h2>
//           <p>Send a message and I'll get back to you as soon as I can</p>
//           <form id="contactForm" action="/send-email" method="POST">
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 required
//               ></input>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 aria-describedby="emailHelp"
//                 required
//               ></input>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 rows="3"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-info">
//               Submit
//             </button>
//           </form>
//         </section>
//       </main>
//     </>
//   );
// }
// export default ContactMe;

// {
//   /* <section className=" fixed top-[25vh] container  mx-auto ">
// <div className="flex flex-col md:flex md:flex-row items-center  md:justify-between p-7 text-center my-5 ">
//   <div>Contact Me</div>
// </div>
// </section> */
// }
