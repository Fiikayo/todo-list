"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
const TodoStatusEnum = require("./helpers/todoStatusEnum.js");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
});

class Todo extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: Object.values(TodoStatusEnum), //TODO:will add in progress state later
      defaultValue: TodoStatusEnum.Pending,
    },
  },
  {
    sequelize,
    modelName: "Todo",
  }
);

module.exports = Todo;
