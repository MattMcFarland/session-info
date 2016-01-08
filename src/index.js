module.exports = () => {
  return (req, res, next) => {
    console.log(
      req.sessionStore,
      req.sessionID,
      req.session
    );
    next();
  };
};
