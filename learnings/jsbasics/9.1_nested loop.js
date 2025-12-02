let user = { profile: "MSD" }; // user is NOT null
if (user) {
  // Parent Check: true
  if (user.profile) {
    // Child Check: user.profile is null, so false
    console.log("Success");
  } else {
    console.log("Profile Missing"); // Executes
  }
}


console.log(user);