const db = require("../config/db");

const Transaction = {
  getAll: (callback) => {
    const sql = "SELECT * FROM transactions";
    db.all(sql, [], callback);
  },
  getById: (id, callback) => {
    const sql = "SELECT * FROM transactions WHERE id = ?";
    db.get(sql, [id], callback);
  },
  create: (data, callback) => {
    const sql =
      "INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)";
    db.run(
      sql,
      [data.type, data.category, data.amount, data.date, data.description],
      callback
    );
  },
  update: (id, data, callback) => {
    const sql =
      "UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?";
    db.run(
      sql,
      [data.type, data.category, data.amount, data.date, data.description, id],
      callback
    );
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM transactions WHERE id = ?";
    db.run(sql, [id], callback);
  },
};

module.exports = Transaction;
