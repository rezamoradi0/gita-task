import { useUserPanel } from "../../context/usersPanelContext";
import TableRow from "./TableRow";

function TableBody() {
  const {data}=useUserPanel();
  const tableHeaderData = {
    id: "آیدی",
    firstName: "نام",
    lastName: "نام خانوادگی",
    nationalId: "کد ملی",
  };
  if(!data){
    return  <div>
      empty
    </div>;
  }
  return (
    <div className="flex flex-col dark:border-secondary-dark border" dir="rtl">
      <TableRow data={tableHeaderData}  actionHeader="عملیات"/>
      {data.map((item) => {
        return <TableRow data={item} key={item.id} />;
      })}
      
    </div>
  );
}

export default TableBody;
