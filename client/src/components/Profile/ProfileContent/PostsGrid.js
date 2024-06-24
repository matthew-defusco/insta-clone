import { useState } from "react";

import PostPreview from "./PostPreview";
import Modal from "../../common/Modal/Modal";
import styles from "./PostsGrid.module.css";
import Post from "../../Post/Post";

const PostsGrid = ({ posts }) => {
  const [showPost, setShowPost] = useState(false);
  const [post, setPost] = useState(null);

  const showPostHandler = post => {
    console.log(post);
    setPost(post);
    setShowPost(true);
  };

  return (
    <div className={styles["posts-grid"]}>
      {posts.map(post => {
        return (
          <PostPreview
            post={post}
            key={post.imageName}
            showPost={showPostHandler}
          />
        );
      })}
      <Modal
        isOpen={showPost}
        onClose={() => setShowPost(false)}
        className={styles["modal"]}
      >
        {post && <Post post={post} />}
      </Modal>
    </div>
  );
};

export default PostsGrid;
