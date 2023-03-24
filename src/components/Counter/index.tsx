import { CounterItemType, CounterProps } from "@/type";
import { CounterItem } from "../CounterItem";


export const CounterSection = ({ itemList } :CounterProps) => {
  
  return (
    <section id="counter_area" className="py-[100px] bg-[#fafafa] ">
      <div className="xl:w-[1170px] px-[15px] mx-auto">
        <div className="mx-[-15px] text-left flex flex-wrap">
          <div className="md:w-3/5 pr-4 pl-4">
            <div className="content_area">
              <h5 className="relative pl-[90px] text-[#00ccff] text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#00ccff] font-[500]">
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
                    <img src="images/elements/f1.png" />
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
                    <img src="images/elements/f2.png" />
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
          <div className="md:w-2/5 sm:w-full pr-4 pl-4">
            <div className="lg:relative lg:mt-[-200px] bg-[#fff] py-[30px] px-[25px] shahow-[0px_-1px_30px_#0000001a] overflow-hidden block">
              <h5 className="relative pl-[90px] text-[#00ccff] text-[18px] before:content-[''] before:absolute before:w-[80px] before:h-[2px] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#00ccff] font-[500]">
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
              {itemList.map((item : CounterItemType) => (
                <CounterItem
                  key={item.index}
                  index={item.index}
                  icon={item.icon}
                  number={item.number}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
