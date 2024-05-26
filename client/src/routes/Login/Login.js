import { Form, Link } from "react-router-dom";
import TextInput from "../../components/common/Input/TextInput.js";
import Button from "../../components/common/Button/Button.js";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
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
          <Form method="POST">
            <TextInput
              name="email"
              placeholder="Email, username, or phone number"
            />
            <TextInput name="password" placeholder="Password" />
            <Button backgroundColor={"#67B5FA"} label="Log in" />
          </Form>
        </div>
        <div className={styles["signup-container"]}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </section>
    </>
  );
};

export default Login;
