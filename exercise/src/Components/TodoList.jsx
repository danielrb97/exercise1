import TodoItem from "./TodoItem";
import DeleteAll from "./DeleteAll";

const TodoList = ({
  taskList,
  handleDelete,
  delAll,
  editTask,
  DeleteDoneTasks
}) => (
  <div className="List-container">
    {taskList.map((item, index) => {
      return (
        <TodoItem
          items={item}
          handleDelete={handleDelete}
          editTask={editTask}
        />
      );
    })}
    {taskList.length !== 0 ? (
      <div>
        <DeleteAll
          state={delAll}
          Atributte={{ text: "Borrar todo alv" }}
        />
        <DeleteAll
        state={DeleteDoneTasks}
        Atributte={{ text: "Borrar tareas terminadas" }}
        />
      </div>
      
    ) : null}
  </div>
);

export default TodoList;
