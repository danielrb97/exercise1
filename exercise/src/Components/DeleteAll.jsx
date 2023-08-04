const DeleteAll = ({ Atributte, delAll }) => (
  <button className="borrarTodoButton" onClick={delAll}>
    {Atributte.text}
  </button>
);

export default DeleteAll;
