import { BlogItemType } from "@/type";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const BlogItem = ({ imageUrl, title, desc, type }: BlogItemType) => {
  return (
    <div className="md:w-1/3 sm:w-1/2 pr-4 pl-4 ">
      <div className="single_blog">
        <div className="blog-thumb">
          <div className="blog-image relative w-full h-full">
            <Image
              src={imageUrl}
              className="img-responsive"
              alt="img"
              width={360}
              height={160}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="py-[30px] px-[15px] mb-[30px] bg-[#fff] shadow-[0px_-1px_30px_#0000001a] text-center">
            <div className="flex items-center justify-center">
              <small className="flex align-middle text-[#000] font-[600]">
                <Image
                  src="/images/icons/clock.svg"
                  alt="clock-icon"
                  width={12}
                  height={12}
                  className="mr-[5px]"
                />
                October 21, 2019
              </small>
              <span className="text-[#1fe482] text-[10px] font-bold capitalize ml-[2px] inline-block align-middle">
                | {type}
              </span>
            </div>
            <Link href="#0">
              <h4 className="pt-[8px] pb-[12px] text-[#000] font-[500] text-[22px]">
                {title}
              </h4>
            </Link>
            <p className="m-0">
              {desc}
            </p>
            <Link
              href="#0"
              className="bg-transparent border-[1px] border-solid border-[#1fe482] py-[15px] px-[50px] text-[#1fe482] font-[600] mt-[29px] rounded-[30px] inline-block text-center align-middle"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
