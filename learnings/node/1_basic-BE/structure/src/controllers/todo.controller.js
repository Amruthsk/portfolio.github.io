// controllers/todo.controller.js
const TodoRepository = require("../repositories/todo.repository"); 
//const TodoRepository = require("../repositories/todoMysql.repository"); 
const TodoService = require("../services/todo.service"); 

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

function getTodos(req, res) {
  try {
    const response = todoService.getAllTodos(); 
     console.log(
       "Controller: Data received from Service, sending to client. Count:",
       response.length
     ); 
     return res.json({ data: response, msg: "Todos retrieved successfully" }); 

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" }); 
}
}

function createTodos(req, res) {
  try {
    const todoText = req.body.todoText; 
    const newTodo = todoService.create(todoText); 

    return res
      .status(201)
      .json({ data: newTodo, msg: "New Todo created successfully" }); 
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ msg: error.message || "Invalid request body" }); 
  }
}

module.exports = {
  getTodos,
  createTodos,
};
