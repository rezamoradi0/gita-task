import { useState } from "react";
import TextInput from "../../Input/TextInput";
import Button from "../../Button/Button";

function SearchBody() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  return (
    <>
    <hr  className="my-4"/>
    <div dir="rtl" className="flex flex-wrap  items-center justify-center gap-4 py-2 ">
      <TextInput label="نام" value={firstName} setValue={setFirstName} />
      <TextInput label="نام خانوادگی" value={lastName} setValue={setLastName} />
      <TextInput type="text" inputmode="numeric" label="کد ملی" value={nationalId} setValue={setNationalId} />
      <Button onClick={()=>{
        console.log("Search");
      }} text={"جستوجو"}/>

    </div>
    </>
  );
}

export default SearchBody;
