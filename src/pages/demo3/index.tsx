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
import { ScrollButton } from "@/components/ScrollButton";
import { useEffect, useState } from "react";
import { PreLoader } from "@/components/Preloader";

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
    iconUrl: "/images/demo3/demo3-step1.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo3/demo3-step2.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo3/demo3-step3.svg",
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
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
  {
    title: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv2.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
  {
    title: "AI-Based Investments",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv3.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
  {
    title: "System Automation",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv4.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
  {
    title: "Targeted AI Merketing",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv5.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
  {
    title: "Mobile Security",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv6.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#000] text-[#000] hover:text-[#5a5a5a]",
  },
];
const listBlogItem = [
  {
    id: 1,
    title: "Beautiful Working Idea.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/1.svg",
    type: "Lifestyle",
    textColor: "text-[#FFC90B]",
    iconColor: "#FFC90B",
    buttonClassName: "text-[#000] border-[#000] hover:text-[#5a5a5a]",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/2.svg",
    type: "Lifestyle",
    textColor: "text-[#FFC90B]",
    iconColor: "#FFC90B",
    buttonClassName: "text-[#000] border-[#000] hover:text-[#5a5a5a]",
  },
  {
    id: 3,
    title: "Latest Business strategies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/blog/3.svg",
    type: "Lifestyle",
    textColor: "text-[#FFC90B]",
    iconColor: "#FFC90B",
    buttonClassName: "text-[#000] border-[#000] hover:text-[#5a5a5a]",
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timerId);
  }, []);
  if (loading) {
    return <PreLoader loading={loading} />;
  }

  return (
    <>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
        <Navbar activeId={activeId} />
        <Banner
          className={`bg-[url('/images/demo3/demo3-header-bg.svg')]`}
          title="Automated Chatbot to grow Business!"
          title2="Get Closer look how Business Develop in"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
          titleColor="text-[#FFC90B]"
          title2Color="text-[#fff]"
          descColor="text-[#fff]"
          hasBefore
          beforeColor="before:bg-[#FFC90B]"
          animationTextColor="text-[#FFC90B]"
        />
        <section className="relative pb-[70px] pt-[100px]">
          <div className="relative mx-auto xl:w-[1170px]">
            <HeadTitle
              title="How It Works"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
              titleColor="text-[#000]"
              descColor="text-[#000]"
              separateColor="after:bg-[#FFC90B]"
            />
            <SmallSection listSmallSectionItem={listSmallSectionItem} />
          </div>
        </section>
        <AboutUs
          imageSrc="images/demo3/demo3-about-us.svg"
          beforeColor="before:bg-[#FFC90B]"
          titleColor="text-[#FFC90B]"
          aboutUsClassName="bg-[#000]"
        />
        <WhyChooseUs bgImg="bg-[url('/images/demo3/demo3-why-choose-us.svg')]" />
        <CounterSection
          itemList={itemList}
          beforeColor="before:bg-[#FFC90B]"
          titleColor="text-[#FFC90B]"
        />
        <AboutBanner
          imageUrl="images/demo3/demo3-about.svg"
          titleColor="text-[#FFC90B]"
          beforeColor="before:bg-[#FFC90B]"
          title2Color="text-[#fff]"
          descColor="text-[#fff]"
          itemColor="text-[#fff]"
          bgColor="bg-[#000]"
          firstColor="#fff"
          secondColor="#FFC90B"
          textButtonColor="text-[#000]"
          borderButtonColor="border-[#fff]"
          buttonClassName="bg-[#fff] hover:text-[#FFC90B]"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
        />
        <section
          id="service"
          className="relative pb-[70px] pt-[100px] bg-[url(/images/demo3/demo3-our-main-services.svg)] bg-cover"
        >
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
              dotSliderColor="bg-[#FFC90B]"
            />
          </div>
        </section>
        <WhatClientsSaying dotSliderColor="bg-[#FFC90B]" />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm
          imgSrc="/images/demo3/demo3-contact-form.svg"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
          titleColor="text-[#FFC90B]"
          inputClassName="bg-[#F4F4F4]"
          textareaClassName="bg-[#F4F4F4]"
          buttonClassName="border-[#000] text-[#000] hover:text-[#5a5a5a]"
        />
        <Footer
          className="bg-[url('/images/demo3/demo-3-footer-bg.svg')]"
          linkClassName="after:bg-[#FFC90B] text-[#fff] hover:text-[#dbe3e3]"
          socialItemClassName="text-[#FFC90B] border-[#FFC90B] hover:text-[#FFC90B]"
        />
        <ScrollButton />
      </main>
    </>
  );
}
