import { useUserPanel } from "../../context/usersPanelContext";
import Button from "../Button/Button";
import TableRow from "./TableRow";

function TableBody() {
  const { data, filter ,actionsDispatch} = useUserPanel();
  const tableHeaderData = {
    id: "آیدی",
    firstName: "نام",
    lastName: "نام خانوادگی",
    nationalId: "کد ملی",
  };
  function checkFilters(item) {
    return (
      item.firstName.trim().includes(filter.firstName.trim()) &&
      item.lastName.trim().includes(filter.lastName.trim()) &&
      item.nationalId.trim().includes(filter.nationalId.trim())
    );
  }
  const filteredData = data.filter((item) => checkFilters(item));
  return (
    <div dir="rtl">
          <Button text="افزودن" className="w-fit m-4" onClick={()=>{
            actionsDispatch({type:"add"})
          }}/>
    <div className="flex flex-col border dark:border-secondary-dark" dir="rtl">
  
      <TableRow data={tableHeaderData} actionHeader="عملیات" />
      {filteredData.length === 0 ? (
        <div className="px-5 py-3 text-center">
          هیچ مورد مشابه ای یافت نشد !
        </div>
      ) : (
        filteredData.map((item) => {
          return <TableRow data={item} key={item.id} />;
        })
      )}
    </div> 
    </div>
  );
}

export default TableBody;
