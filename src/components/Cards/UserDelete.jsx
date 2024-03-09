import { useEffect, useState } from "react";
import { useUserPanel } from "../../context/usersPanelContext";
import Button from "../Button/Button";
import UserInfo from "./UserInfo";
import PopupMini from "../Popup/PopupMini";

function UserDelete({ data }) {
  const { deleteUser, actionsDispatch } = useUserPanel();
  const [deletedMessage, setDeletedMessage] = useState(null);
  function deleteHandler() {
    const deletedRes = deleteUser(data.id);
    if (deletedRes) {
      setDeletedMessage("deleted");
    } else {
      setDeletedMessage("error");
    }
  }
  return (
    <div className="flex flex-col">
      <UserInfo data={data} />
      <div className="flex items-center justify-center gap-x-5 p-4">
        <Button
          onClick={deleteHandler}
          className="dark:bg-rose-950"
          text="تایید"
        />
        <Button
          className="dark:bg-primary-light"
          text="لغو"
          onClick={() => {
            actionsDispatch({ type: "clear" });
          }}
        />
      </div>
      {deletedMessage === "deleted" && (
        <PopupMini
          text={"کاربر با موفقیت حذف شد "}
          closeFun={() => {
            actionsDispatch({ type: "clear" });
          }}
          time={1000}
        />
      )}
      {deletedMessage === "error" && (
        <PopupMini
          text={"حذف انجام نشد !"}
          closeFun={() => {
            setDeletedMessage(null);
          }}
         
        />
      )}
    </div>
  );
}

export default UserDelete;
