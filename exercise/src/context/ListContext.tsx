import React, { PropsWithChildren, createContext, useState } from "react";
const { v4: uuid } = require("uuid");

type User = {
  user: string;
  id: string;
};

type ListType = {
  userArray: User[];
  editUser: () => void;
  addUser: (newUser: string) => void;
  deleteUser: (userId: string) => void;
};

const useContextValues = () => {
  const [userArray, setUserArray] = useState<User[]>([
    { user: "Franco", id: uuid() },
  ]);

  const editUser = (): void => {
    console.log(editUser);
  };

  const addUser = (newUser: string): void => {
    const newUserArray = [...userArray, { user: newUser, id: uuid() }];
    console.log(newUserArray);
    setUserArray(newUserArray);
    console.log("add user");
  };

  const deleteUser = (userId: string): void => {
    const newUserArray = userArray.filter((user) => user.id !== userId);
    console.log(newUserArray);
    setUserArray(newUserArray);
    console.log("delete user");
  };

  return {
    userArray,
    editUser,
    addUser,
    deleteUser,
  };
};

export const ListContext = createContext<ListType>({
  userArray: [{ user: "", id: "" }],
  editUser: () => {},
  addUser: () => {},
  deleteUser: () => {},
});

const ListContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const contextValue = useContextValues();

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};

export default ListContextProvider;
