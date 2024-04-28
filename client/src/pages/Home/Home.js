import Button from "../../components/Button";
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
        <img
          className={`${styles["phone-demo"]} ${styles["phone-2"]}`}
          src="/profile-portrait.png"
          alt="phone with picture"
        />
      </section>
      <section className={styles["right-section"]}>
        <div className={styles["login"]}>
          <h1>Instagram</h1>
          <form>
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
            <Button color={"#67B5FA"} label="Log in" />
          </form>
        </div>
        <div className={styles["signup-container"]}>
          Don't have an account? <a href="">Sign up</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
