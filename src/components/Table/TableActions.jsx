import { twMerge } from "tailwind-merge";
import Button from "../Button/Button";
import { useUserPanel } from "../../context/usersPanelContext";

function TableActions({className,id}) {
    const {actionsDispatch}=useUserPanel();
    function actionHandler(type){
        actionsDispatch({type,payload:id});
    }
   
  return (
    <div className={twMerge("grid grid-cols-2 gap-1  md:grid-cols-3  lg:grid-cols-5  justify-items-center",className)}>
      <Button onClick={()=>{
        actionHandler("info")
      }} className="fa-regular fa-circle-info col-span-1  row-span-1 p-1 " />
      <Button onClick={()=>{
        actionHandler("edit")
      }} className="fa-regular fa-pen-to-square col-span-1  row-span-1 p-1" />{" "}
      <Button onClick={()=>{
        actionHandler("delete")
      }}  className="fa-regular fa-trash col-span-1   row-span-1 p-1" />{" "}
      <Button onClick={()=>{
        actionHandler("map")
      }} className="fa-regular fa-map-location-dot col-span-1   row-span-1 p-1" />{" "}
      <Button className="fa-regular fa-chart-line-up col-span-1   row-span-1 p-1" />
    </div>
  );
}

export default TableActions;
