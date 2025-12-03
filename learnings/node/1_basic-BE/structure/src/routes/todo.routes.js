// routes/todo.routes.js
const express = require("express");
const { getTodos, createTodos } = require("../controllers/todo.controller"); 

const todoRouter = express.Router(); 

// Register the controller functions to the base path '/' (which will be /api/v1/todos)
todoRouter.get("/", getTodos); 
todoRouter.post("/", createTodos); 

module.exports = todoRouter; 
