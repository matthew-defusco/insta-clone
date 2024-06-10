export const auth = (req, res, next) => {
  console.log("session log coming from auth middleware", req.session);
  console.log("cookies.sid log coming from auth middleware", req.cookies.sid);
  if (!req.session.user) {
    next(new Error("You need to log in for that!"));
  }
  next();
};
