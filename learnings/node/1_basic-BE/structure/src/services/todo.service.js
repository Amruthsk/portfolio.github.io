// src/services/todo.service.js
class TodoService {

  constructor(todoRepository) {
    this.todoRepository = todoRepository; 
  }

  create(todoText) {
    if (!todoText || todoText.trim() === "") {
      throw new Error("Todo text cannot be empty");
    }
    const processedText = todoText.trim().toUpperCase();

    const newTodo = this.todoRepository.insert(processedText); 
  }

  getOneTodo(id) {
    return this.todoRepository.get(id); 
  }

  getAllTodos() {
    return this.todoRepository.getAll();
  }
}

module.exports = TodoService; 