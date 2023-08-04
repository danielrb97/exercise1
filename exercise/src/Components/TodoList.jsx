import TodoItem from "./TodoItem";
import DeleteAll from "./DeleteAll";

const TodoList = ({
  listaTareas,
  handleDelete,
  delAll,
  editTask,
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
    {listaTareas.length != 0 ? (
      <DeleteAll
        delAll={delAll}
        Atributte={{ text: "Borrar todo alv" }}
      />
    ) : null}
  </div>
);

export default TodoList;
