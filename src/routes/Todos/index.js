const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../../controllers/TodoController/index.js");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.get("/:id", getTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
