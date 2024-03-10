import { useState } from "react";
import TextInput from "../../Input/TextInput";
import Button from "../../Button/Button";
import { useUserPanel } from "../../../context/usersPanelContext";

function SearchBody() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const { setFilter } = useUserPanel();
  function searchHeader() {
    console.log("HERE");
    setFilter({
      firstName,
      lastName,
      nationalId,
    });
  }
  return (
    <>
      <hr className="my-4" />
      <div
        dir="rtl"
        className="flex flex-wrap  items-center justify-center gap-4 py-2 "
      >
        <TextInput label="نام" value={firstName} setValue={setFirstName} />
        <TextInput
          label="نام خانوادگی"
          value={lastName}
          setValue={setLastName}
        />
        <TextInput
          type="text"
          inputmode="numeric"
          label="کد ملی"
          value={nationalId}
          setValue={setNationalId}
        />
        <Button
          onClick={searchHeader}
          text={"جستوجو"}
        />
      </div>
    </>
  );
}

export default SearchBody;
