import { useEffect, useReducer, useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import TableBody from "../components/Table/TableBody";
import SearchBody from "../components/templates/SearchBox/SearchBody";
import SearchHeader from "../components/templates/SearchBox/SearchHeader";
import { UsersPanelProvider } from "../context/usersPanelContext";
import "../css/all.css";
import PopupFull from "../components/Popup/PopupFull";
import UserInfo from "../components/Cards/UserInfo";

const initState = {
  component:null,
  headerText:"test"
};

function UsersPanel() {
 
  const [data, setData] = useState([
    { id: 1, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 2, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 3, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 4, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 1, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 2, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 3, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 4, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 1, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 2, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 3, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
    { id: 4, firstName: "علی", lastName: "محمدی", nationalId: "5240231311" },
  ]);
  const [filter, setFilter] = useState({});

  function getItem(id){
    return  data.find((item)=>{return item.id==id});
  }

  const [actionsState, actionsDispatch] = useReducer(actionsReducer, initState);
  function actionsReducer(state, action) {
    console.log(action);
    switch (action.type) {
      case "clear":
        return initState;
      case "info":
        const id =action.payload;
        const data=getItem(id);
        return { component: <UserInfo data={data}/> ,headerText:"userInfo"};
      // case "edit":
      //   return { component: <UserInfo />, userId: action.payload };
      // case "delete":
      //   return { component: <UserInfo />, userId: action.payload };
      // case "map":
      //   return { component: <UserInfo />, userId: action.payload };
      // case "chart":
      //   return { component: <UserInfo />, userId: action.payload };
      default:
        return state;
    }
  }
 
  return (
    <UsersPanelProvider data={data} filter={data} actionsDispatch={actionsDispatch}>
      <div className="flex min-h-screen flex-col gap-y-8 px-16 py-4 text-secondary-dark dark:bg-primary-dark">
        <Accordion header={<SearchHeader />}>
          <SearchBody />
        </Accordion>
        <TableBody />
        {actionsState.component && (
          <PopupFull  headerText={actionsState.headerText} closeFun={()=>{
            actionsDispatch({ type: "clear" })
          }}>
            {actionsState.component}
          </PopupFull>
        )}
      </div>
    </UsersPanelProvider>
  );
}

export default UsersPanel;
