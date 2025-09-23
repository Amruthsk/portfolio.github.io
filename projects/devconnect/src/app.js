console.log("starting a new project");
const express = require("express");
const app = express();


app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.parmas);
    res.send({firstName: "Amruth" , lastName: "S K"});
});

app.post("/user", (req, res) => {
  // (Execute this block) ∵ {[req.url] ↔ "/user"
  console.log("save data to the database");
  // (send)/[res object]
  //logiv post
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  // (Execute this block) ∵ {[req.url] ↔ "/user"
  // (send)/[res object]
  //logic delete
  res.send("Deleted Successfully" );
});


// Route for "/test"
app.get("/test", (req, res) => {
  res.send("Test from the Server");
});


app.get("/", (req, res) => {
  res.send("Hello from the Server");
});

// Start server
app.listen(9999, () => {
  console.log("Server is successfully listening on port 9999");
});
