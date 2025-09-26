const mongoose = require("mongoose");

//creating schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    password:{
        type:String
    },
    emailId:{
        type: String
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    }
});

//compiling into model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
