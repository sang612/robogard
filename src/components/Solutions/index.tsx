import { SolutionItemType, SolutionProp } from "@/type";
import { SolutionItem } from "./solotion-item";

export const Solutions = ({ listSolution }: SolutionProp) => {
  return (
    <div className="flex flex-wrap items-center justify-center text-center mx-auto">
      {listSolution.map((item: SolutionItemType) => (
        <SolutionItem
          imgSrc={item.imgSrc}
          className={item.className}
          key={item.id}
          text={item.text}
        />
      ))}
    </div>
  );
};
