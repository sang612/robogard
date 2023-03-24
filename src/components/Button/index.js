import Link from "next/link";

export const LinkButton = ({ text }) => {
  return (
    <Link
      href="#0"
      className="block md:inline-block w-[176px] max-w-[176px] text-[#000] text-[14px]  mt-[30px]  capitalize py-[23px] px-[40px] tracking-[0.6px] font-[600] rounded-[0] mr-[10px] min-w-[175px] bg-[#fff] leading-[10px] transition-all duration-[0.3] ease-in-out relative"
    >
      <span>{text}</span>
    </Link>
  );
};
