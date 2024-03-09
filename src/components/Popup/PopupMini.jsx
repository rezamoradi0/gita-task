import { useEffect } from "react"
import { twMerge } from "tailwind-merge";

function PopupMini({time=1500,className="",closeFun,text}) {
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            closeFun();
            console.log("HERE");
        },time)

        return ()=>{
            clearTimeout(timeout)
        };
    },[])
    return (
        <div dir="rtl" className={twMerge("absolute top-0 p-4 bg-secondary-dark text-primary-dark  right-2  border animate-hideAndSeek",className)}>
      {text}
        </div>
    )
}

export default PopupMini
