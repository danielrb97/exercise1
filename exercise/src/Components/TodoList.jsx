import TodoItem from "./TodoItem";
import DeleteAll from "./DeleteAll";

const TodoList = ({
  listaTareas,
  handleCheckBox,
  handleDelete,
  borrarTodo,
  editTask,
}) => (
  <div className="List-container">
    {listaTareas.map((item, index) => {
      return (
        <TodoItem
          key={index}
          items={item}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
          editTask={editTask}
        />
      );
    })}
    {listaTareas.length != 0 ? (
      <DeleteAll
        borrarTodo={borrarTodo}
        Atributte={{ text: "Borrar todo alv" }}
      />
    ) : null}
  </div>
);

export default TodoList;
