import { Link } from "react-router-dom";

import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import styles from "./Home.module.css";

const Home = () => {
  const auth = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username, password);

    auth.login({ username, password });
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
          <form method="POST" onSubmit={handleSubmit}>
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
          {auth.user && "Hello from a logged in state!"}
        </div>
        <div className={styles["signup-container"]}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
