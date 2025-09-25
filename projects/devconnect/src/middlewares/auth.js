const adminAuth = (req, res, next) => {
  console.log("Authentication start");
  const adminToken = "xye";
  const isAdminAuthorized = adminToken === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("user Authentication start");
  const userToken = "xyz";
  const isAdminAuthorized = userToken === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized user request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth
};
