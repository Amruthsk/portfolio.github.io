// src/repositories/todo.repository.js
const todos = []; 

class TodoRepository {

  insert(todoText) {
    todos.push({ id: todos.length, text: todoText });
    return todos[todos.length - 1]; 
  }

  getAll() {
    return todos;
  }

  get(id) {
    return todos.filter((todo) => todo.id === id)[0];
  }
}

module.exports = TodoRepository; 
