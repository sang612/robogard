import Image from "next/image";

export const AboutUs = ({
  imageSrc = "images/about1.svg",
  beforeColor = "before:bg-[#00ccff]",
  titleColor = "text-[#00ccff]",
  aboutUsClassName = 'bg-[#661eec]',
  buttonClassName = 'border-[#000] text-[#000]'
}) => {
  return (
    <section id="about" className="section_padding no-pt">
      <div className="mx-auto px-[15px] xl:w-[1170px]">
        <div className="mx-[-15px] flex relative items-center flex-wrap">
          <div className="mx-[-15px] flex">
            <div
              className="shadow-[0px_-1px_30px_#0000001a] relative overflow-visible block md:w-4/5 pr-4 pl-4 "
              style={{ background: "#fff" }}
            >
              <div className="mx-[-15px] flex items-center">
                <div className="md:w-2/5 pr-4 pl-4 sm:w-full">
                  <div className="relative h-[650px] hover:scale-110 z-10 transition-all duration-300">
                    <Image src={imageSrc} alt="about-img" fill />
                  </div>
                </div>
                <div className="md:w-1/2 pr-4 pl-4 sm:w-full">
                  <div className="py-[50px] px-[15px]">
                    <h5
                      className={`relative pl-[90px] ${titleColor} text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 ${beforeColor} font-[500]`}
                    >
                      Dedicated Artificial Intelligence
                    </h5>
                    <h3 className="text-[30px] mb-[10px] font-[600] leading-[1.3] text-[#000] mt-[20px]">
                      Get Benefits of using latest Artificial Intelligence.
                    </h3>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, adipiscing elit. Integer
                      tellus estt congue sed dolor sit amet, adipis dolor sit
                      amet. amet, adipiscing elit. Integer tellus estt congue
                      sed dolor sit amet, adipis dolor sit amet. amet,
                      adipiscing elit. Integer tellus estt congue sed dolor sit
                      amet, adipis dolor sit amet.
                    </p>
                    <div className="mt-[30px]">
                      <div className="mb-[20px]">
                        <span className="inline-block relative text-[15px] font-[600] text-[#000] w-[150px] mr-[30px] after:content-[':'] after:absolute after:right-0">
                          Company Name
                        </span>
                        Your Company Name
                      </div>
                      <div className="mb-[20px]">
                        <span className="inline-block relative text-[15px] font-[600] text-[#000] w-[150px] mr-[30px] after:content-[':'] after:absolute after:right-0">
                          Phone Number
                        </span>
                        +00 253 265 4455
                      </div>
                      <div className="mb-[20px]">
                        <span className="inline-block relative text-[15px] font-[600] text-[#000] w-[150px] mr-[30px] after:content-[':'] after:absolute after:right-0">
                          Contact Email
                        </span>
                        <a href="mailto:info@yourdomain.com">
                          info@yourdomain.com
                        </a>
                      </div>
                    </div>

                    <div className="about_btn">
                      <a
                        href="#0"
                        className={`font-[500] bg-transparent border-solid border-[1px] inline-block p-[15px_50px] mt-[29px] rounded-[30px] text-center align-middle whitespace-nowrap text-[14px] ${buttonClassName}`}
                      >
                        contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/5 pr-4 pl-4 hidden md:block">
              <div className={`relative w-[500px] h-[255px] top-[70px] left-[-233px] p-[40px] z-[-1] text-[#fff] text-[50px] rotate-90 ${aboutUsClassName}`}>
                <span className="text-[60px]">ABOUT US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
