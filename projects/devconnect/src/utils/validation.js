const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid fv ");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Invalid email address fv" );
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a Strong Password fv " );
  }
};


//export
module.exports = {validateSignUpData,}