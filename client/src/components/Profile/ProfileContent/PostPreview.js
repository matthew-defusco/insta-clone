import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import styles from "./PostPreview.module.css";

const PostPreview = ({ post, showPost }) => {
  const handleClick = () => {
    showPost(post);
  };

  return (
    <div className={styles["image-container"]} onClick={handleClick}>
      <img
        src={post.imageUrl}
        key={post.imageName}
        alt="something"
        className={styles.image}
      />
      <div className={styles["hover-state"]}>
        <div>
          <FontAwesomeIcon icon={faHeart} /> <p>{post.likes}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> <p>{post.comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
