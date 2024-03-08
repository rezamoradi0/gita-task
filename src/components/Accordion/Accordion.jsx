import { useEffect, useRef, useState } from "react";

function Accordion({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const bodyRef = useRef(null);
  const headerRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState("fit-content");

  useEffect(() => {
    if (isOpen) {
      const headerHeight = headerRef.current.offsetHeight;
      const bodyHeight = bodyRef.current.offsetHeight;
      setMaxHeight(headerHeight + bodyHeight + "px");
    } else {
      const headerHeight = headerRef.current.offsetHeight;
      setMaxHeight(headerHeight + "px");
    }
  }, [isOpen]);
  return (
    <div
      style={{ maxHeight: maxHeight }}
      className="overflow-hidden border-red-500 border-2 dark:border-red-500 transition-all duration-500"
    >
      <div ref={headerRef}>
        {header}{" "}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          test
        </button>
      </div>
      <div ref={bodyRef}>{children} </div>
    </div>
  );
}

export default Accordion;
