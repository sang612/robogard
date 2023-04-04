import { CounterItemType, CounterProps } from "@/type";
import { CounterItem } from "../CounterItem";
import { useEffect, useState } from "react";

export const CounterSection = ({
  itemList,
  titleColor = "text-[#00ccff]",
  beforeColor = "before:bg-[#00ccff]",
}: CounterProps) => {
  const [isWowAnimationCompleted, setIsWowAnimationCompleted] = useState(false);
  useEffect(() => {
    const wowAnimationsTrigger = document.querySelector(
      ".wow-animations-trigger"
    );

    const checkAnimatedClass = setInterval(() => {
      if (
        wowAnimationsTrigger &&
        wowAnimationsTrigger.classList.contains("animated")
      ) {
        setIsWowAnimationCompleted(true);
        clearInterval(checkAnimatedClass);
      }
    }, 100);

    return () => {
      clearInterval(checkAnimatedClass);
    };
  }, []);

  return (
    <section id="counter_area" className="py-[100px] bg-[#fafafa] ">
      <div className="xl:w-[1170px] px-[15px] mx-auto">
        <div className="mx-[-15px] text-left flex flex-wrap">
          <div className="md:w-3/5 pr-4 pl-4">
            <div className="content_area">
              <h5
                className={`relative pl-[90px] ${titleColor} text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 ${beforeColor} font-[500]`}
              >
                Dedicated Artificial Intelligence
              </h5>
              <h3 className="text-[30px] mb-[10px] font-[600] leading-[1.3] text-[#000] mt-[20px]">
                Get Benefits of using latest Artificial Intelligence
                Technologies.
              </h3>
              <p className="m-0 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tellus est, finibus ut congue sed, faucibus ut dui. Sed congue
                nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus
                In hac habitasse platea dictumst. In hac.
              </p>
              <div className="mx-[-15px] flex">
                <div className="sm:w-1/2 pr-4 pl-4">
                  <div className="relative mt-[30px] ">
                    <svg
                      width="85"
                      height="85"
                      viewBox="0 0 112 119"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      key={1}
                    >
                      <rect width="112" height="119" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_50_73"
                            transform="scale(0.0125 0.0117647)"
                          />
                        </pattern>
                        <image
                          id="image0_50_73"
                          width="80"
                          height="85"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <h4 className="text-[22px] mt-[30px] capitalize text-[#000] font-[500]">
                      Dedicated Support
                    </h4>
                    <p className="mt-[15px]">
                      Lorem ipsum dolor sit amet, adipiscing elit. Integer
                      tellus estt congue sed.
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/2 pr-4 pl-4">
                  <div className="relative mt-[30px] ">
                    <svg
                      width="85"
                      height="85"
                      viewBox="0 0 112 119"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      key={3}
                    >
                      <rect width="112" height="119" fill="url(#pattern1)" />
                      <defs>
                        <pattern
                          id="pattern1"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_50_78"
                            transform="scale(0.0125 0.0117647)"
                          />
                        </pattern>
                        <image
                          id="image0_50_78"
                          width="80"
                          height="85"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <h4 className="text-[22px] mt-[30px] capitalize text-[#000] font-[500]">
                      Latest Technologies
                    </h4>
                    <p className="mt-[15px]">
                      Lorem ipsum dolor sit amet, adipiscing elit. Integer
                      tellus estt congue sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:w-2/5 sm:w-full pr-4 pl-4 wow fadeInRight"
            data-wow-duration="2s"
            ref={(el) => {
              if (el) {
                el.classList.add("wow-animations-trigger");
              }
            }}
          >
            <div className="lg:relative lg:mt-[-200px] bg-[#fff] py-[30px] px-[25px] shahow-[0px_-1px_30px_#0000001a] overflow-hidden block">
              <h5
                className={`relative pl-[90px] ${titleColor} text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 ${beforeColor} font-[500]`}
              >
                Our Fun Facts
              </h5>
              <h3 className="text-[30px] mb-[10px] font-[600] leading-[1.3] text-[#000] mt-[20px]">
                Number We Proud Of
              </h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet, it amet, consectetur adip
                consectetur adipiscing elit. Integer tellus est, finibus ut cit
                amet, consectetur adip
              </p>
              {itemList.map((item: CounterItemType) => (
                <CounterItem
                  key={item.index}
                  index={item.index}
                  icon={item.icon}
                  number={item.number}
                  text={item.text}
                  isWowAnimationCompleted={isWowAnimationCompleted}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
