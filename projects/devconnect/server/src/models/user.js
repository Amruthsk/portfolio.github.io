const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");  
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
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a Strong Password: " + value);
        }
      },
    },
    emailId: {
      type: String,
      required: true,
      unique: true, //This already creates an index implicitly
      lowercase: true,
      index:true,
      //match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address: " + value);
        }
      },
    },
    gender: {
      type: String,
      //enum: ["male", "female", "others"],
      validate(value) {
        if (!["Male", "Female", "Others"].includes(value)) {
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
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid Phot url : " + value);
        }
      },
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
//validate password for login
userSchema.methods.validatePassword = async function(passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );

  return isPasswordValid;
};

//generate JWT for login
userSchema.methods.getJWT = async function() {
  const user = this;

  const token = await jwt.sign({ _id: user.id }, "DEV@connect$9", {
    expiresIn: "1d",
  });

  return token;
};

//compiling into model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
