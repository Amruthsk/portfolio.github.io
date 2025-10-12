const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["PENDING", "ACCEPTED", "REJECTED","INTERESTED", "IGNORED"],
        message: `{VALUE} is not a valid status`,
    },
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 }, { unique: true });


connectionRequestSchema.pre("save", function(next){
 if (this.fromUserId.equals(this.toUserId)) {
  next(new Error("Cannot send a connection request to yourself."));
 }else {
  next();
 }

});

const ConnectionRequestModel = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequestModel;