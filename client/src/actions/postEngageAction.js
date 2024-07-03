import { config } from "../config";

export const postEngageAction = async ({ request, params }) => {
  const { url } = config;
  const data = Object.fromEntries(await request.formData());
  const { postId } = params;

  switch (data["engage-type"]) {
    case "like":
      try {
        const res = await fetch(url + "/api/posts/" + postId, {
          method: "PUT",
          credentials: "include",
        });

        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    case "comment":
      console.log("Comment clicked");
      return "Comment clicked";
    default:
      return "An error occured";
  }
};
