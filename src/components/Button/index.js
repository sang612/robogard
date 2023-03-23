import Link from "next/link";

export const LinkButton = ({ text }) => {
  return (
    <Link
      href="#0"
      className="block md:inline-block w-[176px] max-w-[176px] text-[#fff] text-[14px]  mt-[30px] border-[1px] border-solid border-[#00ffff] capitalize py-[23px] px-[40px] tracking-[0.6px] font-[600] rounded-[0] mr-[10px] min-w-[175px] bg-[url('/images/elements/button-after.png')] bg-center bg-right-bottom leading-[10px] transition-all duration-[0.3] ease-in-out relative"
    >
      <span>{text}</span>
    </Link>
  );
};
