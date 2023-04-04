import { SolutionItemType } from "@/type";
import Image from "next/image";

export const SolutionItem = ({
  className = "border-b-[#1fe482]",
  imgSrc,
  text,
  delay,
}: SolutionItemType) => {
  return (
    <div
      className="md:w-[16.66666667%] px-[15px] sm:w-1/3 wow fadeInLeft"
      data-wow-delay={delay}
    >
      <div
        className={`p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid  text-center ${className}`}
      >
        <Image
          src={imgSrc}
          width={75}
          height={75}
          alt="img"
          className="mx-auto max-w-full h-auto align-middle w-[75px] h-[75px]"
        />
        <p className="mt-[15px] ">{text}</p>
      </div>
    </div>
  );
};
