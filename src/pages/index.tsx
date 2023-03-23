import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
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
                    className="before:opacity-0 before:translate-x-[20px] hover:before:opacity-100 hover:before:translate-x-0 hover:before:translate-y-0 before:mr-[8px] before:content-['['] before:inline-block before:transition-all after:opacity-0 after:translate-x-[-20px]  hover:after:opacity-100 hover:after:translate-x-0 after:translate-y-0 after:ml-[8px] after:content-[']'] after:inline-block after:transition-all duration-[0.3s] ease-in-out before:text-[#00ffff] after:text-[#00ffff]  px-[5px] py-[15px] flex items-center text-[16px] capitalize  font-[500] leading-snug text-[#fff] hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="before:opacity-0 before:translate-x-[20px] hover:before:opacity-100 hover:before:translate-x-0 hover:before:translate-y-0 before:mr-[8px] before:content-['['] before:inline-block before:transition-all after:opacity-0 after:translate-x-[-20px]  hover:after:opacity-100 hover:after:translate-x-0 after:translate-y-0 after:ml-[8px] after:content-[']'] after:inline-block after:transition-all duration-[0.3s] ease-in-out before:text-[#00ffff] after:text-[#00ffff] px-[5px] py-[15px] flex items-center text-[16px] capitalize  font-[500] leading-snug text-[#fff] hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">Demos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section
          id="home"
          className="relative py-[110px] bg-cover bg-no-repeat h-fit bg-[url('/images/header-bg/demo-bg.png')]"
        >
          <div className="table w-full h-full">
            <div className="table-cell align-middle">
              <div className="container mx-auto px-[15px]">
                <div className="row">
                  <div className="md:w-1/2 pr-4 pl-4">
                    <div className="banner_content text-left mt-30">
                      <span className="text-[#00ffff] text-[18px] font-bold">
                        HLS AI Startup & Chabot Template
                      </span>
                      <h1 className="cd-headline clip">
                        {/* <span className="font-[500] block py-[0.2em] text-[#fff] text-[52px]">
                          Best AI Template for
                        </span>
                        <span className="cd-words-wrapper text-[#00ffff] text-[52px]">
                          <b className="is-visible font-[800]">
                            Ai Digital Marketing
                          </b>
                          <b className="font-[800]">Ai Chatbot Business</b>
                          <b className="font-[800]">Machine Learning</b>
                        </span> */}
                      </h1>
                      <p className="text-[18px] leading-[1.7] text-[#dbe3e3]">
                        Standalone template for all your future-ready AI
                        startups. It includes areas like Chabots, Rpbotics
                        Industry, AI for Marketing incorporates inner pages like
                        pricing, blog, contact, about us and more.....
                      </p>
                      <div className=" mt-[60px] h-[66px]">
                        <a
                          href="#0"
                          className="block md:inline max-w-[167px] text-[#fff] text-[14px]  mt-[30px] border-[1px] border-solid border-[#00ffff] capitalize py-[23px] px-[40px] tracking-[0.6px] font-[600] rounded-[0] mr-[10px] min-w-[175px] bg-[url('/images/elements/button-after.png')] bg-center bg-right-bottom leading-[10px] transition-all duration-[0.3] ease-in-out relative"
                        >
                          <span>View Demos</span>
                        </a>
                        <a
                          href="#0"
                          className="block md:inline max-w-[167px] text-[#fff] text-[14px]  mt-[30px] border-[1px] border-solid border-[#00ffff] capitalize py-[23px] px-[40px] tracking-[0.6px] font-[600] rounded-[0] mr-[10px] min-w-[175px] bg-[url('/images/elements/button-after.png')] bg-center bg-right-bottom leading-[10px] transition-all duration-[0.3] ease-in-out relative"
                        >
                          <span>Purchase Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mouse_scroll ">
            <a href="#about" className="smoothScroll">
              <div className="mouse mx-auto w-[22px] h-[42px] mt-[-40px] animate-finger text-[30px] font-[300] text-[#00ffff]">
                <FontAwesomeIcon icon={faAnglesDown} />
              </div>
            </a>
          </div>
        </section>

        <section className="pt-[100px] pb-[70px] " id="demo">
          <div className="container mx-auto px-[15px">
            <div className="section_heading pb-[100px] text-center after:absolute after:content-[''] after:blocl after:h-[30px] after:w-[3px] after:left-[50%] after:bg-[#000] after:-translate-x-1/2">
              <h2 className="text-[40px] font-[600] text-[#000] mb-[10px]">
                HLS Demos
              </h2>
              <p className="mb-[20px] max-w-[530px] mx-auto ">
                Our template will be a perfect platform for presenting your AI
                agency. This Landing Page comes in great and clean design
              </p>
            </div>
            <div className="row text-center flex flex-wrap">
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-1.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-2.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-3.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full mt-[32px]">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-4.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full mt-[32px]">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-5.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full mt-[32px]">
                <a href="index-1.html" target="_blank" className="w-full">
                  <div className="demo-item w-full hover:shadow-[0_-1px_30px_rgba(0,0,0,0.1)]">
                    <div className="demo-img relative w-full h-[597px]">
                      <Image fill src="/images/demos/index-6.png" alt="s" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="p-[70px] relative bg-cover bg-[url('/images/footer-bg.png')]">
          <div className="container mx-auto px-[15px">
            <div className="row text-center">
              <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="sub_title">
                  <a href="#">
                    <span className="relative font-[400] text-[#dbe3e3] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:bg-[#00FFFF] after:rounded-full">
                      Home
                    </span>{" "}
                  </a>
                  <a href="#">
                    <span className="relative font-[400] text-[#dbe3e3] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:bg-[#00FFFF] after:rounded-full">
                      About Us
                    </span>
                  </a>
                  <a href="#">
                    <span className="relative font-[400] text-[#dbe3e3] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:bg-[#00FFFF] after:rounded-full">
                      Technology
                    </span>{" "}
                  </a>
                  <a href="#">
                    <span className="relative font-[400] text-[#dbe3e3] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:bg-[#00FFFF] after:rounded-full">
                      Products
                    </span>{" "}
                  </a>
                  <a href="#">
                    <span className="relative font-[400] text-[#dbe3e3] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:bg-[#00FFFF] after:rounded-full">
                      Services
                    </span>{" "}
                  </a>
                </div>
                <ul className="my-[35px] list-none">
                  <li className="inline-block mx-[5px] ">
                    <a
                      href="#00"
                      className="relative block w-[45px] h-[45px] text-[#dbe3e3] text-[22px] leading-[45px] rounded-full border-[1px] border-solid border-[#1fe482] no-underline duration-[0.3s] hover:text-[#1fe482] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="inline-block mx-[5px] ">
                    <a
                      href="#00"
                      className="relative block w-[45px] h-[45px] text-[#dbe3e3] text-[22px] leading-[45px] rounded-full border-[1px] border-solid border-[#1fe482] no-underline duration-[0.3s] hover:text-[#1fe482] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="inline-block mx-[5px] ">
                    <a
                      href="#00"
                      className="relative block w-[45px] h-[45px] text-[#dbe3e3] text-[22px] leading-[45px] rounded-full border-[1px] border-solid border-[#1fe482] no-underline duration-[0.3s] hover:text-[#1fe482] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className="inline-block mx-[5px] ">
                    <a
                      href="#00"
                      className="relative block w-[45px] h-[45px] text-[#dbe3e3] text-[22px] leading-[45px] rounded-full border-[1px] border-solid border-[#1fe482] no-underline duration-[0.3s] hover:text-[#1fe482] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="inline-block mx-[5px] ">
                    <a
                      href="#00"
                      className="relative block w-[45px] h-[45px] text-[#dbe3e3] text-[22px] leading-[45px] rounded-full border-[1px] border-solid border-[#1fe482] no-underline duration-[0.3s] hover:text-[#1fe482] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0"
                    >
                      <FontAwesomeIcon icon={faBehance} />
                    </a>
                  </li>
                </ul>
                <p className="text-[#fff]">
                  CopyRight © 2023 All Rights Reserved
                </p>
              </div>{" "}
              {/* END COL */}
            </div>{" "}
            {/*- END ROW */}
          </div>{" "}
          {/*- END CONTAINER */}
        </footer>
      </main>
    </>
  );
}
