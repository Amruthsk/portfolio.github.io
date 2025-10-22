const express = require("express");

const app = express();

app.use(express.json());


const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Thriller" },
];

app.get('/api/genres',(req,res)=>{
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


const port = process.env.PORT || 3007;

app.listen(port, () => console.log(`Listening on port ${port}...`));