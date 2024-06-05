import PostsGrid from "./PostsGrid";
import styles from "./ProfileContent.module.css";

const ProfileContent = ({ selectedTab, posts }) => {
  let content;
  if (selectedTab === "posts") {
    // content = posts.posts.map(post => {
    //   return (
    //     <img
    //       src={post.imageUrl}
    //       alt="something"
    //       key={post.imageName}
    //       width="300px"
    //     />
    //   );
    // });
    content = <PostsGrid posts={posts.posts} />;
  }

  // console.log(posts.posts.map(post => post.imageUrl));
  return <div className={styles["profile-content-container"]}>{content}</div>;
};

export default ProfileContent;
