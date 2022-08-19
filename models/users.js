const db = require('../util/connection')

module.exports = class Users{
    constructor(id, name){
        this.id=id
        this.name = name
    }

    static getAll(){
        return db.execute('SELECT * FROM user')
    }

    static getUsersExpenses(id){
        return db.execute('SELECT * FROM expeneses WHERE user_id=?', [id])
    }

    static addUserExpense(category_name_id, user_id, date, expense, comment){
        return db.execute('INSERT INTO expeneses (category_name_id, user_id, date, expense, comment) VALUES(?, ?, ?, ?, ?)', [category_name_id, user_id, date, expense, comment])
    }

    static deleteAllUsersExpenses(id){
        return db.execute('DELETE FROM expeneses WHERE user_id=?',[id])
    }

    static getUsersExpensesByDate(id, date){
        return db.execute('SELECT * FROM expeneses WHERE user_id=? AND date=?', [id, date])
    }
}