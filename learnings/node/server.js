const express = require("express");
const morgan = require("morgan");
const config = require("config")

console.log(`Application Name: ${config.get("name")}`);
const app = express();

// app.use(morgan('tiny'));

app.use(morgan(config.get("morgan.format")));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is live");
});

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Thriller" },
];

function validateGenre(req, res, next) {
    if (!req.body.name || req.body.name.length < 3) {
 return res
   .status(400)
   .send("Name required and should be more than 3 characters");
    }
    next();
} 

//get api - resource from db
app.get("/genres", (req, res) => {
  res.send(genres);
});

app.get("/genres/:id", (req, res) => {
  const genreId = parseInt(req.params.id);
  const genre = genres.find((genre) => genreId == genre.id);
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found.");
  }
  res.send(genre);
});

app.post("/genres",validateGenre, (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(genre);
});

//update
app.put("/genres/:id",validateGenre, (req, res) => {
  const genreid = parseInt(req.params.id);

  const genre = genres.find((g) => g.id === genreid);

  if (!genre) {
    res
      .status(404)
      .send(" data not found The genre with the given id was not found");
  }


  genre.name = req.body.name;
  res.send(genre);
});

app.delete("/genres/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const genre = genres.find((g) => g.id === id);

  if (!genre) {
    res.status(404).send("data not found");
  }

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genres);
});

// const port = 3090

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server.js is listening on port ${port}`);
});
