// pattern to handle async code

//callback
function findUser(id, callback) {
  console.log("Searching database for user:", id);
console.log("1. Initiating search for user...");
  setTimeout(() => {
    const user = { id: id, name: "Jhon" };
    console.log("3. ...Target acquired.");
    callback(user);
  }, 2000);
}

findUser(1, (userObject) => {
  console.log("Callback executed!");
  console.log("4. Target has returned. Retrieved:", userObject);
});

console.log("2. search initiated. Main thread is now free for other tasks.");