import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, name, onChange, className }) => {
  const onChangeHandler = e => {
    if (onChange) {
      onChange(e.target.value);
    } else {
      return undefined;
    }
  };

  return (
    <div className={`${styles["input"]} ${className}`}>
      <input
        type="text"
        required
        name={name}
        onChange={onChangeHandler}
        id={name}
      />
      <label htmlFor={name}>
        <span>{placeholder}</span>
      </label>
    </div>
  );
};

export default TextInput;
