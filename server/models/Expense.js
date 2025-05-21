const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: Date,
  updatedAt: { type: Date, default: Date.now }
});

expenseSchema.index({ updatedAt: 1 }); // For sync optimization

module.exports = mongoose.model('Expense', expenseSchema);
