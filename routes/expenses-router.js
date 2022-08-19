const express = require('express')
const expensesRouter = express.Router()
const expensesController = require('../controllers/expenses_controller')

expensesRouter.get('/', expensesController.getAllExpenses)
expensesRouter.get('/byCategory/:category_id', expensesController.getExpensesByCategory)
expensesRouter.post('/byDate', expensesController.getExpensesByDate)
expensesRouter.post('/byMonth', expensesController.getExpensesByMonth)
expensesRouter.post('/byYear', expensesController.getExpensesByYear)
expensesRouter.post('/byCategory/:category_id', expensesController.addExpensesByCategory)

module.exports = expensesRouter