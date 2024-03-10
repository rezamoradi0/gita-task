import { useUserPanel } from "../../context/usersPanelContext";
import TableRow from "./TableRow";

function TableBody() {
  const { data, filter } = useUserPanel();
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
  if (!data) {
    return <div>empty</div>;
  }
  return (
    <div className="flex flex-col border dark:border-secondary-dark" dir="rtl">
      <TableRow data={tableHeaderData} actionHeader="عملیات" />
      {data
        .filter((item) => checkFilters(item))
        .map((item) => {
          return <TableRow data={item} key={item.id} />;
        })}
    </div>
  );
}

export default TableBody;
