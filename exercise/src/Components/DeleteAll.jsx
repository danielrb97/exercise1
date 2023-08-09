const DeleteAll = ({ Atributte, state }) => (
  <>
    <button className="DeleteAllButton" onClick={(e) => state(e.target.event)}>
      {Atributte.text}
    </button>
  </>
);

export default DeleteAll;
