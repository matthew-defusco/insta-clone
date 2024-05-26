import { Form, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import TextInput from "../../components/common/Input/TextInput.js";
import Button from "../../components/common/Button/Button.js";

const Signup = () => {
  return (
    <div className={styles["page-container"]}>
      <section className={`${styles["signup"]}`}>
        <h1>Instagram</h1>
        <div>
          <h2>Sign up to see photos and videos from your friends.</h2>
        </div>
        <Form method="POST">
          <TextInput name="email" placeholder="Email" />
          <TextInput name="fullName" placeholder="Full Name" />
          <TextInput name="username" placeholder="Username" />
          <TextInput name="password" placeholder="Password" />
          <Button backgroundColor={"#67B5FA"} label={"Sign up"} />
        </Form>
      </section>
      <section className={styles["login-container"]}>
        Already have an account? <Link to="/">Log in</Link>
      </section>
    </div>
  );
};

export default Signup;
