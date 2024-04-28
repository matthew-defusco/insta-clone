import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, name, onChange, className }) => {
  const onChangeHandler = e => {
    onChange(e.target.value);
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
