// import React, { Suspense } from "react";
// import ErrorBoundary from "./ErrorBoundry";
// const Earth = React.lazy(() => import("../earth/index"));
// function AboutMeDesktop() {
//   return (
//     <>
//       <section className=" bg-pink-500 m-auto ">
//         <div className="p-7 flex flex-col justify-center text-center">
//           <div className="text-5xl font-bold  "> About Me</div>
//           <div className="flex flex-row   justify-between w-full m-auto space-x-12 ">
//             <div className=" w-6/12">
//               <ErrorBoundary>
//                 <Suspense
//                   fallback={
//                     <img src="/assets/placeholder.png" alt="Loading..." />
//                   }
//                 >
//                   <Earth />
//                 </Suspense>
//               </ErrorBoundary>
//             </div>
//             <div
//               id="form"
//               className=" w-6/12 flex flex-col  h-2/3 bg-blue-400 mt-5"
//             >
//               <div className="relative flex flex-row ">
//                 <div className="bg-black border-4 border-custom-font rounded-xl h-1/3 mt-16 absolute left-50% top-50%">
//                   <h1 className="font-bold text-2xl text-custom-font py-2 px-8">
//                     About Me
//                   </h1>
//                 </div>
//                 <div className="bg-custom-font text-xl text-start text-black m-5 py-2 px-14 rounded-md ml-36 ">
//                   <p>Im 25 years old</p>
//                   <p>Im hardwork person</p>
//                   <p>I love dogs</p>
//                 </div>
//               </div>
//               <div className="relative flex flex-row ">
//                 <div className="bg-black border-4 border-custom-font rounded-xl h-1/3 mt-16 absolute left-50% top-50%">
//                   <h1 className="font-bold text-2xl text-custom-font py-2 px-8">
//                     My work experience
//                   </h1>
//                 </div>
//                 <div className="bg-custom-font text-xl text-start text-black m-5 py-2 px-14 rounded-md ml-36 ">
//                   <p>I work for aaviengineering</p>
//                   <p>i did front end job</p>
//                   <p>i work on backend</p>
//                 </div>
//               </div>
//               <div className="relative flex flex-row ">
//                 <div className="bg-black border-4 border-custom-font rounded-xl h-1/3 mt-16 absolute left-50% top-50%">
//                   <h1 className="font-bold text-2xl text-custom-font py-2 px-8">
//                     education
//                   </h1>
//                 </div>
//                 <div className="bg-custom-font text-xl text-start text-black m-5 py-2 px-14 rounded-md ml-36 ">
//                   <p>bachelore of architecture</p>
//                   <p>master of architecture</p>
//                   <p>certificate of software developer from UofT</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AboutMeDesktop;
import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundry";
const Earth = React.lazy(() => import("../earth/index"));

function AboutMeDesktop() {
  return (
    <section className="bg-black m-auto">
      <div className=" relative p-7 flex flex-col justify-center ">
        <h1 className=" absolute text-5xl font-bold mb-8 text-custom-font md:left-24 md:top-28 lg:top-20 lg:left-40 xl:top-14 xl:left-60">
          About Me
        </h1>
        <div className="flex flex-row justify-between w-full mx-auto space-x-12">
          {/* Earth Section */}
          <div className="w-6/12 flex justify-center items-center">
            <ErrorBoundary>
              <Suspense
                fallback={
                  <img src="/assets/placeholder.png" alt="Loading..." />
                }
              >
                <Earth />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* Information Cards Section */}
          <div
            id="form"
            className="w-6/12 flex flex-col space-y-6 bg-slate-200 bg-opacity-40 p-5 rounded-lg md:h-6/12 text-center"
          >
            {/** Information Card */}
            <InfoCard
              title="About Me"
              content={[
                "I'm a full-stack developer with a keen eye for design,",
                "skilled in both front-end and back-end development,",
                "hardworking, and ready to bring valuable support to your project!",
              ]}
            />

            <InfoCard
              title="My Work"
              content={[
                "From 2023 - Now = Freelance Software Developer",
                " Nov 2020 - Dec 2022 = Project Manager",
                "Aug 2017 - Nov 2020 = WordPress Front-end Developer",
              ]}
            />

            <InfoCard
              title="Education"
              content={[
                "2023 : Software Engineering Certificate - University of Toronto - Canada",
                "2017-2019 : Master of Architectural Engineering - Mazandaran University - Iran ",
                "2012-2016 : Bachelore of Architectural Engineering - Mazandaran University - Iran",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable InfoCard component
function InfoCard({ title, content }) {
  return (
    <div className="relative flex items-start space-x-4">
      <div className="absolute bg-black border-4 md:w-5/12 border-custom-font rounded-xl md:px-2 md:py-2 lg:w-4/12  xl:w-3/12 md:-left-24 md:top-6">
        <h2 className="font-bold text-2xl text-custom-font p-1 md:h-1/6">
          {title}
        </h2>
      </div>
      <div className="bg-custom-font text-md text-start text-black p-4  rounded-md w-full md:pl-16 lg:pl-20">
        {content.map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeDesktop;
