import { useState  } from "react";
import SelectButton from "./Select";

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
      display:  items.task === "" ? "none" : "",
    };
  };
  const editAtribute = (item) => {
    console.log("hola mundo",items);
    setHandleDisabled(!handleDisabled);
  };
  
  const [handleDisabled, setHandleDisabled] = useState(true);
  const [handleFontStyle,  setHandleFontStyle] = useState('normal')


  return (
    <div className="item-container">
      <form onSubmit={e=>e.preventDefault()}>
        <input
          type="checkbox"
          name="input-type-checkbox"
          checked={items.completed}
          onChange={(e) => editTask(items, e.target.name)}
          className="checkbox"
          style={getStyleCheck()}
        />
        <input
          style={getStyle()}
          type="text"
          placeholder= {items.task}
          value={items.task}
          name="input-type-text-editItem"
          id="ItemList"
          onChange={(e) => editTask(items,e.target.value)}
          disabled={handleDisabled}
          minLength={5}
          maxLength={50}
        />
        
        {handleDisabled === true ? (
          <button className="EditButton" onClick={() => setHandleDisabled(!handleDisabled)}>
            Edit
          </button>
        ) : (
          <button className="DoneButton" onClick={() => editAtribute(!handleDisabled)}>
            Done
          </button>
        )}
        
        <button className="DeleteButton" onClick={() => handleDelete(items.id)}>
          x
        </button>
        
        <SelectButton Atributte={{
          name:"changeStyle",
          value:"normal",
          value2:"italica",
          text:"Normal",
          text2:"Italica"
        }}
        state={setHandleFontStyle}/>
      </form>
    </div>
  );
}

export default TodoItem;
