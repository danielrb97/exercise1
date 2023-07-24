import React, { useState } from "react";

export default function AddItem({ handleItem }) {
  const [newItem, setNewItem] = useState("");
  const handleNewItem = (e) => {
    e.preventDefault();
    setNewItem("");
  };
  return (
    <div className="addItem-container">
      <form onSubmit={handleNewItem}>
        <h1>Task List!</h1>
        <input
          value={newItem}
          type="text"
          name="AddItem"
          id="AddItem"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => handleItem(newItem)}>Add Task</button>
      </form>
    </div>
  );
}
