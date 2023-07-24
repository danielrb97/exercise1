import TodoItem from "./TodoItem";
import DeleteAll from "./DeleteAll";

const TodoList = ({
  listaTareas,
  handleCheckBox,
  handleDelete,
  borrarTodo,
  editTask
}) => (
  <div className="List-container">
    {listaTareas.map((items, index) => {
      return (
        <TodoItem
          key={index}
          items={items}
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
    ) : (
      <></>
    )}
  </div>
);

export default TodoList;
