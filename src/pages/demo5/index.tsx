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
    iconUrl: "/images/demo5/demo5-step1.svg",
    borderBColor: "border-b-[#68A0E9]",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo5/demo5-step2.svg",
    borderBColor: "border-b-[#68A0E9]",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo5/demo5-step3.svg",
    borderBColor: "border-b-[#68A0E9]",
  },
];
const listOurMainServices = [
  {
    title: "AI Business Training",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv1.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#68A0E9] text-[#68A0E9]",
  },
  {
    title: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv2.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#68A0E9] text-[#68A0E9]",
  },
  {
    title: "AI-Based Investments",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv3.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#68A0E9] text-[#68A0E9]",
  },
  {
    title: "System Automation",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv4.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#68A0E9] text-[#68A0E9]",
  },
  {
    title: "Targeted AI Merketing",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv5.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#68A0E9] text-[#68A0E9]",
  },
  {
    title: "Mobile Security",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv6.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassname: "border-[#68A0E9] text-[#68A0E9]",
  },
];
const listBlogItem = [
  {
    id: 1,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-1.svg",
    type: "Lifestyle",
    textColor: "text-[#68A0E9]",
    iconColor: "#68A0E9",
    buttonClassName: "text-[#68A0E9] border-[#68A0E9]",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-2.svg",
    type: "Lifestyle",
    textColor: "text-[#68A0E9]",
    iconColor: "#68A0E9",
    buttonClassName: "text-[#68A0E9] border-[#68A0E9]",
  },
  {
    id: 3,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo4/demo-4-blog-3.svg",
    type: "Lifestyle",
    textColor: "text-[#68A0E9]",
    iconColor: "#68A0E9",
    buttonClassName: "text-[#68A0E9] border-[#68A0E9]",
  },
];
const listSolution = [
  {
    id: 1,
    text: "Fully Reponsive",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: "border-b-[#000]",
  },
  {
    id: 2,
    text: "Awards Win",
    imgSrc: "/images/demo4/demo-4-solution-item-2.svg",
    className: "border-b-[#000]",
  },
  {
    id: 3,
    text: "24/7 Support",
    imgSrc: "/images/demo4/demo-4-solution-item-3.svg",
    className: "border-b-[#000]",
  },
  {
    id: 4,
    text: "Happy Clients",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: "border-b-[#000]",
  },
  {
    id: 5,
    text: "Fully Responsive",
    imgSrc: "/images/demo4/demo-4-solution-item-4.svg",
    className: "border-b-[#000]",
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
        <Navbar activeId={activeId}/>
        <Banner
          className={`bg-[url('/images/demo5/demo5-header-bg.svg')]`}
          title="Automated Chatbot to grow Business!"
          title2="Get Closer look how Business Develop in"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis."
          titleColor="text-[#000]"
          title2Color="text-[#666666]"
          descColor="text-[#666666]"
          hasBefore
          beforeColor="before:bg-[#000]"
          buttonClassName="text-[#fff] bg-[#68A0E9]"
        />
        <section className="py-[144px]" id="demo">
          <div className="container mx-auto px-[15px] xl:w-[1170px]">
            <HeadTitle
              title="HLS Business Solutions"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie, justo nec convallis sollicitudin."
            />
            <Solutions listSolution={listSolution} />
          </div>
        </section>
        <AboutBanner
          imageUrl="images/demo5/demo5-about.svg"
          titleColor="text-[#68A0E9]"
          beforeColor="before:bg-[#68A0E9]"
          title2Color="text-[#000]"
          descColor="text-[#666666]"
          itemColor="text-[#666666]"
          bgColor="bg-[#F5F5F5]"
          firstColor="#AAC9F1"
          secondColor="#68A0E9"
          textButtonColor="text-[#000]"
          borderButtonColor="border-[#fff]"
          buttonClassName="bg-[#fff]"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
        />
        <section className="relative pb-[70px] pt-[100px] before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-[70%] before:bg-[url(/images/demo5/demo5-how-it-works-bg.svg)] before:bg-no-repeat before:bg-[bottom_center]">
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
          imageSrc="images/demo5/demo5-about-us.svg"
          beforeColor="before:bg-[#68A0E9]"
          titleColor="text-[#68A0E9]"
          aboutUsClassName="bg-[#68A0E9]"
          buttonClassName="text-[#68A0E9] border-[#68A0E9]"
        />
        <WhyChooseUs
          bgImg="bg-[url('/images/demo5/demo5-why-choose-us.svg')]"
          titleColor="text-[#00B0FE]"
          bgClassName=""
        />
        <CounterSection
          itemList={itemList}
          beforeColor="before:bg-[#00B0FE]"
          titleColor="text-[#00B0FE]"
        />
        <section id="service" className="relative pb-[70px] pt-[100px] bg-[url(/images/demo5/demo5-our-main-services.svg)] bg-cover">
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
        <WhatClientsSaying dotSliderColor="bg-[#68A0E9]" />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm
          imgSrc="/images/demo5/demo5-contact-form.svg"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
          titleColor="text-[#68A0E9]"
          inputClassName="bg-[#F2FBFF]"
          textareaClassName="bg-[#F2FBFF]"
          buttonClassName="border-[#68A0E9] text-[#68A0E9]"
        />
        <Footer
          className="bg-[url('/images/demo5/demo-5-footer-bg.svg')]"
          linkClassName="after:bg-[#68A0E9] text-[#000]"
          socialItemClassName="text-[#68A0E9] border-[#68A0E9] hover:text-[#68A0E9]"
          coppyRightClassName="text-[#000]"
        />
      </main>
    </>
  );
}
