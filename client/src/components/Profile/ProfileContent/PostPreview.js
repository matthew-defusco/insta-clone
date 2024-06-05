import styles from "./PostPreview.module.css";

const PostPreview = ({ post }) => {
  return (
    <div className={styles["image-container"]}>
      <img
        src={post.imageUrl}
        key={post.imageName}
        alt="something"
        className={styles.image}
      />
    </div>
  );
};

export default PostPreview;
