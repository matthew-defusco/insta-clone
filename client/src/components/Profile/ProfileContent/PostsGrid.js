import PostPreview from "./PostPreview";
import styles from "./PostsGrid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <div className={styles["posts-grid"]}>
      {posts.map(post => {
        return <PostPreview post={post} />;
      })}
    </div>
  );
};

export default PostsGrid;
