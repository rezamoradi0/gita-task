import { twMerge } from "tailwind-merge";
import Button from "../Button/Button";
import { useUserPanel } from "../../context/usersPanelContext";

function TableActions({className,id}) {
    const {actionsDispatch}=useUserPanel();
    function infoActionHandler(){
  
        actionsDispatch({type:"info",payload:id});
    }
  return (
    <div className={twMerge("grid grid-cols-2 gap-1  md:grid-cols-4  lg:grid-cols-5  justify-items-center",className)}>
      <Button className="fa-regular fa-circle-info col-span-1  row-span-1 p-1 "  onClick={infoActionHandler}/>
      <Button className="fa-regular fa-pen-to-square col-span-1  row-span-1 p-1" />{" "}
      <Button className="fa-regular fa-trash col-span-1   row-span-1 p-1" />{" "}
      <Button className="fa-regular fa-map-location-dot col-span-1   row-span-1 p-1" />{" "}
      <Button className="fa-regular fa-chart-line-up col-span-1   row-span-1 p-1" />
    </div>
  );
}

export default TableActions;
