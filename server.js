const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const transactions = require("./routes/transactions");
const connectDB = require("./config/db");

dotenv.config({
  path: "./config/config.env",
});

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api/v1/transactions", transactions);

app.get("/", (req, res) => console.log("OK"));

app.listen(
  PORT,
  console.log(
    `Server running on ${PORT} in ${process.env.NODE_ENV} mode.`.yellow.bold
  )
);
