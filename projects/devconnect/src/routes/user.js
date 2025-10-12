const express = require("express");
const userRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionrequest.js")
const User = require("../models/user.js");



userRouter.get("/user/requests/received", userAuth, async(req, res) => {
try {
    const loggedInUserId = req.user._id;
    const requests = await ConnectionRequest.find({
      toUserId: loggedInUserId,
      status: "INTERESTED",
    }).populate(
      "fromUserId", // The path to populate.
      "firstName lastName photoUrl about skills" // string of fields to include.
    );
     console.log("Found requests:", requests);
      if (requests.length === 0) {
        return res.status(200).json({
          message: "You have no pending connection requests.",
          data: [],
        });
      }

      res.json({
        message: "Data Fetched Successfully",
        data: requests,
      });

}
catch(err){
    res.status(500).json({
      message: "Server error while fetching requests.",
      error: err.message,});
}


});
module.exports = userRouter;