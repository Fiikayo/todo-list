const Todo = require("../../../models/todo.js");

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();

    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;

    const todo = await Todo.create({ title });

    res.json(todo);
  } catch (error) {
    next(error);
  }
};
const updateTodo = async (req, res, next) => {};
const deleteTodo = async (req, res, next) => {};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
