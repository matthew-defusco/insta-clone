import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles["home-container"]}>
      <Outlet />
    </div>
  );
};

export default Layout;
