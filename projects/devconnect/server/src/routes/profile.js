// profileRouter
// -Post /profile
// -GET/profile/view
// -Patch/profile/edit(no password or email edit)
// -Patch/profile/password
// -Delete/profile
const express = require("express");
const profileRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { userAuth } = require("../middlewares/auth.js");
const { validatePatchProfile } = require("../utils/validation");
const { validatePasswordUpdate } = require("../utils/validation");

//get api - profile
profileRouter.get("/profile/view", userAuth, async (req, res) => {
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

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    //1 connection
    console.log("--- BREACH CONFIRMED: /profile/edit endpoint hit ---");
    // 2 capture payload
    console.log("Payload intercepted");
    console.log(req.body);
    //3 validation of incoming data validated at utils - validation logic in utils

    if (!validatePatchProfile(req)) {
      return res
        .status(400)
        .json({ status: "failure", message: "Invalid edit fields" });
    }
    //4  ACQUIRE TARGET
    const userId = req.user._id;
    const loggedInUser = await User.findById(userId);

    if (!loggedInUser) {
      console.log("--- TARGET NOT FOUND ---");
      return res
        .status(404)
        .json({ status: "failure", message: "User not found." });
    }
    // 5 update logic
    console.log(loggedInUser);
    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });
    // 6.save
    await loggedInUser.save();
    // 1.REPORT SUCCESS
    console.log("--- TARGET UPDATED ---");
    res.status(200).json({
      status: "success",
      message: `${loggedInUser.firstName} your profile updated successfully`,
      data_received: req.body,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: "server error.check console for details",
      error: err.message,
    });
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    //2 receive the user's credentials
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    console.log("--- CREDENTIALS INTERCEPTED ---");
    console.log({
      oldPassword,
      newPassword,
      confirmNewPassword,
    });
    //3 validation logic from utils
    const validationResult = validatePasswordUpdate(req);

    if (!validationResult.isValid) {
      return res
        .status(400)
        .json({ status: "failure", message: validationResult.message });
    }
    // 4 ACQUIRE TARGET & VERIFY user (Check the PIN)

       const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ status: 'failure', message: 'User not found.' });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: 'failure', message: 'Incorrect old password.' });
    }
    console.log(user.password);

    // 5 EXECUTE PASSWORD UPDATE (Hash the new password)

    user.password = await bcrypt.hash(newPassword, 10); // Hash with a salt of 10
    await user.save();

    console.log(user.password);
    // 1.Connection & REPORT SUCCESS
    res.status(200).json({
      status: "success",
      message: `Password updated successfully.`,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: "server error.check console for details",
      error: err.message,
    });
  }
});

module.exports = profileRouter;
