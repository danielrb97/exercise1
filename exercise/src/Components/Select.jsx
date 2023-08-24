const SelectButton = ({ Atributte, state }) => (
  <>
    <select
      className="select-box"
      name={Atributte.name}
      onChange={(e) => state(e.target.value)}
    >
      <option value={Atributte.value} selected>
        {Atributte.text}
      </option>
      <option value={Atributte.value2}>
        {Atributte.text2}
      </option>
    </select>
  </>
);

export default SelectButton;
