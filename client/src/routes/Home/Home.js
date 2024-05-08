import { Link, Form, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import styles from "./Home.module.css";

const Home = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);

  //   const email = formData.get("email");
  //   const password = formData.get("password");

  //   await auth.login({ email, password });
  //   navigate("/dashboard");
  // };

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
          <Form method="POST">
            <TextInput
              name="email"
              placeholder="Email, username, or phone number"
            />
            <TextInput name="password" placeholder="Password" />
            <Button color={"#67B5FA"} label="Log in" />
          </Form>
        </div>
        <div className={styles["signup-container"]}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
