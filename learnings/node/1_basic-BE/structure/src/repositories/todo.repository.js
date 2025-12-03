// src/repositories/todo.repository.js
const todos = []; 

class TodoRepository {

  insert(todoText) {
    todos.push({ id: todos.length, text: todoText });
    return todos[todos.length - 1]; 
  }

  getAll() {
    console.log(
      "Repository: Current todos state (should not be empty):",
      todos
    );
    return todos;
  }

  get(id) {
      const targetId = parseInt(id);

    return todos.find((todo) => todo.id === targetId);
  }
}

module.exports = TodoRepository; 
