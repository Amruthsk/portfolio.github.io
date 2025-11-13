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
const validatePatchProfile = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "photoUrl",
    "about",
    "gender",
    "skills",
    "age",
  ];

  const isValidOperation = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field));

  return isValidOperation;
};
const validatePasswordUpdate = (req) => {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  // Check 1: Presence - Are all keys present?
  if (!oldPassword || !newPassword || !confirmNewPassword) {
    return {
      isValid: false,
      message:
        "Missing required fields: oldPassword, newPassword, confirmNewPassword.",
    };
  }

  // Check 2: Match - Does the new password match its confirmation?
  if (newPassword !== confirmNewPassword) {
    return {
      isValid: false,
      message: "New password and confirmation password do not match.",
    };
  }
  // Check 3: Difference - Is the new password different from the old one?
  if (newPassword === oldPassword) {
    return {
      isValid: false,
      message: "New password must be different from the old password.",
    };
  }
  // If all checks pass:
  return { isValid: true, message: "Credentials validated. Awaiting user verification" };
};

//export
module.exports = {
  validateSignUpData,
  validatePatchProfile,
  validatePasswordUpdate,
};