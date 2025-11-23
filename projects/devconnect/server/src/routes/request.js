//

const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth.js");
const ConnectionRequest = require("../models/connectionrequest.js");
const sendEmail = require("./utils/sendEmail");

//post api - profile api
requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
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
  

      const emailRes = await sendEmail.run();
      console.log(emailRes);


      res.status(201).json({
        message: `Request with status '${status}' sent successfully.From  ${req.user.firstName} `,
        data: newRequest,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error while creating request.",
        error: err.message,
      });
    }
  }
);

requestRouter.post("/request/review/:status/:requestId", userAuth, async (req, res) => {
  // 1 Resource Acquisition
  //requestId - id in the db
  //userAuth gives loggedin user
  const { requestId, status } = req.params;
  const loggedInUserId = req.user._id;
  const standardizedStatus = status.toUpperCase();

  // 2 Input Validation
  const allowedStatuses = ["ACCEPTED", "REJECTED"];
  if (!allowedStatuses.includes(standardizedStatus)) {
    return res.status(400).json({ message: "Invalid status provided." });
  }

  // 3 meet Point
  console.log({ requestId, standardizedStatus, loggedInUserId });

  // cornercase Find & Verify Ownership
  try{
    const request = await ConnectionRequest.findOne({
      _id: requestId,
      toUserId: loggedInUserId,
      //status interested -> accepted|rejected
      status:"INTERESTED"
    });
    if (!request) {
      return res.status(404).json({
        message:
          "Connection request not found or you are not authorized to review it.",
      });
    }

    //update at db
    request.status = standardizedStatus;

      await request.save();

      res.status(200).json({
      message: `Connection request status updated to '${standardizedStatus}'.`,
      data: request,
    });
    


    console.log("Found request:", request);

  }catch(err){
    res.status(500).json({
      message: "Server error while finding the request.",
      error: err.message,
    });
  }
});

module.exports = requestRouter;
