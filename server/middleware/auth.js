export const auth = (req, res, next) => {
  if (!req.session.user) {
    next(new Error("You need to log in for that!"));
  }
  next();
};
