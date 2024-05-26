export const sessionizeUser = user => {
  return {
    userId: user.id,
    username: user.username,
    profileImage: user.profileImagePath,
  };
};
