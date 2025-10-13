const express = require("express");
const userRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionrequest.js");
const User = require("../models/user.js");

const userSafeData = "firstName lastName photoUrl about skills";

userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const requests = await ConnectionRequest.find({
      toUserId: loggedInUserId,
      status: "INTERESTED",
    }).populate(
      "fromUserId", // The path to populate.
      userSafeData // string of fields to include.
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
  } catch (err) {
    res.status(500).json({
      message: "Server error while fetching requests.",
      error: err.message,
    });
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    //resource
    const loggedInUserId = req.user._id;

    //find
    const connections = await ConnectionRequest.find({
      $or: [{ fromUserId: loggedInUserId }, { toUserId: loggedInUserId }],
      status: "ACCEPTED",
    })
      .populate("fromUserId", userSafeData)
      .populate("toUserId", userSafeData);

    console.log("Found connections:", connections);

    if (connections.length === 0) {
      return res.status(200).json({
        message: "You have no accepted connections.",
        data: [],
      });
    }

    const connectedUsers = connections.map((connection) => {
      if (connection.fromUserId._id.equals(loggedInUserId)) {
        return connection.toUserId;
      } else {
        return connection.fromUserId;
      }
    });

    res.status(200).json({
      message: "Connections fetched successfully.",
      data: connectedUsers,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error while fetching connections.",
      error: err.message,
    });
  }
});

userRouter.get("/user/feed", userAuth, async (req, res) => {
  try {
    //user
    const loggedInUserId = req.user._id;
    // find all connections
    const allConnections = await ConnectionRequest.find({
      $or: [{ fromUserId: loggedInUserId }, { toUserId: loggedInUserId }],
    });

    console.log("All related connections:", allConnections);

    //transforming list

    const excludedUserIds = new Set();

    excludedUserIds.add(loggedInUserId);

    allConnections.forEach((connection) => {
      excludedUserIds.add(connection.fromUserId);
      excludedUserIds.add(connection.toUserId);
    });

    console.log("Exclusion List:", Array.from(excludedUserIds));

    const feedUsers = await User.find({
      _id: { $nin: Array.from(excludedUserIds) },
    })
      .limit(20)
      .select(userSafeData);

    res.status(200).json({
      message: "Feed fetched Successfully",
      data: feedUsers,
    });
  } catch (err) {
    res.json({
      message: "Server Error",
      error: err.message,
    });
  }
});

module.exports = userRouter;
