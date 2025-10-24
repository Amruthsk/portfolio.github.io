const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Thriller" },
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
  throw new Error("This is a controlled demolition.");
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

app.use((err, req, res, next) => {
  console.error(err.message, err);
  res.status(500).send("Something failed.");
});

// const port = process.env.PORT || 3007;

const port = config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
