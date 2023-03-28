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
import { Solutions } from "@/components/Solutions";

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
    iconUrl: "/images/demo6/demo6-step1.svg",
    borderBColor: "border-b-[#76609E]",
  },
  {
    id: 2,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo6/demo6-step2.svg",
    borderBColor: "border-b-[#76609E]",
  },
  {
    id: 3,
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/demo6/demo6-step3.svg",
    borderBColor: "border-b-[#76609E]",
  },
];
const listOurMainServices = [
  {
    title: "AI Business Training",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv1.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#76609E] text-[#76609E]",
  },
  {
    title: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv2.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#76609E] text-[#76609E]",
  },
  {
    title: "AI-Based Investments",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv3.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#76609E] text-[#76609E]",
  },
  {
    title: "System Automation",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv4.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#76609E] text-[#76609E]",
  },
  {
    title: "Targeted AI Merketing",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv5.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassName: "border-[#76609E] text-[#76609E]",
  },
  {
    title: "Mobile Security",
    desc: "Lorem ipsum dolor sit amet, adipiscing elit. Integer tellus estt congue sed dolor sit amet, adipis dolor sit amet.",
    iconUrl: "/images/elements/serv6.png",
    buttonText: "Learn More",
    className: "md:w-full sm:w-full",
    buttonClassname: "border-[#76609E] text-[#76609E]",
  },
];
const listBlogItem = [
  {
    id: 1,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo6/demo-6-blog-1.svg",
    type: "Lifestyle",
    textColor: "text-[#76609E]",
    iconColor: "#76609E",
    buttonClassName: "text-[#76609E] border-[#76609E]",
  },
  {
    id: 2,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo6/demo-6-blog-2.svg",
    type: "Lifestyle",
    textColor: "text-[#76609E]",
    iconColor: "#76609E",
    buttonClassName: "text-[#76609E] border-[#76609E]",
  },
  {
    id: 3,
    title: "Drive Traffic to Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    imageUrl: "images/demo6/demo-6-blog-3.svg",
    type: "Lifestyle",
    textColor: "text-[#76609E]",
    iconColor: "#76609E",
    buttonClassName: "text-[#76609E] border-[#76609E]",
  },
];
const listSolution = [
  {
    id: 1,
    text: "Fully Reponsive",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: "border-b-[#AF9EE2]",
  },
  {
    id: 2,
    text: "Awards Win",
    imgSrc: "/images/demo4/demo-4-solution-item-2.svg",
    className: "border-b-[#AF9EE2]",
  },
  {
    id: 3,
    text: "24/7 Support",
    imgSrc: "/images/demo4/demo-4-solution-item-3.svg",
    className: "border-b-[#AF9EE2]",
  },
  {
    id: 4,
    text: "Happy Clients",
    imgSrc: "/images/demo4/demo-4-solution-item-1.svg",
    className: "border-b-[#AF9EE2]",
  },
  {
    id: 5,
    text: "Fully Responsive",
    imgSrc: "/images/demo4/demo-4-solution-item-4.svg",
    className: "border-b-[#AF9EE2]",
  },
];

export default function Home() {
  return (
    <>
      <main className="text-[#666] text-[15px] leading-[1.8] font-[300] tracking-[0.5px]">
        <Navbar />
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
          buttonClassName="text-[#fff] bg-[#76609E]"
        />
        <AboutBanner
          imageUrl="images/demo5/demo5-about.svg"
          titleColor="text-[#76609E]"
          beforeColor="before:bg-[#76609E]"
          title2Color="text-[#000]"
          descColor="text-[#666666]"
          itemColor="text-[#666666]"
          bgColor="bg-[#F5F5F5]"
          firstColor="#AF9EE2"
          secondColor="#76609E"
          textButtonColor="text-[#000]"
          borderButtonColor="border-[#fff]"
          buttonClassName="bg-[#fff]"
          squareClassName="before:bg-[url('/images/demo6/square-purple.svg')]"
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
          beforeColor="before:bg-[#76609E]"
          titleColor="text-[#76609E]"
          aboutUsClassName="bg-[#76609E]"
          buttonClassName="text-[#76609E] border-[#76609E]"
        />
        <WhyChooseUs
          bgImg="bg-[url('/images/demo6/demo6-why-choose-us.svg')]"
          titleColor="text-[#00B0FE]"
          bgClassName=""
        />
        <CounterSection
          itemList={itemList}
          beforeColor="before:bg-[#00B0FE]"
          titleColor="text-[#00B0FE]"
        />
        <section className="relative pb-[70px] pt-[100px] bg-[url(/images/demo6/demo6-our-main-services.svg)] bg-cover">
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
              dotSliderColor="bg-[#76609E]"
            />
          </div>
        </section>
        <WhatClientsSaying dotSliderColor="bg-[#76609E]" />
        <Blogs listBlogItem={listBlogItem} />
        <ContactForm
          imgSrc="/images/demo6/demo6-contact-form.svg"
          squareClassName="before:bg-[url('/images/demo3/square-grey.svg')]"
          titleColor="text-[#76609E]"
          inputClassName="bg-[#F0F1FD]"
          textareaClassName="bg-[#F0F1FD]"
          buttonClassName="border-[#76609E] text-[#76609E]"
        />
        <Footer
          className="bg-[url('/images/demo6/demo-6-footer-bg.svg')]"
          linkClassName="after:bg-[#76609E] text-[#000]"
          socialItemClassName="text-[#fff] border-[#fff] hover:text-[#000]"
          coppyRightClassName= 'text-[#000]'
        />
      </main>
    </>
  );
}
