const Transaction = require("../models/transactionModel");

exports.getAllTransactions = (req, res, next) => {
  Transaction.getAll((err, rows) => {
    if (err) return next(err);
    res.json(rows);
  });
};

exports.getTransactionById = (req, res, next) => {
  const { id } = req.params;
  Transaction.getById(id, (err, row) => {
    if (err) return next(err);
    if (!row) return res.status(404).json({ error: "Transaction not found" });
    res.json(row);
  });
};

exports.createTransaction = (req, res, next) => {
  const data = req.body;
  Transaction.create(data, (err) => {
    if (err) return next(err);
    res.status(201).json({ message: "Transaction created successfully" });
  });
};

exports.updateTransaction = (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  Transaction.update(id, data, (err) => {
    if (err) return next(err);
    res.json({ message: "Transaction updated successfully" });
  });
};

exports.deleteTransaction = (req, res, next) => {
  const { id } = req.params;
  Transaction.delete(id, (err) => {
    if (err) return next(err);
    res.json({ message: "Transaction deleted successfully" });
  });
};
