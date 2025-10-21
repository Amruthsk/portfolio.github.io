const express = require("express");

const app = express();

const port = 4000;

let tasks = [];

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`request received:${req.url}${req.method}`);

  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.send("server responds on get request");
});

app.post("/task", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
  };

  tasks.push(newTask);
  res.status(201).send(newTask);
});

//read
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

//update
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskToUpdate = tasks.find((t) => t.id === taskId);
  if (!taskToUpdate) {
    return res.status(404).send("Task not found.");
  }
  taskToUpdate.text = req.body.text;
  res.send(taskToUpdate);
});

//delete
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  tasks = tasks.filter((t) => t.id !== taskId);

  res.status(204).json({data:tasks});
});

app.listen(port, () => {
  console.log(`server is listening on prot ${port}`);
});
