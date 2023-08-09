import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddItem({ handleItem }) {
  const [newItem, setNewItem] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNewItem = (data) => {
    console.log(data);
    handleItem(newItem);
    setNewItem("");
  };
  return (
    <div className="addItem-container">
      <form onSubmit={handleSubmit(handleNewItem)}>
        <h1>Task List!</h1>
        <input
          value={newItem}
          type="text"
          name="AddItem"
          id="AddItem"
          {...register("AddItem", {
            required: true || "no puedes agregar campos vacios",
            validate: {
              minLength: (v) =>
                v.length >= 5 || "debe contener al menos 5 caracteres",
              maxLength: (v) => v.length <= 50 || "maximo de 50 caracteres",
            },
          })}
          onChange={(e) => setNewItem(e.target.value)}
        />
        {errors.AddItem?.message && (
          <div>
            <small>{errors.AddItem.message}</small>
          </div>
        )}
        <button>Add Task</button>
      </form>
    </div>
  );
}
