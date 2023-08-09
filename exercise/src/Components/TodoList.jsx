import TodoItem from "./TodoItem";
import DeleteAll from "./DeleteAll";

const TodoList = ({
  listaTareas,
  handleDelete,
  delAll,
  editTask,
  DeleteDoneTasks
}) => (
  <div className="List-container">
    {listaTareas.map((item, index) => {
      return (
        <TodoItem
          key={index}
          items={item}
          handleDelete={handleDelete}
          editTask={editTask}
        />
      );
    })}
    {listaTareas.length !== 0 ? (
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
