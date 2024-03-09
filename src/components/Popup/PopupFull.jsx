import { createPortal } from "react-dom";
import Button from "../Button/Button";

function PopupFull({ children, closeFun, headerText }) {
  return createPortal(
    <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="fixed left-1/2  top-1/2 z-50 h-fit w-max -translate-x-1/2  -translate-y-1/2 flex-col  justify-center rounded-lg  border p-5 px-12 dark:bg-primary-dark dark:text-secondary-dark">
        <div className="flex w-full items-center justify-between">
          <Button
            onClick={closeFun}
            className="fa-sharp fa-regular fa-circle-xmark mx-0 rounded-none text-2xl"
          />
          <p className="px-5">{headerText}</p>
        </div>
        <div>{children}</div>
      </div>
      <div
        onClick={closeFun}
        className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-45 "
      ></div>
    </div>,
    document.body,
  );
}

export default PopupFull;
