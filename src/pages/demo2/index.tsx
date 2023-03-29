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
import { WhyChooseUs } from "@/components/WhyChooseUs";
import "wowjs/css/libs/animate.css";
import { useScrollspy } from "@/hook/useCrollspy";

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
    iconUrl: "/images/elements/step1_demo2.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/step2_demo2.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/step3_demo2.svg",
    borderBColor: "border-b-[#666666]",
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
    textColor: "text-[#6F45EE]",
    iconColor: "#6F45EE",
    buttonClassName: "text-[#000] border-[#000]",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/2.svg",
    type: "Lifestyle",
    textColor: "text-[#6F45EE]",
    iconColor: "#6F45EE",
    buttonClassName: "text-[#000] border-[#000]",
  },
  {
    id: 3,
    title: "Latest Business strategies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/3.svg",
    type: "Lifestyle",
    textColor: "text-[#6F45EE]",
    iconColor: "#6F45EE",
    buttonClassName: "text-[#000] border-[#000]",
  },
];

export default function Home() {
  if (typeof window !== "undefined") {
    const WOW = require("wowjs");
    new WOW.WOW({
      live: false,
    }).init();
  }
  const ids = ["home", "about", "service", "work", "resume", "blog", "contact"];
  const activeId = useScrollspy(ids, 91.95);

  return (
    <>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
        <Navbar activeId={activeId} />
        <Banner
          className={`bg-[url('/images/header-bg/demo2-header-bg.svg')]`}
          title="Automated Chatbot to grow Business!"
          title2="HLS Artificial
          Startup Agency for"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
          titleColor="text-[#FF94AC]"
          title2Color="text-[#fff]"
          descColor="text-[#fff]"
          hasBefore
          beforeColor="before:bg-[#FF94AC]"
          animationTextColor="text-[#FF94AC]"
        />
        <AboutBanner
          imageUrl="images/demo2_about.svg"
          titleColor="text-[#6F45EE]"
          beforeColor="before:bg-[#6F45EE]"
          title2Color="text-[#000]"
          descColor="#666666"
          itemColor="text-[#666666]"
          bgColor="bg-[#fff]"
          firstColor="#AF9EE2"
          secondColor="#6F45EE"
          textButtonColor="text-[#000]"
          borderButtonColor="border-[#000]"
          squareClassName="before:bg-[url('/images/square-purple.svg')]"
        />

        <section className="relative pb-[70px] pt-[100px]">
          <div className="relative mx-auto xl:w-[1170px]">
            <HeadTitle
              title="How It Works"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#000]"
              descColor="text-[#000]"
              separateColor="after:bg-[#6F45EE]"
            />
            <SmallSection listSmallSectionItem={listSmallSectionItem} />
          </div>
        </section>
        <AboutUs
          imageSrc="images/about-us-demo2.svg"
          beforeColor="before:bg-[#6F45EE]"
          titleColor="text-[#6F45EE]"
        />
        <WhyChooseUs bgImg="bg-[url('/images/whychooseus.svg')]" />
        <CounterSection
          itemList={itemList}
          beforeColor="before:bg-[#6F45EE]"
          titleColor="text-[#6F45EE]"
        />
        <section id="service" className="relative pb-[70px] pt-[100px] bg-[url(/images/header-bg/demo2-our-main-services.svg)] bg-cover">
          <div className="relative mx-auto xl:w-[1170px]">
            <HeadTitle
              title="Our Main Services"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#fff]"
              descColor="text-[#fff]"
              separateColor="after:bg-[#00B0FE]"
            />
            <OutMainServicesSlider
              listOurMainServices={listOurMainServices}
              dotSliderColor="bg-[#6F45EE]"
            />
          </div>
        </section>
        <WhatClientsSaying dotSliderColor="bg-[#6F45EE]" />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm
          imgSrc="/images/demo2_contact-form.svg"
          squareClassName="before:bg-[url('/images/square-purple.svg')]"
          titleColor="text-[#6F45EE]"
          inputClassName="bg-[#F4F0FF]"
          textareaClassName="bg-[#F4F0FF]"
        />
        <Footer
          className="bg-[url('/images/demo2_footer-bg.svg')]"
          linkClassName="after:bg-[#fff] text-[#fff]"
          socialItemClassName="text-[#fff] border-[#fff] hover:text-[#6F45EE]"
        />
      </main>
    </>
  );
}
