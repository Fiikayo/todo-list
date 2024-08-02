//setup db
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("db successfully connected");
  } catch (error) {
    console.error("Error connecting to PostgreSQL", error);
    process.exit(1);
  }
};

module.exports = { connectDB, sequelize };
