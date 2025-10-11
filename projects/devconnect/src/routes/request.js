//

const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth.js");
const ConnectionRequest = require("../models/connectionrequest.js");

//post api - profile api
requestRouter.post("/send/:status/:toUserId", userAuth, async (req, res) => {
  //connection logic
  //---------
  const fromUserId = req.user._id; // Captured by the userAuth gatekeeper.
  const toUserId = req.params.toUserId; // Captured from the URL path.
  const status = req.params.status; // Captured from the URL path.

  // --- INTERROGATION POINT ---
  console.log("RAW STATUS CAPTURED:", status, "TYPE:", typeof status);

  const standardizedStatus = status.toUpperCase();
  // --- Input Validation ---
  //status
  const allowedStatuses = ["INTERESTED", "IGNORED"];
  if (!allowedStatuses.includes(standardizedStatus)) {
    return res.status(400).send({ message: "Invalid status provided." });
  }

  console.log({ fromUserId, toUserId, status });


  //-------
  try {
    const existingRequest = await ConnectionRequest.findOne({
      $or: [
        { fromUserId: fromUserId, toUserId: toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });

     if (existingRequest) {
       return res.status(409).json({
         message: "A connection request between these users already exists.",
         data: existingRequest,
       });
     }


  //creation of data in db

    const newRequest = new ConnectionRequest({
      fromUserId,
      toUserId,
      status: standardizedStatus,
    });

    await newRequest.save();

    res.status(201).json({
      message: `Request with status '${status}' sent successfully.From ${toUserId.firstName} to ${req.user.firstName} `,
      data: newRequest,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error while creating request.",
      error: err.message,
    });
  }
});

module.exports = requestRouter;
