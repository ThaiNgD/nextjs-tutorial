import SelectorComponent from "@/components/AIWriterSelector/SelectorComponent";
import { configAIWriterSelector } from "@/config/configAIWriterSelector";
import { useMemo } from "react";

export interface AISelectorProps {
  type:
    | "all"
    | "business"
    | "seo-optimization"
    | "write-web-content"
    | "write-email";
}
const AISelector = ({ type }: AISelectorProps) => {
  const TypedSelector = useMemo(() => {
    if (type === "all") {
      return configAIWriterSelector;
    } else {
      return configAIWriterSelector.filter(
        (selector) => selector.category === type
      );
    }
  }, [type]);
  return (
    <div className="flex mb-[60px] overflow-hidden w-[calc(100%-350px)] mx-auto justify-center flex-wrap gap-5">
      {TypedSelector.map((selector, index) => {
        return <SelectorComponent key={index} selector={selector} />;
      })}
    </div>
  );
};

export default AISelector;
