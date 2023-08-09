import { useState  } from "react";

function TodoItem({ items, handleDelete, editTask }) {
  
  const getStyle = () => {
    return {
      textDecoration: items.completed ? "line-through" : "none",
      border: handleDisabled === true ? "none" : "",
      fontStyle: handleFontStyle === "normal" ? null : "italic" 
    };
  };

  const getStyleCheck = () => {
    return {
      display: updateTask === "" && items.task === "" ? "none" : "",
    };
  };
  const editAtribute = (id) => {
    console.log(items);
    setHandleDisabled(!handleDisabled);
    editTask(id, updateTask);
  };

  const [updateTask, setUpdateTask] = useState("");
  const [handleDisabled, setHandleDisabled] = useState(true);
  const [handleFontStyle,  setHandleFontStyle] = useState('normal')


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
          value={handleDisabled !== true ? updateTask : items.task}
          id="ItemList"
          onChange={(e) => setUpdateTask(e.target.value)}
          disabled={handleDisabled}
          minLength={5}
          maxLength={50}
        />
        
        {handleDisabled === true ? (
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
        <select className="select-box" name="changeStyle" onChange={(e) => setHandleFontStyle(e.target.value)} >
          <option value="normal" selected>Normal</option>
          <option value="italica" >Italica</option>
        </select>
      </form>
    </div>
  );
}

export default TodoItem;
