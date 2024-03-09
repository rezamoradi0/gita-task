import { createContext, useContext } from "react";

const UserPanelContext = createContext();
function UsersPanelProvider({children, data, filter,actionsDispatch,updateUser,deleteUser}) {
  return (
    <UserPanelContext.Provider value={{ data, filter,actionsDispatch ,updateUser,deleteUser}}>
      {children}
    </UserPanelContext.Provider>
  );
}
function useUserPanel() {
  const context = useContext(UserPanelContext);
  if (!context)
    throw new Error("useUserPanel should use inside UserPanelProvider");
  return context;
}

export { UsersPanelProvider,useUserPanel };
