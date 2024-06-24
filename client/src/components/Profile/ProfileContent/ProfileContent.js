import PostsGrid from "./PostsGrid";
import styles from "./ProfileContent.module.css";

const ProfileContent = ({ selectedTab, posts }) => {
  let content;
  if (selectedTab === "posts") {
    content = <PostsGrid posts={posts.posts} />;
  }

  return <div className={styles["profile-content-container"]}>{content}</div>;
};

export default ProfileContent;
