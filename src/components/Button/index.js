import Link from "next/link";

export const LinkButton = ({ text, className = "text-[#000] bg-[#fff]" }) => {
  return (
    <Link
      href="#0"
      className={`block md:inline-block w-[176px] max-w-[176px]  text-[14px]  mt-[30px]  capitalize py-[23px] px-[40px] tracking-[0.6px] font-[600] rounded-[0] mr-[10px] min-w-[175px] leading-[10px] transition-all duration-[0.3] ease-in-out relative ${className}`}
    >
      <span>{text}</span>
    </Link>
  );
};
