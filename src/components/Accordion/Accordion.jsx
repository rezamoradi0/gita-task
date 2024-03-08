import { useEffect, useMemo, useRef, useState } from "react";

function Accordion({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionRef = useRef(null);
  const bodyRef = useRef(null);
  const headerRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState("fit-content");
  const [closeHeight, setCloseHeight] = useState(null);
  const [openHeight, setOpenHeight] = useState(null);

  useEffect(() => {
    isOpen ? setMaxHeight(openHeight) : setMaxHeight(closeHeight);
  }, [isOpen]);

  useEffect(() => {
    const accordionPaddingBottom = +window
      .getComputedStyle(accordionRef.current)
      .getPropertyValue("padding-bottom")
      .replace("px", "");
    const accordionPaddingTop = +window
      .getComputedStyle(accordionRef.current)
      .getPropertyValue("padding-top")
      .replace("px", "");
    const accordionPaddingY = accordionPaddingBottom + accordionPaddingTop;
    const headerHeight = headerRef.current.offsetHeight;
    const bodyHeight = bodyRef.current.offsetHeight;

    setCloseHeight(headerHeight + accordionPaddingY + "px");
    setOpenHeight(headerHeight + bodyHeight + accordionPaddingY + "px");
  }, [header, children]);
  console.log(maxHeight);
  return (
    <div
      style={{ maxHeight: maxHeight }}
      className="overflow-hidden px-4 pt-2 pb-3  border-2 dark:border-secondary-dark transition-all duration-500"
      ref={accordionRef}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex"
        ref={headerRef}
      >
        {header}{" "}
      </div>
      <div className="p-4" ref={bodyRef}>
        {children}{" "}
      </div>
    </div>
  );
}

export default Accordion;
