import { Link, Form, useNavigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import styles from "./Layout.module.css";

const Layout = () => {
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
      <Outlet />
    </div>
  );
};

export default Layout;
