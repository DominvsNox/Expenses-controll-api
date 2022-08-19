const db = require('../util/connection')

module.exports = class Expense{
    constructor(id, category_name_id, user_id, date, expense, comment){
        this.id=id
        this.category_name_id = category_name_id
        this.user_id = user_id
        this.date = date
        this.expense = expense
        this.comment = comment
    }

    static getAll(){
        return db.execute('SELECT * FROM expeneses')
    }

    static getExpensesByDate(date){
        return db.execute('SELECT * FROM expeneses WHERE date=?', [date])
    }

    static getExpensesByMonth(month){
        return db.execute('SELECT * FROM expeneses WHERE MONTH(date)=?', [month])
    }

    static getExpensesByYear(year){
        return db.execute('SELECT * FROM expeneses WHERE YEAR(date)=?', [year])
    }

    static getExpensesByCategory(category){
        return db.execute('SELECT * FROM expeneses WHERE category_name_id=?', [category])
    }

    static addExpenseByCategory(category, user_id, date, expense, comment){
        return db.execute('INSERT INTO expeneses (category_name_id, user_id, date, expense, comment) VALUES (?, ?, ?, ?, ?)', [category, user_id, date, expense, comment])
    }
}