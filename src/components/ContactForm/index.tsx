import Image from "next/image";

export const ContactForm = ({
  imgSrc = "images/contact-form.svg",
  squareClassName = `before:bg-[url('/images/square.svg')]`,
  titleColor = "text-[#00ccff]",
  inputClassName = "bg-[#c4fee933]",
  textareaClassName = 'bg-[#c4fee933]',
  buttonClassName = 'border-[#000] text-[#000]'
}) => {
  return (
    <section className="relative py-[100px] px-0" id="contact">
      <div className="container mx-auto px-[15px]">
        <div className="mx-[-15px]">
          <div className="md:w-1/5 pr-4 pl-4">
            <div
              className={`relative md:before:block before:hidden before:content-[''] before:absolute before:w-[400px] before:h-[400px] before:left-0 before:top-[-90px] before:bg-['center_center'] before:bg-contain before:bg-no-repeat ${squareClassName}`}
            />
          </div>
          <div className="shadow-[0px_-1px_30px_#0000001a] mx-auto overflow-visible block bg-[#fff] md:w-4/5 pr-4 pl-4">
            <div className="mx-[-15px] flex flex-wrap items-center">
              <div className="md:w-1/2 pr-4 pl-0 sm:w-full h-full">
                <div className="relative w-full h-full hover:scale-110 z-10 transition-all duration-300">
                  <Image
                    src={imgSrc}
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
                    className={`relative ${titleColor} text-[18px] font-[500]`}
                  >
                    Dedicated Artificial Intelligence
                  </h5>
                  <h3 className="text-[30px] mb-[10px] font-[600] leading-[1.3] text-[#000] mt-[20px]">
                    Contact Us Now!
                  </h3>

                  <div className="overflow-hidden p-0">
                    <form
                      id="contact-form"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <div className="mx-[-15px] ">
                        <div className="overflow-hidden text-center">
                          <div className="mb-[15px] sm:w-full pr-4 pl-4">
                            <input
                              type="text"
                              name="name"
                              className={`border-[1px] border-solid border-[#fafafa] rounded-[5px] text-[#666] shadow-none text-[15px] h-[45px] block w-full py-[6px] px-[12px] leading-[1.4] ${inputClassName}`}
                              id="first-name"
                              placeholder="Name *"
                              required={true}
                            />
                          </div>
                          <div className="mb-[15px] sm:w-full pr-4 pl-4">
                            <input
                              type="email"
                              name="email"
                              className={`border-[1px] border-solid border-[#fafafa] rounded-[5px] text-[#666] shadow-none text-[15px] h-[45px] block w-full py-[6px] px-[12px] leading-[1.4] ${inputClassName}`}
                              id="email"
                              placeholder="Email *"
                              required={true}
                            />
                          </div>
                          <div className="mb-[15px] sm:w-full pr-4 pl-4">
                            <input
                              type="text"
                              name="subject"
                              className={`border-[1px] border-solid border-[#fafafa] rounded-[5px] text-[#666] shadow-none text-[15px] h-[45px] block w-full py-[6px] px-[12px] leading-[1.4] ${inputClassName}`}
                              id="subject"
                              placeholder="Subject *"
                              required={true}
                            />
                          </div>
                          <div className="mb-[15px] sm:w-full pr-4 pl-4 mab-none">
                            <textarea
                              rows={8}
                              name="message"
                              className={`h-auto border-[1px] border-solid border-[#fafafa] rounded-[5px] text-[#666] shadow-none text-[15px] block w-full py-[6px] px-[12px] leading-[1.4] ${textareaClassName}`}
                              id="description"
                              placeholder="Your Message Here ..."
                              required={true}
                              defaultValue={""}
                            />
                          </div>
                          <div className="mb-0 sm:w-full pr-4 pl-4">
                            <div className="actions text-center">
                              <button
                                type="submit"
                                value="Send Your Message"
                                name="submit"
                                id="submitButton"
                                className={`w-full lg:w-1/2 bg-transparent border-[1px] border-solid  py-[15px] px-[50px] font-[600] mt-[29px] rounded-[30px] ${buttonClassName}`}
                                title="Click here to submit your message!"
                              >
                                Send Your Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
