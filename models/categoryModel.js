const db = require("../config/db");

const Category = {
  getAll: (callback) => {
    const sql = "SELECT * FROM categories";
    db.all(sql, [], callback);
  },
};

module.exports = Category;
