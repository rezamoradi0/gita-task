import { twMerge } from "tailwind-merge";
import { useAccordion } from "../../../context/accordionContext";
function SearchHeader({ text = "جستوجو", className = "" }) {
  const { isOpen } = useAccordion();
  return (
    <div
      className={twMerge(
        "flex h-12 w-full items-center justify-between gap-x-2 pb-1 dark:border-gray-500",
        className,
      )}
    >
      <span>
        <i
          className={` ${isOpen ? "rotate-180" : ""} fa-sharp fa-solid fa-chevron-up rounded-full p-2 transition-all duration-500 `}
        ></i>
      </span>
      <span>{text}</span>
    </div>
  );
}

export default SearchHeader;
