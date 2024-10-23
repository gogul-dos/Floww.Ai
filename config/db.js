const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/expenseTracker.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  }
  console.log("Connected to the SQLite database.");
});
module.exports = db;
