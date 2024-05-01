import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import styles from "./Signup.module.css";
import Button from "../../components/Button";
import { useAuth } from "../../context/auth";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let username = formData.get("username");
    let password = formData.get("password");
    let fullName = formData.get("fullName");

    const user = { email, username, password, fullName };

    const res = await fetch(`http://localhost:3000/api/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const sessionUser = await res.json();
    auth.login(sessionUser);
    navigate("/dashboard");
  };

  return (
    <div className={styles["page-container"]}>
      <section className={`${styles["signup"]}`}>
        <h1>Instagram</h1>
        <div>
          <h2>Sign up to see photos and videos from your friends.</h2>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <TextInput name="email" placeholder="Email" />
          <TextInput name="fullName" placeholder="Full Name" />
          <TextInput name="username" placeholder="Username" />
          <TextInput name="password" placeholder="Password" />
          <Button color={"#67B5FA"} label={"Sign up"} />
        </form>
      </section>
      <section className={styles["login-container"]}>
        Already have an account? <Link to="/">Log in</Link>
      </section>
    </div>
  );
};

export default Signup;
