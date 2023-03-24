import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner";
import { CounterSection } from "@/components/Counter";
import { AboutBanner } from "@/components/About";
import { HeadTitle } from "@/components/HeadTitle";
import { SmallSection } from "@/components/SmallSection";
import { AboutUs } from "@/components/About/about-us";
import { OutMainServicesSlider } from "@/components/OurMainServicesSlider";
import { WhatClientsSaying } from "@/components/WhatClientsSaying";
import { Blogs } from "@/components/Blogs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

config.autoAddCss = false;
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
const listSmallSectionItem = [
  {
    id: 1,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/step1.svg",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/step2.svg",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/step3.svg",
  },
];
const listOurMainServices = [
  {
    title: "AI Business Training",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv1.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
  {
    title: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv2.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
  {
    title: "AI-Based Investments",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv3.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
  {
    title: "System Automation",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv4.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
  {
    title: "Targeted AI Merketing",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv5.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
  {
    title: "Mobile Security",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv6.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
  },
];
const listBlogItem = [
  {
    id: 1,
    title: "Beautiful Working Idea.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/1.svg",
    type: "Lifestyle",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/2.svg",
    type: "Lifestyle",
  },
  {
    id: 3,
    title: "Latest Business strategies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/3.svg",
    type: "Lifestyle",
  },
];

export default function Home() {
  return (
    <>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
        <Navbar />
        <Banner
          className={`bg-[url('/images/header-bg/header-4.svg')]`}
          title="Get Ready! AI Soluation to Improve Business Growth"
          title2="AI Solutions to more Business profit in"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
        />
        <CounterSection itemList={itemList} />
        <AboutBanner />
        <section className="pb-[70px]" id="demo">
          <div className="container mx-auto px-[15px] xl:w-[1170px]">
            <HeadTitle
              title="HLS Business Solutions"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie, justo nec convallis sollicitudin."
            />
            <div className="flex flex-wrap items-center justify-center text-center mx-auto">
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
          <div className="relative mx-auto xl:w-[1170px]">
            <HeadTitle
              title="HLS Business Solutions"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#fff]"
              descColor="text-[#fff]"
              separateColor="after:bg-[#00B0FE]"
            />
            <SmallSection listSmallSectionItem={listSmallSectionItem} />
          </div>
        </section>
        <AboutUs />

        <section className="relative pb-[70px] pt-[100px] bg-[url(/images/header-bg/serv-bg.svg)] bg-cover">
          <div className="relative mx-auto xl:w-[1170px]">
            <HeadTitle
              title="Our Main Services"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#fff]"
              descColor="text-[#fff]"
              separateColor="after:bg-[#00B0FE]"
            />
            <OutMainServicesSlider listOurMainServices={listOurMainServices} />
          </div>
        </section>
        <WhatClientsSaying />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
