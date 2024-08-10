import { ChevronDown, Sparkle } from "lucide-react";
import { useState } from "react";

export default function ToggleDisplayLength({
  items,
  maxItems = 3,
}: {
  items: string[];
  maxItems?: number;
}) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const displayedItems = showAll ? items : items.slice(0, maxItems);

  return (
    <div className="w-fit flex flex-col">
      <div className="space-y-3 w-fit">
        {displayedItems?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 bg-accent py-3 pl-2 pr-12">
            <Sparkle size={20} className="text-xs fill-primary text-primary" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
      {items.length > maxItems && (
        <div
          onClick={toggleShowAll}
          className="w-fit mt-3 self-center text-sm py-1 px-2 rounded-lg flex items-center gap-x-0.5 cursor-pointer">
          {showAll ? "Show Less" : "Show More"}
          <ChevronDown size={15}/>
        </div>
      )}
    </div>
  );
}
{
  /* <div className="space-y-3">
                {home?.features.map((feature: string) => (
                 
                ))}
              </div> */
}
