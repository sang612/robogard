import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OurMainServicesProps, SmallSectionItemType } from "@/type";
import { SmallSectionItem } from "../SmallSection/SmallSectionItem";
import { useState } from "react";

export const OutMainServicesSlider = ({
  listOurMainServices,
  dotSliderColor = "bg-[#1fe482]",
}: OurMainServicesProps) => {
  const customPaging = (index: number) => {
    return (
      <div
        className={`w-[10px] h-[10px] mx-1 rounded-full ${
          index === activeIndex ? dotSliderColor : "bg-gray-300"
        }`}
      ></div>
    );
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    customPaging: customPaging,
    afterChange: (index: number) => {
      setActiveIndex(index);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  let delay = 0.2;

  return (
    <Slider {...settings}>
      {listOurMainServices.map((item: SmallSectionItemType) => {
        const itemDelay = `${delay}s`;
        delay += 0.2;

        return (
          <SmallSectionItem
            key={item.title}
            title={item.title}
            desc={item.desc}
            iconUrl={item.iconUrl}
            buttonText={item.buttonText}
            className={item.className}
            buttonClassName={item.buttonClassName}
            delay={itemDelay}
          />
        );
      })}
    </Slider>
  );
};
