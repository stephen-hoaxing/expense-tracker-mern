const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please enter a valid text"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter a positive / negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
