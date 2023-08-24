import { useState } from "react";
import SelectButton from "./Select";
import { useForm } from "react-hook-form";

function TodoItem({ items, handleDelete, editTask }) {
  const getStyle = () => {
    return {
      textDecoration: items.completed ? "line-through" : "none",
      border: handleDisabled === true ? "none" : "",
      fontStyle: handleFontStyle === "normal" ? null : "italic",
    };
  };

  const getStyleCheck = () => {
    return {
      display: items.task === "" ? "none" : "",
    };
  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [handleDisabled, setHandleDisabled] = useState(true);
  const [handleFontStyle, setHandleFontStyle] = useState("normal");

  return (
    <div className="item-container">
      <form
        onSubmit={(e) =>
          handleSubmit(
            setHandleDisabled(!handleDisabled),
            e.preventDefault(),
            editTask(items, e.target.value)
          )
        }
      >
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
          placeholder={items.task}
          value={items.task}
          name="ItemList"
          id="ItemList"
          disabled={handleDisabled}
          minLength={5}
          maxLength={50}
          {...register("ItemList")}
          required
        />
        {errors.ItemList?.message && (
          <div>
            <small>{errors.ItemList.message}</small>
          </div>
        )}

        {handleDisabled === true ? (
          <button className="EditButton">Edit</button>
        ) : (
          <button className="DoneButton">Done</button>
        )}

        <button className="DeleteButton" onClick={() => handleDelete(items.id)}>
          x
        </button>

        <SelectButton
          Atributte={{
            name: "changeStyle",
            value: "normal",
            value2: "italica",
            text: "Normal",
            text2: "Italica",
          }}
          state={setHandleFontStyle}
        />
      </form>
    </div>
  );
}

export default TodoItem;
