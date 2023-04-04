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
import { Solutions } from "@/components/Solutions";
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
    iconUrl: "/images/demo4/demo4-step1.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo4/demo4-step2.svg",
    borderBColor: "border-b-[#666666]",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo4/demo4-step3.svg",
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
    buttonClassName: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
  {
    title: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv2.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
  {
    title: "AI-Based Investments",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv3.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
  {
    title: "System Automation",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv4.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
  {
    title: "Targeted AI Merketing",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv5.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
  {
    title: "Mobile Security",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv6.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassname: 'border-[#E28D23] text-[#E28D23] hover:text-[#000]'
  },
];
const listBlogItem = [
  {
    id: 1,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-1.svg",
    type: "Lifestyle",
    textColor: "text-[#E28D23]",
    iconColor: "#E28D23",
    buttonClassName: "text-[#E28D23] border-[#E28D23] hover:text-[#000]",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-2.svg",
    type: "Lifestyle",
    textColor: "text-[#E28D23]",
    iconColor: "#E28D23",
    buttonClassName: "text-[#E28D23] border-[#E28D23] hover:text-[#000]",
  },
  {
    id: 3,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-3.svg",
    type: "Lifestyle",
    textColor: "text-[#E28D23]",
    iconColor: "#E28D23",
    buttonClassName: "text-[#E28D23] border-[#E28D23] hover:text-[#000]",
  },
];
const listSolution = [
  {
    id: 1,
    text: "Fully Reponsive",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: 'border-b-[#000]'
  },
  {
    id: 2,
    text: "Awards Win",
    imgSrc: "/images/demo4/demo-4-solution-item-2.svg",
    className: 'border-b-[#000]'
  },
  {
    id: 3,
    text: "24/7 Support",
    imgSrc: "/images/demo4/demo-4-solution-item-3.svg",
    className: 'border-b-[#000]'
  },
  {
    id: 4,
    text: "Happy Clients",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: 'border-b-[#000]'
  },
  {
    id: 5,
    text: "Fully Responsive",
    imgSrc: "/images/demo4/demo-4-solution-item-4.svg",
    className: 'border-b-[#000]'
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
        <Navbar activeId={activeId}/>
        <Banner
          className={`bg-[url('/images/demo4/demo4-header-bg.svg')]`}
          title="Automated Chatbot to grow Business!"
          title2="Get Closer look how Business Develop in"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
          titleColor="text-[#000]"
          title2Color="text-[#fff]"
          descColor="text-[#fff]"
          hasBefore
          beforeColor="before:bg-[#000]"
        />
        <div className="my-[144px]">
          <AboutUs
            imageSrc="images/demo4/demo4-about-us.svg"
            beforeColor="before:bg-[#FFC90B]"
            titleColor="text-[#FFC90B]"
            aboutUsClassName="bg-[#E28D23]"
          />
        </div>
        <WhyChooseUs
          bgImg="bg-[url('/images/demo4/demo4-why-choose-us.svg')]"
          titleColor="text-[#00B0FE]"
          bgClassName=""
        />
        <CounterSection
          itemList={itemList}
          beforeColor="before:bg-[#00B0FE]"
          titleColor="text-[#00B0FE]"
        />
        <section className="relative pb-[70px] pt-[100px] before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-[70%] before:bg-[url(/images/demo4/demo4-how-it-works-bg.svg)] before:bg-no-repeat before:bg-[bottom_center]">
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
        <AboutBanner
          imageUrl="images/demo4/demo4-about.svg"
          titleColor="text-[#E28D23]"
          beforeColor="before:bg-[#E28D23]"
          title2Color="text-[#000]"
          descColor="text-[#666666]"
          itemColor="text-[#666666]"
          bgColor="bg-[#F5F5F5]"
          firstColor="#F6DC00"
          secondColor="#E28D23"
          textButtonColor="text-[#000]"
          borderButtonColor="border-[#fff]"
          buttonClassName="bg-[#fff] hover:text-[#E28D23]"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
        />
        <section className="pb-[70px]" id="demo">
          <div className="container mx-auto px-[15px] xl:w-[1170px]">
            <HeadTitle
              title="HLS Business Solutions"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie, justo nec convallis sollicitudin."
            />
            <Solutions listSolution={listSolution} />
          </div>
        </section>
        <section id="service" className="relative pb-[70px] pt-[100px] bg-[url(/images/demo4/demo4-our-main-services.svg)] bg-cover">
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
              dotSliderColor="bg-[#00B0FE]"
            />
          </div>
        </section>
        <WhatClientsSaying dotSliderColor="bg-[#E28D23]" />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm
          imgSrc="/images/demo4/demo4-contact-form.svg"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
          titleColor="text-[#E28D23]"
          inputClassName="bg-[#F4F4F4]"
          textareaClassName="bg-[#F4F4F4]"
          buttonClassName="border-[#E28D23] text-[#E28D23] hover:text-[#000]"
        />
        <Footer
          className="bg-[url('/images/demo4/demo-4-footer-bg.svg')]"
          linkClassName="after:bg-[#E28D23] text-[#fff] hover:text-[#dbe3e3]"
          socialItemClassName="text-[#E28D23] border-[#E28D23] hover:text-[#E28D23]"
        />
        <ScrollButton />
      </main>
    </>
  );
}
