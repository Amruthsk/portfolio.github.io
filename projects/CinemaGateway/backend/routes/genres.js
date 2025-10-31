const { Genre, validateGenre } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const genreRouter = express.Router();

genreRouter.get("/", async(req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

genreRouter.get("/:id", async(req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
});

genreRouter.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  genre = await genre.save();

  res.send(genre);
});


genreRouter.put("/:id",async(req,res)=>{
    const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {new:true});
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});
genreRouter.delete("/:id", async(req, res) => {
   const genre = await Genre.findByIdAndDelete(req.params.id);
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
res.send(genre);


});

module.exports = genreRouter;