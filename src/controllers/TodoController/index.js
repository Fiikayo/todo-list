const getTodos = async (req, res, next) => {
  console.log("receiving todos");
  res.json("get all todos route");
};

export { getTodos };
