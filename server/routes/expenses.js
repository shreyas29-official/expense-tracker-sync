const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// POST /expenses
router.post('/', async (req, res) => {
  const { amount, category, date } = req.body;
  const expense = new Expense({ amount, category, date });
  await expense.save();
  res.status(201).json(expense);
});

// GET /expenses?since=timestamp
router.get('/', async (req, res) => {
  const { since } = req.query;
  const query = since ? { updatedAt: { $gt: new Date(since) } } : {};
  const expenses = await Expense.find(query);
  res.json(expenses);
});

// DELETE /expenses/:id
router.delete('/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
