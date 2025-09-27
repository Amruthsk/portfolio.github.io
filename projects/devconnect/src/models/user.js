const mongoose = require("mongoose");

//creating schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    gender: {
      type: String,
      //enum: ["male", "female", "others"],
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 90,
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s",
    },
    about: {
      type: String,
      default: "This is a default about the user ",
    },
    skills: {
      type: [String],
    },
  },
  //created at,updated at by default
  {
    timestamps: true,
  }
);



//compiling into model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
