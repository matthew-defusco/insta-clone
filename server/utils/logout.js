export const logout = (req, res) => {
  return new Promise((resolve, reject) => {
    req.session.destroy(err => {
      req.session = null;
      if (err) {
        reject(err);
      }
      res.clearCookie(process.env.SESSION_NAME);
      resolve();
    });
  });
};
