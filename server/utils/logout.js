export const logout = (req, res) => {
  return new Promise((resolve, reject) => {
    req.session.destroy(err => {
      if (err) {
        reject(err);
      }
      delete req.session;
      res.clearCookie(process.env.SESSION_NAME);
      resolve();
    });
  });
};
