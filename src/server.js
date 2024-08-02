const dotenv = require("dotenv");
const app = require("./app.js");
const { connectDB } = require("../config/db.js");

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
