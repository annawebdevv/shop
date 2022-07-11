import cl from "./CheckBox.module.css";

export const CheckBox = ({ value = "stock", round="" , name="", checked=false}) => {
  return (
    <div className="checkbox_container">
      <input name={name} type="checkbox" checked={checked} readOnly value={value} className={[cl.checkbox, cl[round]].join(" ")} />
      <label> {value} </label>
    </div>
  );
};
