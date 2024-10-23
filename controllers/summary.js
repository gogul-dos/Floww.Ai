const Transaction = require("../models/transactionModel");

exports.getSummary = (req, res, next) => {
  const sql = `
        SELECT 
            SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
            SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expenses,
            SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) - 
            SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS balance
        FROM transactions;
    `;
  db.get(sql, [], (err, row) => {
    if (err) return next(err);
    res.json(row);
  });
};
