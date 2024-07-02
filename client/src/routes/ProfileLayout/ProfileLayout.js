import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProfileLayout.module.css";
import { useAuth } from "../../context/auth.js";
import { config } from "../../config";
import Button from "../../components/common/Button/Button.js";
import Modal from "../../components/common/Modal/Modal.js";
import Divider from "../../components/common/Divider/Divider";
import ProfileTab from "../../components/Profile/ProfileTab/ProfileTab";
import ProfileContent from "../../components/Profile/ProfileContent/ProfileContent";

const ProfileLayout = ({ profileUser }) => {
  const { user, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const posts = useLoaderData();
  const navigate = useNavigate();
  const URL = config.url;
  let profileActions;
  let modalActions;

  // Update the state so that it's not permanently set to "false"
  // This lets you re-open the modal again once it's been closed in any way
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const tabs = ["posts", "followers", "following"];

  const changeTab = index => {
    setActiveTab(index);
  };

  if (profileUser.username == user.username) {
    profileActions = (
      <>
        <Button color="black">Edit profile</Button>
        <Button color="black" onClick={handleLogout}>
          Logout
        </Button>
      </>
    );
    modalActions = (
      <>
        <a onClick={handleLogout}>Log Out</a>
      </>
    );
  } else {
    profileActions = (
      <>
        <Button color="black">Follow</Button>
      </>
    );
    modalActions = (
      <>
        <a onClick={handleFollow}>Follow</a>
      </>
    );
  }

  return (
    <div className={styles["profile-container"]}>
      <header className={styles["profile-header"]}>
        <img
          className={styles["profile-image"]}
          src={`${URL}/${user.profileImage}`}
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
            {profileActions}
          </div>
        </div>
      </header>
      <Divider />
      <div className={styles["tab-container"]}>
        {tabs.map((tab, i) => {
          let tabData;
          tab == "posts"
            ? (tabData = posts.posts.length)
            : tab == "followers"
            ? (tabData = 0)
            : (tabData = 0);

          return (
            <ProfileTab
              tabLabel={tab}
              tabData={tabData}
              isActive={activeTab == i}
              key={i}
              onClick={() => changeTab(i)}
            />
          );
        })}
      </div>
      <Divider />
      <ProfileContent selectedTab={tabs[activeTab]} posts={posts} />
      <Modal isOpen={openModal} onClose={handleClose} className={styles.modal}>
        <div className={styles["modal-container"]}>
          <a onClick={handleLogout}>Log Out</a>
          <a onClick={handleClose}>Cancel</a>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileLayout;
