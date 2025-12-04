// src/validators/todo.validator.js

function createTodoValidator(req, res, next) {

  // Check for todoText presence and validity
  if (
    !req.body.todoText ||
    typeof req.body.todoText !== "string" ||
    req.body.todoText.trim().length === 0
  ) {
    return res.status(400).json({
      msg: "Validation Failed",
      error: "The 'todoText' field is required and cannot be empty.",
    });
  }

  next();
}

module.exports = {
  createTodoValidator,
};
