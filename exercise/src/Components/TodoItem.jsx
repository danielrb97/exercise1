import { useState } from "react";
import { set, useForm } from "react-hook-form";

function TodoItem({ items, handleDelete, editTask }) {
  const getStyle = () => {
    return {
      textDecoration: items.completed ? "line-through" : "none",
      border: handleDisabled == true ? "none" : "",
    };
  };

  const getStyleCheck = () => {
    return {
      display: updateTask == "" && items.task == "" ? "none" : "",
    };
  };
  const editAtribute = (id) => {
    console.log(items);
    setHandleDisabled(!handleDisabled);
    editTask(id, updateTask);
  };

  const [updateTask, setUpdateTask] = useState("");
  const [handleDisabled, setHandleDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="item-container">
      <form onSubmit={e=>e.preventDefault()}>
        <input
          type="checkbox"
          checked={items.completed}
          onChange={() => editTask(items.id, "checkbox")}
          className="checkbox"
          style={getStyleCheck()}
        />
        <input
          style={getStyle()}
          type="text"
          placeholder="que hay que hacer?"
          value={handleDisabled != true ? updateTask : items.task}
          id="ItemLista"
          onChange={(e) => setUpdateTask(e.target.value)}
          disabled={handleDisabled}
        />
        {handleDisabled == true ? (
          <button className="EditButton" onClick={() => editAtribute(items.id)}>
            Edit
          </button>
        ) : (
          <button className="DoneButton" onClick={() => editAtribute(items.id)}>
            Done
          </button>
        )}

        <button className="DeleteButton" onClick={() => handleDelete(items.id)}>
          x
        </button>
      </form>
    </div>
  );
}

export default TodoItem;
