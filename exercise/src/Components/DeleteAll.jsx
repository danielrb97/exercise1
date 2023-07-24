const DeleteAll = ({ Atributte, borrarTodo }) => (
  <button className="borrarTodoButton" onClick={borrarTodo}>{Atributte.text}</button>
);

export default DeleteAll;
