export const auth = (req, res, next) => {
  if (!req.session.userId) {
    next(new Error("You need to log in for that!"));
  }
};
