const DeleteAll = ({ Atributte, state }) => (
  <>
    <button className="DeleteAllButton" onClick={(e) => state(e.target.event)}>
      {Atributte.text}
    </button>
  </>
);

export default DeleteAll;

/*
const DeleteAll = props => (
  <>
    <button className="DeleteAllButton" onClick={() => props.calando()}>
      {props.children}
    </button>
  </>
);

export default DeleteAll;
*/
