import { sessionizeUser } from "./helpers.js";

export const login = (req, user) => {
  req.session.user = sessionizeUser(user);
};
