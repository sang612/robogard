import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { WhatClientsSayingItem } from "./WhatClientsSayingItem";
import { WhatClientsSayingItemType, WhatClientsSayingProps } from "@/type";

export const WhatClientsSayingSlider = ({
  listWhatClientsSaying,
  dotSliderColor = "bg-[#1fe482]",
}: WhatClientsSayingProps) => {
  const customPaging = (index: number) => {
    return (
      <div
        className={`w-[10px] h-[10px] mx-1 rounded-full mt-6 ${
          index === activeIndex ? dotSliderColor : "bg-gray-300"
        }`}
      ></div>
    );
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    overflow: "hidden",
    customPaging: customPaging,
    afterChange: (index: number) => {
      setActiveIndex(index);
    },
  };

  return (
    <Slider {...settings} className="wow fadeInLeft my-slider">
      {listWhatClientsSaying.map((item: WhatClientsSayingItemType) => (
        <WhatClientsSayingItem
          comment={item.comment}
          deparment={item.deparment}
          imageUrl={item.imageUrl}
          name={item.name}
          key={item.id}
        />
      ))}
    </Slider>
  );
};
