const express = require('express')
const userRouter = express.Router()
const userConstroller = require('../controllers/user_controller')

userRouter.get('/', userConstroller.getAllUsers)
userRouter.get('/:id', userConstroller.getUsersExpenses)
userRouter.post('/:id', userConstroller.addUserExpense)
userRouter.delete('/:id', userConstroller.deleteAllUsersExpenses)
userRouter.post('/:id/by_date', userConstroller.getUsersExpensesByDate)

module.exports = userRouter