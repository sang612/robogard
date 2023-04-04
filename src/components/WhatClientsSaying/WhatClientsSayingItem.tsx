import { WhatClientsSayingItemType } from "@/type";
import Image from "next/image";

export const WhatClientsSayingItem = ({
  comment,
  imageUrl,
  name,
  deparment,
}: WhatClientsSayingItemType) => {
  return (
    <div className="mx-[50px] text-center relative hover:scale-110 my-3 transition-all duration-300 overflow-visible z-30">
      <p className="md:px-[145px] mb-[30px] italic bg-transparent leading-[30px] relative before:bg-[url('/images/elements/nhay.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:w-[45px] before:h-[45px] before:content-[''] before:absolute lg:before:left-[90px] before:left-[-45px]">
        {comment}
      </p>
      <div className="relative inline-block w-[100px] h-[100px] p-[5px] rounded-full bg-[#ffffffcc] mb-[15px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-full"
          sizes="auto"
        />
      </div>
      <h5 className="block text-[18px] font-[600] text-[#000] tracking-[1px] capitalize mb-[5px]">
        {name}
      </h5>
      <span className="post">{deparment}</span>
    </div>
  );
};
