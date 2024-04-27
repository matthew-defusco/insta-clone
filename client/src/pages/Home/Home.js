import TextInput from "../../components/TextInput";
import styles from "./Home.module.css";

const Home = () => {
  const onUsernameChangeHandler = arg => {
    console.log(arg);
  };

  const onPasswordChangeHandler = arg => {
    console.log(arg);
  };

  return (
    <div className={styles["home-container"]}>
      <section className={styles["left-section"]}>
        {/* <img
          className={styles["phone-demo"]}
          src="/profile-portrait.png"
          alt="phone with picture"
        /> */}
        <img
          className={`${styles["phone-demo"]} ${styles["phone-2"]}`}
          src="/profile-portrait.png"
          alt="phone with picture"
        />
      </section>
      <section className={styles["right-section"]}>
        <div className={styles["login"]}>
          <h1>Instagram</h1>
          <TextInput
            name="username"
            placeholder="Email, username, or phone number"
            onChange={onUsernameChangeHandler}
          />
          <TextInput
            name="password"
            placeholder="Password"
            onChange={onPasswordChangeHandler}
          />
        </div>
        <div className={styles["signup-container"]}>Signup stuff goes here</div>
      </section>
    </div>
  );
};

export default Home;
