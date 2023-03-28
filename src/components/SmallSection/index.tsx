import { SmallSectionItemType, SmallSectionProps } from "@/type";
import { SmallSectionItem } from "./SmallSectionItem";

export const SmallSection = ({ listSmallSectionItem }: SmallSectionProps) => {
  return (
    <div className="flex flex-wrap">
      {listSmallSectionItem.map((item: SmallSectionItemType) => (
        <SmallSectionItem
          title={item.title}
          desc={item.desc}
          iconUrl={item.iconUrl}
          buttonText={item.buttonText}
          key={item.id}
          borderBColor={item.borderBColor}
        />
      ))}
    </div>
  );
};
