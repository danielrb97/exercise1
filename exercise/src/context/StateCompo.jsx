import React, { useState } from "react";
import { userContext } from "./counterContext";

const StateCompo = ({ children }) => {
  const [user, setUser] = useState("");
  const [editUser, setEditUser] = useState(false)

  const handleUser = (dataUser) => {
    setUser(dataUser)
  };

  



  return (
    <userContext.Provider value={{ handleUser, user,editUser,setEditUser }}>
      {children}
    </userContext.Provider>
  );
};

export default StateCompo;
