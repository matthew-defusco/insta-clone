import PostPreview from "./PostPreview";
import styles from "./PostsGrid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <div className={styles["posts-grid"]}>
      {posts.map(post => {
        return <PostPreview post={post} key={post.imageName} />;
      })}
    </div>
  );
};

export default PostsGrid;
