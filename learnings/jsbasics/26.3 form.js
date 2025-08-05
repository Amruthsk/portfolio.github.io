//form - content - html

//bootstrap CSS framework
//browser - bootstrap cdn - use class
//https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

//validation username - js - 
//n: c1)username - alphabets only
//n: c2)no space
//n: c3)mini value
//n: c4)max value
//input value -> js-> validate -> sent output - user defined message

//input- fun(perform conditions)- output
//validate phone number
//n:first number can be 6-9, remaining number can be 0-9

function validate()
{
  //n:check username for regular expression- alphabets only
  //n:can start with ^ A or end with & A or a + to concatenate data
  //n:fetch data from html .value
  //n: check all the condi & to hold the error message on screen- return false

  // pattern
  var unp = /^[A-Za-z]+$/;
  var pnp = /^[6-9]{1}[0-9]{9}$/;
  //fetch the value
  var uv = document.getElementById("uname").value;
  var pv = document.getElementById("phnum").value;
  if (uv == "") {
    document.getElementById("msg").innerHTML = "Enter User name";
    return false;
  }
  // match method
  if (uv.match(unp)) true;
  else {
    document.getElementById("msg").innerHTML =
      "Enter the valid pattern - User name should contain alphabets only";
    return false;
  }
  //length property
  if (uv.length < 3) {
    document.getElementById("msg").innerHTML =
      "Username should contain minimum 3 characters";
    return false;
  }
  if (uv.length > 8) {
    document.getElementById("msg").innerHTML =
      "Username should contain maximum 8 characters";
    return false;
  }
  if (pv == "") {
    document.getElementById("msg1").innerHTML = "Enter the phone number";
    return false;
  }
  // match method
  if (pv.match(pnp))
    true;
  else {
    document.getElementById("msg1").innerHTML =
      "Invalid Phone number";
    return false;
  }
}