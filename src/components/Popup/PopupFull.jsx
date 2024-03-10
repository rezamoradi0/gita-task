import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

function PopupFull({ children, closeFun, headerText }) {

  useEffect(()=>{
    function onEscClose(event) {
     if(event.key==="Escape"){
      closeFun();
     }
    }
    document.addEventListener("keydown",onEscClose);

    return  ()=>{
document.removeEventListener("keydown",onEscClose)
    };
  }
  ,[])
  return createPortal(
    <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="fixed left-1/2  overflow-hidden top-1/2 z-50 h-fit w-[90vw] max-w-screen-sm -translate-x-1/2  -translate-y-1/2 flex-col  justify-center rounded-lg  border p-2  md:p-8 lg:p-16  dark:bg-primary-dark dark:text-secondary-dark">
      <Button
            onClick={closeFun}
            className="fa-sharp fa-regular fa-circle-xmark mx-0 border-none rounded-full text-2xl absolute left-0 top-0"
          />
        <div dir="rtl" className="flex w-full items-center justify-between">
       
          <p className="px-5">{headerText}</p>
        </div>
        <div className="w-full flex items-center justify-center">{children}</div>
      </div>
      <div
        onClick={closeFun}
        className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-45 "
      ></div>
    </div>,
    document.getElementById("root"),
  );
}

export default PopupFull;
