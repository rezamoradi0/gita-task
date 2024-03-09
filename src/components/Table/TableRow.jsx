
import TableActions from "./TableActions";

function TableRow({ data, actionHeader }) {
  return (
    <div className="grid grid-cols-12 items-center gap-x-2 border-b py-2 text-center">
      <div className="col-span-1 row-span-1">{data.id}</div>
      <div className="col-span-2 row-span-1">{data.firstName}</div>
      <div className="col-span-3 row-span-1">{data.lastName}</div>
      <div className="col-span-4 row-span-1">{data.nationalId}</div>
      {actionHeader ? (
        <div
          className={`col-span-2 row-span-1`}
        >
          {actionHeader}
        </div>
      ) : 
        <TableActions className="col-span-2 row-span-1" id={data.id}/>
      }
    </div>
  );
}

export default TableRow;
