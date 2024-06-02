import { config } from "../config";

export const addPost = async ({ request, params }) => {
  const URL = config.url;
  const formData = await request.formData();

  const res = await fetch(URL + "/api/posts", {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  const responseData = await res.json();
  console.log(responseData);

  return responseData;
};
