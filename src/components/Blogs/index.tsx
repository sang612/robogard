import { BlogItemType, BlogProps } from "@/type";
import { HeadTitle } from "../HeadTitle";
import { BlogItem } from "./BlogItem";

export const Blogs = ({ listBlogItem }: BlogProps) => {
  let delay = 0.2;

  return (
    <section id="blog" className="pb-[70px] pt-[100px] bg-[#fafafa] block">
      <div className="container mx-auto px-[15px] xl:w-[1170px]">
        <HeadTitle
          title="Latest Blog Posts"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin."
        />
        <div className="mx-[-15px]">
          <div className="flex flex-wrap items-center">
            {listBlogItem.map((item: BlogItemType) => {
              const itemDelay = `${delay}s`;
              delay += 0.2;

              return (
                <BlogItem
                  desc={item.desc}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  type={item.type}
                  key={item.id}
                  textColor={item.textColor}
                  iconColor={item.iconColor}
                  buttonClassName={item.buttonClassName}
                  delay={itemDelay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
