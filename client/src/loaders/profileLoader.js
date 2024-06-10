import { config } from "../config";

export const profileLoader = authContext => async () => {
  const { user } = authContext;
  const URL = config.url;

  const posts = await fetch(`${URL}/api/posts/${user.userId}`, {
    credentials: "include",
  });
  return posts;
};
