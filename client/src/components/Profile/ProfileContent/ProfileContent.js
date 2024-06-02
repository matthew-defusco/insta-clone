const ProfileContent = ({ selectedTab, posts }) => {
  let content;
  if (selectedTab === "posts") {
    content = posts.posts.map(post => {
      return (
        <img
          src={post.imageUrl}
          alt="something"
          key={post.imageName}
          width="300px"
        />
      );
    });
  }

  // console.log(posts.posts.map(post => post.imageUrl));
  return (
    <div>
      {selectedTab}
      {content}
    </div>
  );
};

export default ProfileContent;
