import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import styles from "./Profile.module.css";
import { useAuth } from "../../context/auth.js";
import Button from "../../components/common/Button/Button.js";
import Modal from "../../components/common/Modal/Modal.js";

const Profile = () => {
  const { user, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  // Update the state so that it's not permanently set to "false"
  // This lets you re-open the modal again once it's been closed in any way
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles["profile-header"]}>
        <img
          className={styles["profile-image"]}
          src={`http://localhost:3000/${user.profileImage}`}
          alt=""
        />
        <div className={styles["right-section"]}>
          <div className={styles.username}>
            <p>{user.username}</p>{" "}
            <a onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faGear} />
            </a>
          </div>
          <div className={styles["profile-header-actions"]}>
            <Button color="black">Edit profile</Button>
            <Button color="black" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      <div className={styles.divider}></div>
      <Modal isOpen={openModal} onClose={handleClose} className={styles.modal}>
        <div className={styles["modal-container"]}>
          <a onClick={handleLogout}>Log Out</a>
          <a onClick={handleClose}>Cancel</a>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
