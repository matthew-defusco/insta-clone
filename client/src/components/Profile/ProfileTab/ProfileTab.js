import styles from "./ProfileTab.module.css";

const ProfileTab = ({ tabLabel, isActive, ...props }) => {
  const styleList = isActive
    ? `${styles.container} ${styles.active}`
    : `${styles.container}`;

  return (
    <div className={styleList} {...props}>
      <p className={styles.count}>0</p>
      <p className={styles.label}>{tabLabel}</p>
    </div>
  );
};

export default ProfileTab;
