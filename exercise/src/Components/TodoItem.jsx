import { useState } from "react";

function TodoItem({ items, handleCheckBox, handleDelete, editTask }) {
  const getStyle = () => {
    return {
      textDecoration: items.completed ? "line-through" : "none",
      border: handleDisabled == true ? 'none' : '',
    };
  };


  const getStyleCheck = () => {
    return {
      display: updateTask == '' && items.task == '' ? 'none' : ''
    };
  };
  const editAtribute = (id) => {
    setHandleDisabled(!handleDisabled);
    editTask(id,updateTask)
  };

  const [updateTask, setUpdateTask] = useState("");
  const [handleDisabled, setHandleDisabled] = useState(true);

  return (
    <div className="item-container">
      <input
        type="checkbox"
        checked={items.completed}
        onChange={() => handleCheckBox(items.id)}
        className="checkbox"
        style={getStyleCheck()}
      ></input>
      <>
        <input
          style={getStyle()}
          type="text"
          placeholder='que hay que hacer?'
          value={handleDisabled != true ? (updateTask) : items.task }
          id="ItemLista"
          onChange={(e) => setUpdateTask(e.target.value)}
          disabled={handleDisabled}
        />
      </>
      {handleDisabled == true ? (
        <button className="EditButton" onClick={()=>editAtribute(items.id)}>Edit</button>
      ) : (
        <button className="DoneButton" onClick={()=>editAtribute(items.id)}>Done</button>
      )}

      <button  className="DeleteButton" onClick={() => handleDelete(items.id)}>x</button>
    </div>
  );
}

export default TodoItem;
