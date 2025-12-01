// src/index.js
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. GET Route: Home
app.get("/home", (req, res) => {
  console.log("/home called");
  return res.json({ msg: "ok" });
});

// 2. GET Route: URL Params & Query Params
app.get("/products/:product_id/rating/:rate", (req, res) => {
  const pid = req.params.product_id;
  const query = req.query;

  return res.json({
    product_id: pid,
    rating: req.params.rate,
    filter_query: query,
  });
});

// 3. POST Route: Request Body
app.post("/data", (req, res) => {
  console.log("req.body:", req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ msg: "Body is missing or empty" });
  }
  return res.json({ msg: "Data received successfully", data: req.body });
});

function m1(req, res, next) {
  console.log("inside m1: Authenticating user");
  req.authStatus = "Authenticated";
  next();
}

function m2(req, res, next) {
  console.log("inside m2: Checking role for access");
  if (req.authStatus !== "Authenticated") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  console.log("inside m2: Access granted");
  next();
}

function m3(req, res, next) {
  console.log("inside m3: Performing final validation");
  next();
}

// Route to  Middleware Chaining
app.get("/chained-home", m1, m2, m3, (req, res) => {
  console.log("/chained-home called: Final Handler");
  return res.json({ msg: `Welcome, Authentication Status: ${req.authStatus}` });
});

// Server binding to port
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
