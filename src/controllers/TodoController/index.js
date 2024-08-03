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

    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const todo = await Todo.findByPk(id);

    if (todo) {
      const updatedTodo = await todo.update(body);
      res.json(updatedTodo);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    next(error);
  }
};

const getTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(204).send();
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
