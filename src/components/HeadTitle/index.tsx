import { HeadTitleProps } from "@/type";

export const HeadTitle = ({
  title,
  desc,
  titleColor,
  descColor,
  separateColor,
}: HeadTitleProps) => {
  return (
    <div
      className={`section_heading pb-[100px] text-center after:absolute after:content-[''] after:blocl after:h-[30px] after:w-[3px] after:left-[50%] ${
        separateColor ? separateColor : "after:bg-[#000]"
      } after:-translate-x-1/2`}
    >
      <h2
        className={`text-[40px] font-[600] ${
          titleColor ? titleColor : "text-[#000]"
        }  mb-[10px]`}
      >
        {title}
      </h2>
      <p className={`mb-[20px] max-w-[530px] mx-auto ${descColor}`}>{desc}</p>
    </div>
  );
};
