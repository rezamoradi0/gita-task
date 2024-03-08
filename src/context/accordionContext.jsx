import { createContext, useContext } from "react";
const AccordionContext = createContext();
function AccordionProvider({ children, isOpen }) {
  return (
    <AccordionContext.Provider value={{ isOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}
function useAccordion(){
    const context=useContext(AccordionContext);
    if(!context) throw new Error("accordion context cant use out of parent");
    return  context;
}

export { AccordionProvider,useAccordion };
