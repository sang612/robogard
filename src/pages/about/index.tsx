import Head from "next/head";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner";
import { CounterSection } from "@/components/Counter";
import { AboutBanner } from "@/components/About";
import { HeadTitle } from "@/components/HeadTitle";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
const itemList = [
  {
    index: 1,
    icon: "/images/icons/smile.svg",
    number: 751,
    text: "Happy Clients",
  },
  {
    index: 2,
    icon: "/images/icons/trophy.svg",
    number: 56,
    text: "Awards Received",
  },
  {
    index: 3,
    icon: "/images/icons/briefcase.svg",
    number: 478,
    text: "Successul Projects",
  },
  {
    index: 4,
    icon: "/images/icons/male.svg",
    number: 234,
    text: "Team Members",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
        <Navbar />
        <Banner
          className={`bg-[url('/images/header-bg/header-4.png')]`}
          title="Get Ready! AI Soluation to Improve Business Growth"
          title2="AI Solutions to more Business profit in"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
        />
        <CounterSection itemList={itemList} />
        <AboutBanner />
        <section className=" pb-[70px] " id="demo">
          <div className="container mx-auto px-[15px">
            <HeadTitle
              title="HLS Business Solutions"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie, justo nec convallis sollicitudin."
            />
            <div className="flex text-center mx-auto">
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat1.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">Fully Responsive.</p>
                </div>
              </div>
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat2.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">HLS Team.</p>
                </div>
              </div>
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat3.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">Awards Win.</p>
                </div>
              </div>
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat4.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">24/7 Support.</p>
                </div>
              </div>
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat5.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">Happy Clients.</p>
                </div>
              </div>
              <div className="md:w-[16.66666667%] px-[15px] sm:w-1/3 ">
                <div className="p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid border-b-[#1fe482] text-center">
                  <img
                    src="images/elements/feat6.png"
                    alt="img"
                    className="mx-auto max-w-full h-auto align-middle"
                  />
                  <p className="mt-[15px] ">Fully Responsive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-[70px] pt-[100px] before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-[70%] before:bg-[url(/images/header-bg/sec-bg.svg)] before:bg-no-repeat before:bg-[bottom_center]">
          <div className="relative mx-auto">
            <HeadTitle
              title="HLS Business Solutions"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#fff]"
              descColor="text-[#fff]"
              separateColor="after:bg-[#00B0FE]"
            />
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
