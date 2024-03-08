import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Button({ text, className = "" ,onClick}) {
  const [effect, setEffect] = useState(false);
  return (
    <button
      className={`${twMerge(
        "px-4 py-2   rounded-lg mx-1  dark:bg-zinc-800 dark:text-gray-50 dark:border-gray-200 dark:border-2",
        className
      )} ${effect && "animate-wiggle"}`}
      onClick={() => {
        setEffect(true);
        onClick();
      }}
      onAnimationEnd={() => {
        setEffect(false);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
