import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "../Button";

export const Banner = ({ className, title, title2, desc }) => {
  return (
    <section
      id="home"
      className={`relative py-[110px] bg-cover bg-no-repeat h-fit ${className}`}
    >
      <div className="table w-full h-full">
        <div className="table-cell align-middle">
          <div className="container mx-auto px-[15px]">
            <div className="row">
              <div className="md:w-1/2 pr-4 pl-4">
                <div className="banner_content text-left mt-30">
                  <span className="text-[#00ffff] text-[18px] font-bold">
                    {title}
                  </span>
                  <h1 className="cd-headline clip">
                    <span className="font-[500] block py-[0.2em] text-[#fff] text-[52px] leading-[50px]">
                      {title2}
                    </span>
                    {/* <span className="cd-words-wrapper text-[#00ffff] text-[52px]">
                    <b className="is-visible font-[800]">
                      Ai Digital Marketing
                    </b>
                    <b className="font-[800]">Ai Chatbot Business</b>
                    <b className="font-[800]">Machine Learning</b>
                  </span> */}
                  </h1>
                  <p className="text-[18px] leading-[1.7] text-[#dbe3e3]">
                    {desc}
                  </p>
                  <div className=" h-[66px]">
                    <LinkButton text="Our Services" />
                    <LinkButton text="Contact Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse_scroll ">
        <a href="#about" className="smoothScroll">
          <div className="mouse mx-auto w-[22px] h-[42px] mt-[-40px] animate-finger text-[30px] font-[300] text-[#00ffff]">
            <FontAwesomeIcon icon={faAnglesDown} />
          </div>
        </a>
      </div>
    </section>
  );
};
