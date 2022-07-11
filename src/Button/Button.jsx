import cl from "./Button.module.css";
import Icon from "./icon.svg";

export const Button = ({
  children = "Click me",
  type,
  size,
  color,
  variant,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      className={[cl.button, cl[size], cl[variant], cl[type],cl[color]].join(" ")}
      disabled={disabled}
      {...props}>
      {startIcon ? <img src={Icon} alt="" className={cl.svgStart}></img> : ""}
      {children}
      {endIcon ? <img src={Icon} alt="" className={cl.svgEnd}></img> : ""}
    </button>
  );
};
