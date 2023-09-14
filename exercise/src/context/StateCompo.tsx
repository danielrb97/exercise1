import React, { PropsWithChildren, createContext, useState } from "react";

type ListType = {
  user: string;
  editUser: (newUser: string) => void;
};

const useContextValues = () => {
  const [user, setUser] = useState("Franco");

  const editUser = (newUser: string): void => {
    setUser(newUser);
  };

  return {
    user,
    editUser,
  };
};

export const ListContext = createContext<ListType>({
  user: "",
  editUser: (user) => {},
});

const ListContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const contextValue = useContextValues();

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContextProvider;
