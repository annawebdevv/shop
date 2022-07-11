import cl from "./Input.module.css";
import Icon from "./icon.svg";

export const Input = ({
  type,
  size,
  width,

  disabled,
  startIcon,
  endIcon,
  placeholder,
  ...props
}) => {
  return (
    <label>
      <input
        className={[cl.input, cl[size], cl[type], cl[width]].join(" ")}
        disabled={disabled}
        placeholder={placeholder}
        {...props}/>
    </label>
  );
};
