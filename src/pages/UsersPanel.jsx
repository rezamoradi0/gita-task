import { useEffect, useReducer, useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import TableBody from "../components/Table/TableBody";
import SearchBody from "../components/templates/SearchBox/SearchBody";
import SearchHeader from "../components/templates/SearchBox/SearchHeader";
import { UsersPanelProvider } from "../context/usersPanelContext";
import "../css/all.css";
import PopupFull from "../components/Popup/PopupFull";
import UserInfo from "../components/Cards/UserInfo";
import UserEdit from "../components/Cards/UserEdit";
import UserDelete from "../components/Cards/UserDelete";
import UserMap from "../components/Cards/UserMap";
import UserChart from "../components/Cards/UserChart";

import { sampleData } from "../constant/data";
import UserAdd from "../components/Cards/UserAdd";
import NumberInput from "../components/Input/NumberInput";
const initState = {
  component: null,
  headerText: "headerText",
};

function UsersPanel() {
  const [data, setData] = useState(sampleData);
  const [filter, setFilter] = useState({
    firstName: "",
    lastName: "",
    nationalId: "",
  });

  function getItem(id) {
    return data.find((item) => {
      return item.id == id;
    });
  }

  const [actionsState, actionsDispatch] = useReducer(actionsReducer, initState);
  function actionsReducer(state, action) {
    const id = action.payload || null;
    const data = getItem(id);
    switch (action.type) {
      case "clear":
        return initState;
      case "info":
        return {
          component: <UserInfo data={data} />,
          headerText: "اطلاعات کاربر",
        };
      case "edit":
        return {
          component: <UserEdit data={data} />,
          headerText: "ویرایش کاربر",
        };
      case "delete":
        return {
          component: <UserDelete data={data} />,
          headerText: "پاک کردن کاربر",
        };
      case "map":
        return {
          component: <UserMap data={data} />,
          headerText: "موقعیت کاربر",
        };
      case "chart":
        return {
          component: <UserChart data={data} />,
          headerText: " آمار کاربر",
        };
      case "add":
        return {
          component: <UserAdd />,
          headerText: " افزودن کاربر جدید",
        };
      default:
        return state;
    }
  }
  function updateUser(user) {
    const newData = [...data];
    const userIndex = newData.findIndex((item) => item.id === user.id);
    newData[userIndex] = user;
    setData(newData);
    //onSuccess
    return true;
  }
  function deleteUser(id) {
    const userIndex = data.findIndex((user) => user.id == id);
    if (userIndex > -1) {
      const newData = data.toSpliced(userIndex, 1);
      setData(newData);
      return true;
    } else {
      return false;
    }
  }
  function addUser({ firstName, lastName, nationalId }) {
    const newId = getLastId() + 1;
    const newUser={firstName,lastName,nationalId,id:newId}
    setData([...data,newUser]);
    return  true;
  }
  function getLastId() {
    let maxId = 0;
    for (let index = 0; index < data.length; index++) {
      const id = data[index].id;
      if (id > maxId) {
        maxId = id;
      }
    }
    return  maxId;
  }

  return (
    <UsersPanelProvider
      data={data}
      filter={filter}
      setFilter={setFilter}
      actionsDispatch={actionsDispatch}
      updateUser={updateUser}
      deleteUser={deleteUser}
      addUser={addUser}
    >

      <div className="flex min-h-screen flex-col gap-y-8 px-2 py-4 text-secondary-dark md:px-16 dark:bg-primary-dark">
        <Accordion header={<SearchHeader />}>
          <SearchBody />
        </Accordion>
        <TableBody />
        {actionsState.component && (
          <PopupFull
            headerText={actionsState.headerText}
            closeFun={() => {
              actionsDispatch({ type: "clear" });
            }}
          >
            {actionsState.component}
          </PopupFull>
        )}
      </div>
    </UsersPanelProvider>
  );
}

export default UsersPanel;
