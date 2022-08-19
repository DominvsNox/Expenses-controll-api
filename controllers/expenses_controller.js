const Expenses = require('../models/expenses')

module.exports.getAllExpenses = async(req, res)=>{
    try{
        const [allExpenses] = await Expenses.getAll()
        res.send(allExpenses)
    }
    catch(err){
        return err
    }
}

module.exports.getExpensesByCategory = async(req, res)=>{
    try{
        const [allCategoryExpenses] = await Expenses.getExpensesByCategory(req.params.category_id)
        res.send(allCategoryExpenses)
    }
    catch(err){
        return err
    }
}

module.exports.getExpensesByDate = async(req, res)=>{
    try{
        let date = req.body.date
        const [allInDateExpenses] = await Expenses.getExpensesByDate(date)
        res.send(allInDateExpenses)
    }
    catch(err){
        return err
    }
}

module.exports.getExpensesByMonth = async(req, res)=>{
    try{
        let date = new Date(req.body.date)
        let month = date.getMonth()
        const [allInMonthExpenses] = await Expenses.getExpensesByMonth(month)
        res.send(allInMonthExpenses)
    }
    catch(err){
        return err
    }
}

module.exports.getExpensesByYear = async(req, res)=>{
    try{
        let date = new Date(req.body.date)
        let year = date.getFullYear()
        const [allInYearExpenses] = await Expenses.getExpensesByYear(year)
        res.send(allInYearExpenses)
    }
    catch(err){
        return err
    }
}

module.exports.addExpensesByCategory = async(req, res)=>{
    try{
        let category = req.params.category_id
        let user = req.body.user_id
        let date = req.body.date
        let expense = req.body.expense
        let comment = req.body.comment
        await Expenses.addExpenseByCategory(category, user, date, expense, comment)
        res.send('Information added!')
    }
    catch(err){
        return err
    }
}