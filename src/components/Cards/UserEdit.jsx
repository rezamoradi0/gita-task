import { useEffect, useState } from "react";
import TextInput from "../Input/TextInput";
import Button from "../Button/Button";
import { useUserPanel } from "../../context/usersPanelContext";
import PopupMini from "../Popup/PopupMini";

function UserEdit({ data }) {
  const { actionsDispatch, updateUser } = useUserPanel();
  
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [nationalId, setNationalId] = useState(data.nationalId);

  const [updated, setUpdated] = useState(null);
  const [canUpdate, setCanUpdate] = useState(false);

  function update() {
    if (updateUser({ firstName, lastName, nationalId, id: data.id })) {
      setUpdated("success");
    } else {
      setUpdated("failed");
    }
  }
  function checkChanged() {
    if (
        firstName != data.firstName ||
        lastName != data.lastName ||
        nationalId != data.nationalId
      ) {
        setCanUpdate(true);
      } else {
        setCanUpdate(false);
      }
  }
  useEffect(() => {
    checkChanged();
  }, [firstName, lastName, nationalId]);
  return (
    <div className=" flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 ">
        <TextInput label="نام" setValue={setFirstName} value={firstName} />
        <TextInput
          label="نام خانوادگی"
          setValue={setLastName}
          value={lastName}
        />
        <TextInput label="کد ملی" setValue={setNationalId} value={nationalId} />
      </div>
      <div className="flex justify-start">
        <Button className="dark:bg-rose-950"
          onClick={() => {
            actionsDispatch({ type: "clear" });
          }}
          text="لغو"
        />
        <Button
          onClick={()=>{
            if(canUpdate)update();
            else setUpdated("repeat");
          }}
          text={canUpdate ? "بروز رسانی" : "بدون تغییر"}
        />
      </div>

      {updated === "success" && (
        <PopupMini
          text="کاربر با موفقیت بروز رسانی شد"
          closeFun={() => {
            setUpdated(null);
          }}
        />
      )}
      {updated === "failed" && (
        <PopupMini
          text="بروز رسانی انجام نشد !"
          closeFun={() => {
            setUpdated(null);
          }}
        />
      )}
      {updated === "repeat" && (
        <PopupMini
          text="مقادیر بدون تغییر هستند !"
          closeFun={() => {
            setUpdated(null);
          }}
        />
      )}
    </div>
  );
}

export default UserEdit;
