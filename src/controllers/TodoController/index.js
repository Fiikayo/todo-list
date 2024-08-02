const Todo = require("../../../models/todo.js");

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {}
  console.log("receiving todos");
};

module.exports = { getTodos };
