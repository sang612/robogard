import Image from "next/image";

export const WhyChooseUs = ({
  bgImg = "",
  titleColor = "text-[#fff]",
  title2Color = "text-[#fff]",
  bgClassName = "bg-[#000] bg-opacity-30",
}) => {
  return (
    <section
      className={`${bgImg} bg-no-repeat bg-[center_center] bg-cover pb-[70px] pt-[100px] `}
    >
      <div className="mx-auto px-[15px] xl:w-[1170px]">
        <div className="flex">
          <div className={`md:w-1/2 pr-4 pl-4 sm:w-full ${bgClassName}`}>
            <div className="resume-container">
              <div className="flex flex-col">
                <div className="md:w-full pr-4 pl-4">
                  <h5
                    className={`${titleColor} text-[18px] my-[10px] font-[500] leading-[1.1]`}
                  >
                    Why Choose Us
                  </h5>
                  <h3
                    className={`${title2Color} text-[30px] mb-[30px] font-[600] leading-[1.3] mt-[20px]`}
                  >
                    <i className="icon-trophy" />
                    Core Features:
                  </h3>
                  <div
                    className="bg-[#fff] relative shadow-[0_-1px_30px_rgba(0,0,0,0.1)] block py-[30px] px-[30px] mb-[30px]"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <Image
                        src="/images/elements/i1.png"
                        width={99}
                        height={99}
                        alt="i1"
                      />
                    </div>
                    <div className="pl-[120px] ">
                      <h5 className="text-[16px] font-[700] text-[#000]">
                        Smart Analyzer of the News
                      </h5>
                      <p className="text-[#000]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim eveniet incidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                  <div
                    className="bg-[#fff] relative shadow-[0_-1px_30px_rgba(0,0,0,0.1)] block py-[30px] px-[30px] mb-[30px]"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <Image
                        src="/images/elements/i2.png"
                        width={99}
                        height={99}
                        alt="i1"
                      />
                    </div>
                    <div className="pl-[120px] ">
                      <h5 className="text-[16px] font-[700] text-[#000]">
                        Adaptive Chatbot Assistant
                      </h5>
                      <p className="text-[#000]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim eveniet incidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                  <div
                    className="bg-[#fff] relative shadow-[0_-1px_30px_rgba(0,0,0,0.1)] block py-[30px] px-[30px] mb-[30px]"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <Image
                        src="/images/elements/i3.png"
                        width={99}
                        height={99}
                        alt="i1"
                      />
                    </div>
                    <div className="pl-[120px] ">
                      <h5 className="text-[16px] font-[700] text-[#000]">
                        HLS AI Platform
                      </h5>
                      <p className="text-[#000]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim eveniet incidunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pr-4 pl-4 sm:w-full"></div>
        </div>
      </div>
    </section>
  );
};
