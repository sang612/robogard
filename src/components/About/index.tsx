import Image from "next/image";

export const AboutBanner = () => {
  return (
    <section className="relative py-[100px] px-0">
      <div className="container mx-auto px-[15px]">
        <div className="mx-[-15px]">
          <div className="md:w-1/5 pr-4 pl-4">
            <div className="relative before:hidden md:before:block before:content-[''] before:absolute before:w-[400px] before:h-[400px] before:left-0 before:top-[-90px] before:bg-[url('/images/square.svg')] before:bg-['center_center'] before:bg-contain" />
          </div>
          <div className="shadow-[0px_-1px_30px_#0000001a] mx-auto overflow-hidden block bg-[#253350] md:w-4/5 pr-4 pl-4">
            <div className="mx-[-15px] flex items-center">
              <div className="md:w-1/2 pr-4 pl-0 sm:w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="images/about2.svg"
                    alt="about-img"
                    width={360}
                    height={160}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4 sm:w-full no-pr">
                <div className="py-[50px] px-[15px]">
                  <h5 className="relative pl-[90px] text-[#00ccff] text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#00ccff] font-[500]">
                    Dedicated Artificial Intelligence
                  </h5>
                  <h3 className="text-[30px] mb-[10px] font-[600] leading-[1.3] text-[#fff] mt-[20px]">
                    Get Benefits of using latest Artificial Intelligence.
                  </h3>
                  <p className="m-0 text-[#fff]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer tellus est, finibus ut congue sed, faucibus ut
                  </p>
                  <div className="mx-[-15px] mt-[30px]">
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <img
                          src="images/elements/feature-1.svg"
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                          alt="img"
                        />
                        <div className="font-[500] text-[#fff]">
                          Fully Responsive &amp; obile friendly
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <img
                          src="images/elements/feature-2.svg"
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                          alt="img"
                        />
                        <div className="font-[500] text-[#fff]">
                          Clean &amp; Modern Design Layout
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <img
                          src="images/elements/feature-3.svg"
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                          alt="img"
                        />
                        <div className="font-[500] text-[#fff]">
                          Multi-Device Testing System{" "}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4">
                      <div className="flex py-[10px] items-center text-[16px] leading-[20px] font-[700]">
                        <img
                          src="images/elements/feature-4.svg"
                          className="mr-[16px] w-[30px] h-[30px] align-middle"
                          alt="img"
                        />
                        <div className="font-[500] text-[#fff]">
                          great User Experience
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about_btn">
                    <a
                      href="#0"
                      className="bg-transparent border-[#00ffff] border-solid border-[1px] inline-block p-[15px_50px] text-[#00ffff] mt-[29px] rounded-[30px] text-center align-middle whitespace-nowrap text-[14px]"
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
