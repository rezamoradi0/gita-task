import { useEffect, useState } from "react";
import { useUserPanel } from "../../context/usersPanelContext";
import Button from "../Button/Button";
import TextInput from "../Input/TextInput";
import PopupMini from "../Popup/PopupMini";
import NumberInput from "../Input/NumberInput";

function UserAdd() {
  const { addUser, actionsDispatch } = useUserPanel();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const [addState, setAddState] = useState(null);
  function addHandler() {
    if (
      firstName.trim().length < 1 ||
      lastName.trim().length < 1 ||
      nationalId.trim().length < 1
    ) {
        console.log("here");
      setAddState("required");
      return false;
    }
    const response = addUser({ firstName, lastName, nationalId });
    if (response) {
      setAddState("added");
    }
  }
  function close() {
    actionsDispatch({ type: "clear" });
  }
  return (
    <div className="flex flex-col gap-y-2 py-4">
      <TextInput label="نام" value={firstName} setValue={setFirstName} />
      <TextInput label="نام خانوادگی" value={lastName} setValue={setLastName} />
      <NumberInput
        type="text"
        inputmode="numeric"
        label="کد ملی"
        value={nationalId}
        setValue={setNationalId}
        maxLength={10}
        
      />
      <div className="my-4 flex w-full items-center justify-start">
        <Button text="لغو" className="dark:bg-rose-950" onClick={close} />
        <Button text="افزودن" onClick={addHandler} />
      </div>
      {addState === "added" && (
        <PopupMini
          closeFun={close}
          text={"کاربر با موفقیت ایجاد شد"}
          time={1000}
        />
      )}
      {addState === "required" && (
        <PopupMini
          closeFun={() => {
            setAddState(null);
          }}
          text={"تمامی فیلد ها اجباری هستند"}
          time={1500}
        />
      )}
    </div>
  );
}

export default UserAdd;
