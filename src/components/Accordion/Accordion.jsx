import { useEffect, useRef, useState } from "react";
import { AccordionProvider } from "../../context/accordionContext";
function getComputedPropValue(computedStyle, property) {
  return Number(computedStyle.getPropertyValue(property).replace("px", ""));
}

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
    const computedStyle = window.getComputedStyle(accordionRef.current);
    const accordionPaddingBottom = getComputedPropValue(
      computedStyle,
      "padding-bottom",
    );
    const accordionPaddingTop = getComputedPropValue(
      computedStyle,
      "padding-top",
    );
    const accordionBorderTop = getComputedPropValue(
      computedStyle,
      "border-top-width",
    );

    const accordionBorderBottom = getComputedPropValue(
      computedStyle,
      "border-bottom-width",
    );
    const accordionPaddingY =
      accordionPaddingBottom +
      accordionPaddingTop +
      accordionBorderTop +
      accordionBorderBottom;
    const headerHeight = headerRef.current.clientHeight;
    const bodyHeight = bodyRef.current.clientHeight;

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
    <AccordionProvider isOpen={isOpen}>
      <div
        style={{ maxHeight: maxHeight }}
        className="overflow-hidden rounded-lg border-2 px-4 py-2  transition-all   duration-500 dark:border-secondary-dark"
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
    </AccordionProvider>
  );
}

export default Accordion;
