import styles from "./Button.module.css";

const Button = ({ color, type = "submit", label, className }) => {
  return (
    <button
      className={`${className} ${styles["button"]}`}
      type={type}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

export default Button;
