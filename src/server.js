require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const app = require("./app");
const pool = require("./config/database");

const PORT = process.env.PORT || 3000;

pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }

  console.log("Database connected successfully");
  console.log("Database time:", result.rows[0].now);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});