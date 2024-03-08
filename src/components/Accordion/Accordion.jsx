import { useEffect, useRef, useState } from "react";

function Accordion({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionRef = useRef(null);
  const bodyRef = useRef(null);
  const headerRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState("68px");
  const [closeHeight, setCloseHeight] = useState(null);
  const [openHeight, setOpenHeight] = useState(null);

  const [initRender, setInitRender] = useState(true);
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
  useEffect(() => {
    if (initRender) {
      setInitRender(false);
      return;
    }
    isOpen ? setMaxHeight(openHeight) : setMaxHeight(closeHeight);
  }, [isOpen, initRender]);

  return (
    <div
      style={{ maxHeight: maxHeight }}
      className="overflow-hidden border-2 px-4 pb-3 pt-2 transition-all  duration-500   dark:border-secondary-dark"
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
