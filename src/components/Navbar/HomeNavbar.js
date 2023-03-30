import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const HomeNavbar = ({ activeId }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      className={`fixed w-full py-[20px] top-0 right-0 left-0 z-[1030] flex flex-wrap items-center justify-between ${
        colorChange ? "bg-[#0C0872]" : "lg:bg-[#00000000]"
      } bg-[#0C0872] transition-all duration-[1s] ease-in-out`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between  px-[30px] ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-[#fff] text-[22px] leading-[50px] h-[50px]  font-bold  inline-block mr-4 py-2 whitespace-nowrap  "
            href="#pablo"
          >
            RoboGard
          </a>
          <button
            className="text-[#fff] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className={`${
                  activeId === "home"
                    ? "before:opacity-100 before:translate-x-0 before:translate-y-0 after:opacity-100 after:translate-x-0"
                    : "before:translate-x-[20px] after:translate-x-[-20px] "
                } before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 hover:before:translate-y-0 before:mr-[8px] before:content-['['] before:inline-block before:transition-all after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:translate-y-0 after:ml-[8px] after:content-[']'] after:inline-block after:transition-all duration-[0.3s] ease-in-out before:text-[#fff] after:text-[#fff] px-[5px] py-[15px] flex items-center text-[16px] capitalize  font-[500] leading-snug text-[#fff] hover:opacity-75`}
                href="#home"
              >
                <span className="mx-2">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${
                  activeId === "demo"
                    ? "before:opacity-100 before:translate-x-0 before:translate-y-0 after:opacity-100 after:translate-x-0"
                    : "before:translate-x-[20px] after:translate-x-[-20px] "
                } before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 hover:before:translate-y-0 before:mr-[8px] before:content-['['] before:inline-block before:transition-all after:opacity-0 hover:after:opacity-100 hover:after:translate-x-0 after:translate-y-0 after:ml-[8px] after:content-[']'] after:inline-block after:transition-all duration-[0.3s] ease-in-out before:text-[#fff] after:text-[#fff] px-[5px] py-[15px] flex items-center text-[16px] capitalize  font-[500] leading-snug text-[#fff] hover:opacity-75`}
                href="#demo"
              >
                <span className="mx-2">Demo</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
