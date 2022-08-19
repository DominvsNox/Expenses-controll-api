const User = require('../models/users')

module.exports.getAllUsers = async(req, res)=>{
    try{
        const [allUsers] = await User.getAll()
        res.send(allUsers)
    }
    catch(err){
        return err
    }
}

    module.exports.getUsersExpenses = async(req, res)=>{
        try{
            let userId = req.params.id
            const [usersExpenses] = await User.getUsersExpenses(userId)
            res.send(usersExpenses)
        }
        catch(err){
            return err
        }
}

module.exports.addUserExpense = async(req, res)=>{
    try{
        let userId = req.params.id
        let category = req.body.category_name_id
        let date = new Date(req.body.date)
        let expense = req.body.expense
        let comment = req.body.comment
        await User.addUserExpense(category, userId, date, expense, comment)
        res.send('Information added!')
    }
    catch(err){
        return err
    }
}

module.exports.deleteAllUsersExpenses = async(req, res)=>{
    try{
        let userId = req.params.id
        await User.deleteAllUsersExpenses(userId)
        res.send('All records of this user deleted!')
    }
    catch(err){
        return err
    }
}

module.exports.getUsersExpensesByDate = async(req, res)=>{
    try{
        let userId = req.params.id
        let date = req.body.date
        const [usersExpenses] = await User.getUsersExpensesByDate(userId, date)
        res.send(usersExpenses)
    }
    catch(err){
        return err
    }
}