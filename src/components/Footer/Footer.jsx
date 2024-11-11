import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to the homepage and scroll after navigation
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the page renders
    } else {
      // Direct scroll if already on homepage
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="bg-black">
      <footer>
        {/*  Container  */}
        <div class="  relative container max-w-6xl py-1 mx-auto">
          {/* mobile Footer  */}
          <div class=" bg-black absolute bottom-[-8vh] md:hidden mb-8 px-7  w-full ">
            {/*  Logo  */}
            <div class="h-8 mb-8 text-center">
              <a href="#" className="text-custom-font font-bold text-2xl  ">
                {"<Mozhdeh/> "}
              </a>
            </div>
            {/*  Menu & Logo  */}
            <div class="flex flex-row items-center py-3">
              {/*  Menu  */}
              <div class=" flex flex-row items-center space-x-6 font-bold text-white m-auto">
                {/* <!-- Item 1 & 2 --> */}
                <div class=" flex flex-col space-y-2 text-sm">
                  <Link onClick={() => handleScroll("AboutMe")}>AboutMe</Link>

                  <div>
                    <Link onClick={() => handleScroll("MyProjects")}>
                      My Project
                    </Link>
                  </div>
                </div>

                {/* <!-- Item 3 & 4--> */}
                <div class=" flex flex-col space-y-2 text-sm">
                  <Link onClick={() => handleScroll("ContactMe")}>
                    ContactMe
                  </Link>

                  <div>
                    <Link to="#">MyResume</Link>
                  </div>
                </div>
              </div>
              {/*  icons  */}
              <div class="flex  mx-auto space-x-4 ">
                {/* <!-- Icon 1 --> */}
                <div class=" group">
                  <a href="#">
                    <img src="images/icon-facebook.svg" alt="" class="h-4" />
                  </a>
                </div>
                {/* <!-- Icon 2 --> */}
                <div class=" group">
                  <a href="#">
                    <img src="images/icon-twitter.svg" alt="" class="h-4" />
                  </a>
                </div>
                {/* <!-- Icon 3 --> */}
                <div class=" group">
                  <a href="#">
                    <img src="images/icon-pinterest.svg" alt="" class="h-4" />
                  </a>
                </div>
                {/* <!-- Icon 4 --> */}
                <div class=" group">
                  <a href="#">
                    <img src="images/icon-instagram.svg" alt="" class="h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/*  Copy  */}
            <div class=" font-bold text-custom-font mt-6 text-center">
              Made with Love &copy; 2024 . All Rights Reserved
            </div>
          </div>

          {/*  Footer   */}
          <div class=" hidden  md:flex items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start md:px-5 ">
            {/* <!-- Menu & Logo Container --> */}
            <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              {/* <!-- Logo --> */}
              <div class="h-8">
                <a href="#" className="text-custom-font font-bold text-2xl  ">
                  {"<Mozhdeh/> "}
                </a>
              </div>
              {/* <!-- Menu Container --> */}
              <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* <!-- Item 1 --> */}
                <div class="h-10 group">
                  <Link to="#AboutMe">AboutMe</Link>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 2 --> */}
                <div class="h-10 group">
                  <Link href="#MyProjects">My Project</Link>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 3 --> */}
                <div class="h-10 group">
                  <Link to="#ContactMe">ContactMe</Link>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* <!-- Item 4 --> */}
                <div class="h-10 group">
                  <Link href="#">MyResume</Link>
                  <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>

            {/* <!-- Social & Copy Container --> */}
            <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* <!-- icons Container --> */}
              <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                {/* <!-- Icon 1 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="images/icon-facebook.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 2 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="images/icon-twitter.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 3 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="images/icon-pinterest.svg" alt="" class="h-6" />
                  </a>
                </div>
                {/* <!-- Icon 4 --> */}
                <div class="h-8 group">
                  <a href="#">
                    <img src="images/icon-instagram.svg" alt="" class="h-6" />
                  </a>
                </div>
              </div>

              {/* <!-- Copy --> */}
              <div class="font-bold text-custom-font">
                Made with Love &copy; 2024 . All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
