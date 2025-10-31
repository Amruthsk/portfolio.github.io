const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const genres = require("./routes/genres.js");
const customer = require('./routes/customers.js')
const movies = require("./routes/movies.js");
const app = express();

app.use(express.json());

app.use("/api/customers", customer);
app.use("/api/genres", genres);
app.use("/api/movies", movies);
app.use((err, req, res, next) => {
  console.error(err.message, err);
  res.status(500).send("Something failed.");
});

// const port = process.env.PORT || 3007;

const port = config.get("port");
//const server = 
app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
// module.exports = server;