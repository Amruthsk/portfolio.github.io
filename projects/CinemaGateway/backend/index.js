const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const { Genre, validate } = require("./models/genre");

const app = express();

app.use(express.json());

app.get("/api/genres", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

app.post("/api/genres", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });

  genre = await genre.save();

  res.send(genre);
});

app.use((err, req, res) => {
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
