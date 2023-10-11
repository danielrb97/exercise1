import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import { useForm } from "react-hook-form";
import RowList from "./ReusableButton";
import NonReusableRowList from "./NonReusableButton";

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

  const elementList = [
    "This is the third item",
    "This is the second item.",
    "This is the first item.",
  ];

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
      <NonReusableRowList text="click me!" icon="x" elementList={elementList} />
      <RowList>
        <h1>This is the first item.</h1>
        <p style={{ backgroundColor: "red" }}>This is the second item.</p>
        <p>This is the third item.</p>
      </RowList>
    </div>
  );
}

export default DoneItems;
