//returns promise

function getUser(id) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("Searching database for user:", id);
      console.log("1. Initiating search for user...");

      const user = { id: id, name: "Jhon" };
      console.log("2. ...user acquired.");
      reslove(user);
    }, 1000);
  });
}

function getPermissions(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Looking for permisiion search for user...", user.name);

      const permissions = { level: "Admin" };
      console.log("4. ...Permission acquired.");
      resolve(permissions);
    }, 1000);
  });
}

function getAccessReport(permissions) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Searching database for user:");
      console.log("5. Generating Access Report for level:", permissions.level);

      const report = "Full system access";
      console.log("6. ...Report  generated.");
      resolve(report);
    }, 1000);
  });
}

getUser(101)
  .then((user) => {
    console.log("...User acquired:", user);
    return getPermissions(user);
  })
  .then((permissions) => {
    console.log("...Permissions acquired:", permissions);
    return getAccessReport(permissions);
  })
  .then((report) => {
    console.log("...Final Report:", report);
  })
  .catch(err => console.log(err.message));
