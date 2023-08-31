import React, { useContext } from "react";
import { userContext } from "../context/counterContext";

function DoneItems() {
  const { handleUser, user, editUser, setEditUser } = useContext(userContext);

  return (
    <>
      <div className="App">
        <h1>{user}</h1>
        <h2>User info</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {editUser === true ? (
            <>
              <input
                type="text"
                placeholder={user}
                value={user}
                onChange={(e) => handleUser(e.target.value)}
              />
              <button onClick={() => setEditUser(!editUser)}>Done</button>
            </>
          ) : (
            <button onClick={() => setEditUser(!editUser)}>
              Edit User Name
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default DoneItems;
