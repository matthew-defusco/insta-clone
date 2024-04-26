import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <div>
        <img
          className={styles["phone-demo"]}
          src="/profile-portrait.png"
          alt="phone with picture"
        />
        <img
          className={`${styles["phone-demo"]} ${styles["phone-2"]}`}
          src="/profile-portrait.png"
          alt="phone with picture"
        />
      </div>
      <div className={styles["right-container"]}>
        <h1>Instagram</h1>
        <div className={styles["login-form"]}>
          <input type="text" required />

          <label htmlFor="username">
            <span>Phone number, username, or email</span>
          </label>
        </div>
        <div className={styles["signup-container"]}>Signup stuff goes here</div>
      </div>
    </div>
  );
};

export default Home;
