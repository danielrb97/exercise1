import React, { useState } from "react";
import "./App.css";
import { intList } from "./Components/Interfaces";
import TodoList from "./Components/TodoList";
import AddItem from "./Components/AddItem";
import SelectButton from "./Components/Select";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [id, setId] = useState<string>("");
  const [darkTheme, setDarkTheme] = useState("white");
  const [taskList, setTaskList] = useState<intList[]>([]);

  const handleItem = (task: string) => {
    setTaskList([...taskList, { id: id, task: task, completed: false }]);
    setId(uuidv4());
  };

  const handleDelete = (index: string) => {
    setTaskList(taskList.filter((a) => a.id !== index));
  };

  const delAll = () => {
    setTaskList([]);
  };

  const editTask = (newItem: intList, value: string): void => {
    const indexItem = taskList.findIndex((item, index) => {
      return item.id === newItem.id;
    });
    if (value === "input-type-checkbox") {
      newItem.completed = !newItem.completed;
    } else {
      newItem.task = value;
    }
    const copyList = [...taskList];
    copyList[indexItem] = newItem;
    setTaskList(copyList);
  };

  const DeleteDoneTasks = () => {
    setTaskList(taskList.filter((a) => a.completed !== true));
  };

  const ChangeTheme = (color: string) => {
    setDarkTheme(color);
    document.documentElement.style.setProperty("--main-bg-color", color);
  };
  return (
    <div className={darkTheme === "white" ? "App" : "App-darkTheme"}>
      <SelectButton
        Atributte={{
          name: "changeStyle",
          value: "white",
          value2: "black",
          text: "light",
          text2: "dark",
        }}
        state={ChangeTheme}
      />

      <AddItem handleItem={handleItem} />
      <TodoList
        DeleteDoneTasks={DeleteDoneTasks}
        delAll={delAll}
        taskList={taskList}
        handleDelete={handleDelete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
