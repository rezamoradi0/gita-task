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

const initState = {
  component: null,
  headerText: "headerText",
};

function UsersPanel() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 2,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          }, {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          }, {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 3,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 4,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 5,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 6,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 7,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 8,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 9,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 10,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 11,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
    {
      id: 12,
      firstName: "علی",
      lastName: "محمدی",
      nationalId: "524021113",
      position: { latitude: 35.69672648316882, longitude: 51.36281969540723 },
      chartData: {
        data: [
          {
            date: "12/01",
            login: 15,
          },
          {
            date: "12/02",
            login: 23,
          },
          {
            date: "12/03",
            login: 34,
          },
          {
            date: "12/04",
            login: 35,
          },
          {
            date: "12/05",
            login: 15,
          },
          {
            date: "12/06",
            login: 23,
          },
          {
            date: "12/07",
            login: 34,
          },
          {
            date: "12/08",
            login: 35,
          },
          {
            date: "12/09",
            login: 15,
          },
          {
            date: "12/10",
            login: 23,
          },
          {
            date: "12/11",
            login: 34,
          },
          {
            date: "12/12",
            login: 35,
          },
        ],
        XAxisKey: "date",
        barKey: "login",
      },
    },
  ]);
  const [filter, setFilter] = useState({});

  function getItem(id) {
    return data.find((item) => {
      return item.id == id;
    });
  }

  const [actionsState, actionsDispatch] = useReducer(actionsReducer, initState);
  function actionsReducer(state, action) {
    const id = action.payload;
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
        return { component: <UserMap data={data} />,       headerText: "موقعیت کاربر", };
      case "chart":
        return { component: <UserChart data={data} />    ,   headerText: " آمار کاربر", };
      default:
        return state;
    }
  }
  function updateUser(user) {
    const newData = [...data];
    const userIndex = newData.findIndex((item) => item.id === user.id);
    console.log("userIndex", userIndex);
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

  return (
    <UsersPanelProvider
      data={data}
      filter={data}
      actionsDispatch={actionsDispatch}
      updateUser={updateUser}
      deleteUser={deleteUser}
    >
      <div className="flex min-h-screen flex-col gap-y-8 px-16 py-4 text-secondary-dark dark:bg-primary-dark">
       
   
   
  
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
