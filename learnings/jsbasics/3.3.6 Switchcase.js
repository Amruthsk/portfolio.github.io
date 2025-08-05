// //break - hit break - go out  of switch
// similar to if else
//clean syntax - small logic

const role = " "; // string, number, condition

switch (role) {
  case "admin":
    console.log("You have full access.");
    break;

  case "editor":
    console.log("You can edit content.");
    break;

  case "viewer":
    console.log("You can only view content.");
    break;

  default:
    console.log("Unknown role.");
}
