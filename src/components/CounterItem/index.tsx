import { CounterItemType } from "@/type";
import Image from "next/image";
import CountUp from "react-countup";

export const CounterItem = ({
  index,
  icon,
  number,
  text,
  isWowAnimationCompleted,
}: CounterItemType) => {
  return (
    <div className="hover:border-none hover:pl-[30px] relative py-[10px] border-b-[1px] border-solid border-b-[#eee] transition-all duration-[0.3s] ease-in-out">
      <span
        className="absolute right-[20px] top-1/2 text-[#a1a3a3] -translate-y-1/2 text-[70px] opacity-10 font-[500] italic "
        style={{ WebkitTextStrokeWidth: "medium" }}
      >
        {index}
      </span>
      <div className="mb-0 absolute top-[20px]">
        <Image src={icon} alt={text} width={70} height={70} />
      </div>
      <div className="pl-[80px] ">
        <span className="text-[30px] font-[500] italic text-[#000] ">
          {isWowAnimationCompleted && (
            <CountUp start={0} end={number} delay={1} duration={2} />
          )}
        </span>
        <p className="text-[16px] text-[#666] font-[600] mb-0">{text}</p>
      </div>
    </div>
  );
};
