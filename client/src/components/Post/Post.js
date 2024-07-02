import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Post.module.css";
import { useState } from "react";

const Post = ({ post }) => {
  const [heartClass, setHeartClass] = useState(null);
  const [heartColor, setHeartColor] = useState("black");
  console.log(post._id);

  const heartClickHandler = () => {
    setHeartClass("clicked");
    setHeartColor(prevColor => {
      if (prevColor == "black") {
        return "red";
      } else {
        return "black";
      }
    });
  };

  return (
    <div className={styles["post-container"]}>
      <img src={post.imageUrl} alt={post.caption} style={{ width: "100%" }} />
      <section className={styles["engage-section"]}>
        <FontAwesomeIcon
          icon={heartColor == "black" ? faHeart : solidHeart}
          onClick={heartClickHandler}
          className={styles[heartClass]}
          onAnimationEnd={() => setHeartClass(null)}
          style={{ color: heartColor }}
        />
        <FontAwesomeIcon icon={faComment} />
      </section>
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
