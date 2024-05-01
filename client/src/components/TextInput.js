import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, name, onChange, className }) => {
  const onChangeHandler = e => {
    if (onChange) {
      onChange(e.target.value);
    } else {
      return undefined;
    }
  };

  console.log(className);

  return (
    <div className={`${styles["input"]} ${className}`}>
      <input type="text" required name={name} onChange={onChangeHandler} />
      <label htmlFor={name}>
        <span>{placeholder}</span>
      </label>
    </div>
  );
};

export default TextInput;
