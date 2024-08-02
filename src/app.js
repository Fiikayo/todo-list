const express = require("express");
const todoRoutes = require("./routes/Todos/index.js");
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use("/api/todos", todoRoutes);

module.exports = app;
