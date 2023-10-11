import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import { useForm } from "react-hook-form";

function DoneItems() {
  const { userArray, addUser, deleteUser } = useContext(ListContext);
  // const [isEditUser, setEditUser] = useState(false);
  const { handleSubmit, register } = useForm();

  const submit = (values) => {
    console.log(values.user);
    addUser(values.user);
    //   editUser(values.user);
    //   setEditUser(!isEditUser);
  };

  return (
    <div className="App">
      <h2>User info</h2>
      <form onSubmit={handleSubmit(submit)}>
        <>
          <input type="text" id="user" {...register("user")} />
          <button type="submit">Add</button>
        </>
        {/* <button onClick={() => setEditUser(!isEditUser)}>Edit User Name</button> */}
      </form>
      <>
        {userArray.map(({ user, id }) => {
          return (
            <div key={id}>
              <button onClick={() => deleteUser(id)}>Delete</button>
              <>{user}</>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default DoneItems;
