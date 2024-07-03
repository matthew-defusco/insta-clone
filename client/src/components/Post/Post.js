import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { config } from "../../config";
import { useAuth } from "../../context/auth";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  const fetcher = useFetcher();
  const { user } = useAuth();
  const { url } = config;
  const [heartClass, setHeartClass] = useState(null);
  const [heartColor, setHeartColor] = useState(
    post.likedBy.includes(user.userId) ? "red" : "black"
  );

  // useEffect(() => {
  //   if (post.likedBy.includes(user.userId)) {
  //     setHeartColor("red")
  //   }
  // }, [])

  const heartClickHandler = async () => {
    setHeartClass("clicked");
    setHeartColor(prevColor => {
      if (prevColor == "black") {
        return "red";
      } else {
        return "black";
      }
    });

    // try {
    //   const res = await fetch(url + "/api/posts/" + post._id, {
    //     method: "PUT",
    //     credentials: "include",
    //   });

    //   const data = await res.json();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className={styles["post-container"]}>
      <img src={post.imageUrl} alt={post.caption} style={{ width: "100%" }} />
      <section className={styles["engage-section"]}>
        <fetcher.Form method="PUT" action={`/api/posts/${post._id}`}>
          <label>
            <input
              hidden
              readOnly
              value="like"
              name="engage-type"
              type="submit"
            />
            <FontAwesomeIcon
              icon={heartColor == "black" ? faHeart : solidHeart}
              onClick={heartClickHandler}
              className={styles[heartClass]}
              onAnimationEnd={() => setHeartClass(null)}
              style={{ color: heartColor }}
            />
          </label>
        </fetcher.Form>
        <fetcher.Form method="PUT" action={`/api/posts/${post._id}`}>
          <label>
            <input
              hidden
              type="submit"
              defaultValue="comment"
              name="engage-type"
            />
            <FontAwesomeIcon icon={faComment} />
          </label>
        </fetcher.Form>
      </section>
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
