// pattern to handle async code

//callback
function findUser(id, callback) {
  console.log("Searching database for user:", id);
  console.log("1. Initiating search for user...");
  setTimeout(() => {
    const user = { id: id, name: "Jhon" };
    console.log("2. ...user acquired.");
    callback(user);
  }, 1000);
}

function getPermissions(user, callback) {
  console.log("3. Looking for permisiion search for user...", user.name);
  setTimeout(() => {
    const permissions = { level: "Admin" };
    console.log("4. ...Permission acquired.");
    callback(permissions);
  }, 1000);
}


function getAccessReport(permissions, callback) {
  console.log("Searching database for user:");
  console.log("5. Generating Access Report for level:", permissions.level);
  setTimeout(() => {
    const report = "Full system access";
    console.log("6. ...Report  generated.");
    callback(report);
  }, 1000);
}

findUser(1, (user) => {
   console.log("Received User:", user);
  getPermissions(user, (permissions) => {
    console.log("Received Permissions:", permissions);
    getAccessReport(permissions, (report) => {
      console.log("Final Report:", report);

    });
  });
});
