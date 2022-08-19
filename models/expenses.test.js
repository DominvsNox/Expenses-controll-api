const Expense = require('./expenses')

test("fetch all expenses", ()=>{
    return Expense.getAll().then(data=>{
        expect(data[0][0]).toHaveProperty("id", 1)
    })
})

test("select expenses by date",()=>{
    let date = new Date("2022-08-05")
    
    return Expense.getExpensesByDate(date.toISOString()).then(data=>{
        expect(data[0][0].date.getDate()).toBe(date.getDate())
    })
})

test("select expenses by year",()=>{
    let date = new Date("2022-09-05")
    
    return Expense.getExpensesByYear(date.toISOString()).then(data=>{
        expect(data[0][0].date.getFullYear()).toBe(date.getFullYear())
    })
})

test("add expense by selected category",()=>{
    let category = 3
    let expense = {
        category_name_id : category,
        user_id : 4,
        date: "2022-08-05",
        expense: 2500,
        comment: "added from selected category"
    }
    return Expense.addExpenseByCategory(expense.category_name_id, expense.user_id, expense.date, expense.expense, expense.comment).then(data=>{
        expect(data[0]).toHaveProperty("affectedRows", 1)
    })
})

test("get expenses by selected category",()=>{
    let category = 3
    
    return Expense.getExpensesByCategory(category).then(data=>{
        expect(data[0][0]).toHaveProperty("category_name_id", 3)
    })
})