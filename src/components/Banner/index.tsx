import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "../Button";
import { BannerProp } from "@/type";
import { useEffect } from "react";

export const Banner = ({
  className,
  title,
  title2,
  desc,
  titleColor,
  title2Color,
  descColor = "text-[#000]",
  hasBefore,
  beforeColor = "before:bg-[#00ccff]",
  buttonClassName,
  animationTextColor = "text-[#000]",
}: BannerProp) => {
  useEffect(() => {
    const words = ["Digital Marketing", "Chatbot Business", "Machine Learning"];
    let part;
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 30;
    const speed = 50;

    const wordflick = function () {
      setInterval(function () {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        const word = words[i];
        part =
          word.substr(0, offset) +
          "<span class='text-[#fff] font-[100] text-[70px]'>|</span>";
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        const wordElement = document.querySelector(".word");
        if (wordElement) {
          wordElement.innerHTML = part;
        }
      }, speed);
    };
    wordflick();
  }, []);
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
                  {hasBefore ? (
                    <span
                      className={`relative pl-[90px] ${
                        titleColor ? titleColor : "text-[#00ffff]"
                      } text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 ${beforeColor} font-[500]`}
                    >
                      {title}
                    </span>
                  ) : (
                    <span
                      className={`${
                        titleColor ? titleColor : "text-[#00ffff]"
                      } text-[18px] font-bold`}
                    >
                      {title}
                    </span>
                  )}

                  <h1 className="cd-headline clip">
                    <span
                      className={`font-[500] block py-[0.2em] ${
                        title2Color ? title2Color : "text-[#000]"
                      } text-[52px] leading-[50px]`}
                    >
                      {title2}
                    </span>
                    <div
                      className={`min-h-[70px] word font-[700] block py-[0.2em] ${
                        animationTextColor ? animationTextColor : "text-[#000]"
                      } text-[52px] leading-[50px]`}
                    ></div>
                  </h1>
                  <p className={`text-[18px] leading-[1.7] ${descColor}`}>
                    {desc}
                  </p>
                  <div className=" h-[66px]">
                    <LinkButton
                      text="Our Services"
                      className={buttonClassName}
                    />
                    <LinkButton text="Contact Us" className={buttonClassName} />
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
