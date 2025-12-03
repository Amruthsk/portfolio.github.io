// src/index.js
const express = require("express");
const { PORT } = require("./config/server.config.js");
const apiRouter = require("./routes/index.js");

const app = express();
// Use the controller directly on the base route
//app.get("/", homePingController);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Started server at port: ${PORT}`);
});
