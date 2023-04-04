import { SmallSectionItemType } from "@/type";
import Image from "next/image";
import Link from "next/link";

export const SmallSectionItem = ({
  title,
  desc,
  iconUrl,
  buttonText,
  borderBColor = "border-b-[#6EFFCB]",
  className,
  buttonClassName = "border-[#000] text-[#000]",
  delay,
}: SmallSectionItemType) => {
  return (
    <div
      className={`md:w-1/3 pr-4 pl-4 sm:w-1/2 wow fadeInLeft ${className}`}
      data-wow-delay={delay}
    >
      <div
        className={`p-[30px_15px] hover:shadow-[0px_-1px_30px_#0000001a] border-[1px] border-solid border-[#eee] mt-0 bg-[#fff] relative mb-[30px] border-b-[3px] border-b-solid ${borderBColor} text-center`}
      >
        <Image
          src={iconUrl}
          width={93}
          height={104}
          className="mx-auto w-[93px] h-[104px]"
          alt={title}
        />
        <h4 className="text-[22px] mt-[30px] capitalize text-[#000] font-[500]">
          {title}
        </h4>
        <p className="mt-[15px]">{desc}</p>
        {buttonText && (
          <Link
            href="#0"
            className={`bg-transparent border-[1px] border-solid  py-[15px] px-[50px] font-[600] mt-[29px] rounded-[30px] inline-block text-center align-middle ${buttonClassName}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};
