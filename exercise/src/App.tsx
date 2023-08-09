import React, { useState } from "react";
import "./App.css";
import { intList } from "./Components/Interfaces";
import TodoList from "./Components/TodoList";
import AddItem from "./Components/AddItem";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [id, setId] = useState<string>("");
  const [darkTheme, setDarkTheme] = useState("white")
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

  const editTask = (id: string, newtask: string) => {
    console.log(listaTareas);
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

  const DeleteDoneTasks = () => {
    setListaTareas(listaTareas.filter((a) => a.completed !== true));
  };

  const ChangeTheme = (color:string) => {
    setDarkTheme(color)
    document.documentElement.style.setProperty('--main-bg-color', color);
  };
  return (
    
    <div className={darkTheme === "white" ? 'App': 'App-darkTheme'}>
      <select className="select-box" name="changeStyle" onChange={(e) => ChangeTheme(e.target.value)} >
        <option value="white" selected>light</option>
        <option value="black" >dark</option>
      </select>

      <AddItem handleItem={handleItem} />
        <TodoList
          DeleteDoneTasks={DeleteDoneTasks}
          delAll={delAll}
          listaTareas={listaTareas}
          handleDelete={handleDelete}
          editTask={editTask}
        />      
    </div>
  );
}

export default App;
