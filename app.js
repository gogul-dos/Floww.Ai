const express = require("express");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactions");
const summaryRoutes = require("./routes/summary");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(bodyParser.json());

app.use("/api", transactionRoutes);
app.use("/api", summaryRoutes);
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
