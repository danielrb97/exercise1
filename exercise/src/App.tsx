import React, { useState } from "react";
import "./App.css";
import { intList } from "./Components/Interfaces";
import TodoList from "./Components/TodoList";
import AddItem from "./Components/AddItem";
const { v4: uuidv4 } = require('uuid');

function App() {
  const [id, setId] = useState<string>('');

  const [listaTareas, setListaTareas] = useState<intList[]>([]);

  const handleItem = (task: string) => {
    setListaTareas([...listaTareas, { id: id, task: task, completed: false }]);
    setId(uuidv4());
  };

  const handleDelete = (index: string) => {
    setListaTareas(listaTareas.filter((a) => a.id !== index));
  };

  const delAll = () => {
    setListaTareas([]);
  };


  const editTask = (id:string, newtask: string) => {
    setListaTareas(
      listaTareas.map((item) => {
        return item.id === id
          ? newtask === "checkbox"
            ? { ...item, completed: !item.completed }
            : { ...item, task: newtask }
          : { ...item };
      })
    );
  };
 
  /*
  const handleCheckBox = (id: number) => {
    setListaTareas(
      listaTareas.map((item) => {
        return item.id === Number(id)
          ? { ...item, completed: !item.completed }
          : { ...item };
      })
    );
  };
  */
  return (
    <div className="App">
      <AddItem handleItem={handleItem} />
      <TodoList
        delAll={delAll}
        listaTareas={listaTareas}
        handleDelete={handleDelete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
