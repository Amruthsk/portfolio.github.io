// profileRouter
// -Post /profile
// -GET/profile/view
// -Patch/profile/edit(no password or email edit)
// -Patch/profile/password
// -Delete/profile
const express = require('express');
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth.js");



//get api - profile
profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    //validate cookie
    //get cookie

    //extract token form cookies

    //validate cookie response| login invalid

    //after authentication form middleware responds
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(401).send("Error: " + err.message);
  }
});

module.exports = profileRouter;