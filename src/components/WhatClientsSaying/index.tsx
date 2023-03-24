import { HeadTitle } from "../HeadTitle";
import { WhatClientsSayingSlider } from "./WhatClientsSayingSlider";

const listWhatClientsSaying = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae.",
    imageUrl: "/images/testimonial/1.jpg",
    name: "Wiliam Baker",
    deparment: "Developer",
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae.",
    imageUrl: "/images/testimonial/2.jpg",
    name: "James Baker",
    deparment: "Designer",
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae.",
    imageUrl: "/images/testimonial/3.jpg",
    name: "Wiliam Baker",
    deparment: "Developer",
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae.",
    imageUrl: "/images/testimonial/4.jpg",
    name: "Wiliam Baker",
    deparment: "Designer",
  },
];

export const WhatClientsSaying = () => {
  return (
    <section
      id="testimonial_area"
      className="bg-[url('/images/test-bg.svg')] bg-cover relative py-[100px] bg-no-repeat"
    >
      <div className="absolute z-[-1] w-[48%] h-full left-1/2 -translate-x-1/2 top-[70px] bg-[url('/images/elements/testimonial-bg.svg')] bg-no-repeat bg-[center_center] bg-contain" />
      <div className="mx-auto px-[15px] xl:w-[1170px]">
        <HeadTitle
          title="What Clients are Saying"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
        />
        <WhatClientsSayingSlider
          listWhatClientsSaying={listWhatClientsSaying}
        />
      </div>
    </section>
  );
};
