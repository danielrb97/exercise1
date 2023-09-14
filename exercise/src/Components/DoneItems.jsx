import React, { useContext, useState } from "react";
import { ListContext } from "../context/StateCompo";
import { useForm } from "react-hook-form";

function DoneItems() {
  const { user, editUser } = useContext(ListContext);
  const [isEditUser, setEditUser] = useState(false);
  const { handleSubmit, register } = useForm({ defaultValues: { user } });

  const submit = (values) => {
    editUser(values.user);
    setEditUser(!isEditUser);
  };

  return (
    <>
      <div className="App">
        <h1>{user}</h1>
        <h2>User info</h2>
        <form onSubmit={handleSubmit(submit)}>
          {isEditUser ? (
            <>
              <input type="text" id="user" {...register("user")} />
              <button type="submit">Done</button>
            </>
          ) : (
            <button onClick={() => setEditUser(!isEditUser)}>
              Edit User Name
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default DoneItems;
