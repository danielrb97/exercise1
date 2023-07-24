import React, { useState } from "react";
import "./App.css";
import { intList } from "./Components/Interfaces";
import TodoList from "./Components/TodoList";
import AddItem from "./Components/AddItem";

function App() {
  const [id, setId] = useState<number>(0);
  var count: number = id;

  const [listaTareas, setListaTareas] = useState<intList[]>([]);

  const handleItem = (task: string) => {
    setListaTareas([...listaTareas, { id: id, task: task, completed: false }]);
    count++;
    setId(count);
  };

  const handleCheckBox = (id: number) => {
    setListaTareas(
      listaTareas.map((item) => {
        return item.id === Number(id)
          ? { ...item, completed: !item.completed }
          : { ...item };
      })
    );
  };

  const handleDelete = (index: number) => {
    setListaTareas(listaTareas.filter((a) => a.id !== index));
  };

  const borrarTodo = () => {
    setListaTareas([]);
  };

  const editTask= (id:number,newtask:string) =>  {
    setListaTareas(
      listaTareas.map((item)=>{
        return item.id === Number(id) ? {...item, task:newtask} : {...item};
      })
    )
  }
  return (
    <div className="App">
      <AddItem handleItem={handleItem} />
      <TodoList
        borrarTodo={borrarTodo}
        listaTareas={listaTareas}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
