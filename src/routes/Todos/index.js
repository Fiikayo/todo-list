import express from "express";
import { getTodos } from "../../controllers/TodoController/index.js";
const router = express.Router();

router.get("/", getTodos);

export default router;
