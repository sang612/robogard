import { About1Icon, About2Icon, About3Icon, About4Icon } from "@/assets/icons";
import Image from "next/image";

export const AboutBanner = ({
  firstColor = "",
  secondColor = "",
  imageUrl = "images/about2.svg",
  titleColor = "text-[#00ccff]",
  beforeColor = "before:bg-[#00ccff]",
  title2Color = "text-[#00ccff]",
  descColor = "text-[#fff]",
  itemColor = "text-[#fff]",
  bgColor = "bg-[#253350]",
  textButtonColor = "text-[#00ffff]",
  borderButtonColor = "border-[#00ffff]",
  buttonClassName = "bg-transparent",
  squareClassName = "before:bg-[url('/images/square.svg')]",
}) => {
  return (
    <section className="relative py-[100px] px-0">
      <div className="container mx-auto px-[15px]">
        <div className="mx-[-15px]">
          <div className="md:w-1/5 pr-4 pl-4">
            <div className={`relative before:hidden md:before:block before:content-[''] before:bg-no-repeat before:absolute before:w-[400px] before:h-[400px] before:left-0 before:top-[-90px] before:bg-['center_center'] before:bg-contain ${squareClassName}`} />
          </div>
          <div
            className={`shadow-[0px_-1px_30px_#0000001a] mx-auto overflow-hidden block ${bgColor} md:w-4/5 pr-4 pl-4`}
          >
            <div className="mx-[-15px] flex items-center">
              <div className="md:w-1/2 pr-4 pl-0 sm:w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt="about-img"
                    width={360}
                    height={160}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4 sm:w-full no-pr">
                <div className="py-[50px] px-[15px]">
                  <h5
                    className={`relative pl-[90px] ${titleColor} text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 ${beforeColor} font-[500]`}
                  >
                    Dedicated Artificial Intelligence
                  </h5>
                  <h3
                    className={`text-[30px] mb-[10px] font-[600] leading-[1.3] ${title2Color} mt-[20px]`}
                  >
                    Get Benefits of using latest Artificial Intelligence.
                  </h3>
                  <p className={`m-0 ${descColor}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer tellus est, finibus ut congue sed, faucibus ut
                  </p>
                  <div className="mx-[-15px] mt-[30px] flex flex-wrap">
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <About1Icon
                          firstColor={firstColor}
                          secondColor={secondColor}
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                        />
                        <div className={`font-[500] ${itemColor}`}>
                          Fully Responsive &amp; obile friendly
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <About2Icon
                          firstColor={firstColor}
                          secondColor={secondColor}
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                        />
                        <div className={`font-[500] ${itemColor}`}>
                          Clean &amp; Modern Design Layout
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <About3Icon
                          firstColor={firstColor}
                          secondColor={secondColor}
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                        />
                        <div className={`font-[500] ${itemColor}`}>
                          Multi-Device Testing System
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <About4Icon
                          firstColor={firstColor}
                          secondColor={secondColor}
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                        />
                        <div className={`font-[500] ${itemColor}`}>
                          great User Experience
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about_btn">
                    <a
                      href="#0"
                      className={`font-[500] ${borderButtonColor} border-solid border-[1px] inline-block p-[15px_50px] ${textButtonColor} mt-[29px] rounded-[30px] text-center align-middle whitespace-nowrap text-[14px] ${buttonClassName}`}
                    >
                      contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
