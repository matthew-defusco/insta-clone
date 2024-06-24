import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles["post-container"]}>
      <img src={post.imageUrl} alt={post.caption} style={{ width: "100%" }} />
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
