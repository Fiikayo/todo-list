import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Error connecting to PostgreSQL", error);
    process.exit(1);
  }
};

export { connectDB, sequelize };
