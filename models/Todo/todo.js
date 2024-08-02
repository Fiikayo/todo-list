import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db";
import TodoStatusEnum from "../helpers/todoStatusEnum";

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: Object.values(TodoStatusEnum), //will add in progress state later
    defaultValue: TodoStatusEnum.Pending,
  },
});

export default Todo;
