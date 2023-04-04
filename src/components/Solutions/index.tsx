import { SolutionItemType, SolutionProp } from "@/type";
import { SolutionItem } from "./solotion-item";

export const Solutions = ({ listSolution }: SolutionProp) => {
  let delay = 0.2;
  return (
    <div className="flex flex-wrap items-center justify-center text-center mx-auto">
      {listSolution.map((item: SolutionItemType) => {
        const itemDelay = `${delay}s`;
        delay += 0.2;

        return (
          <SolutionItem
            imgSrc={item.imgSrc}
            className={item.className}
            key={item.id}
            text={item.text}
            delay={itemDelay}
          />
        );
      })}
    </div>
  );
};
