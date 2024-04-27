import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, name, onChange }) => {
  const onChangeHandler = e => {
    onChange(e.target.value);
  };

  return (
    <div className={styles["input"]}>
      <input type="text" required name={name} onChange={onChangeHandler} />
      <label htmlFor={name}>
        <span>{placeholder}</span>
      </label>
    </div>
  );
};

export default TextInput;
