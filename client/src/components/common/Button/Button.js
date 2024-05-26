import styles from "./Button.module.css";

const Button = ({
  backgroundColor,
  color = "#ffffff",
  type = "submit",
  label,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`${className} ${styles["button"]}`}
      type={type}
      style={{ backgroundColor: backgroundColor, color: color }}
      {...props}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;
