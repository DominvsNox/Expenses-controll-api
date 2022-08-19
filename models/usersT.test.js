const User = require('./users')


test("test db querry to get all users",()=>{
    return User.getAll().then(data=>{
        expect(data).toContainEqual([{"id":1,"name":"Stan Marsh"},{"id":2,"name":"Kyle Broflowski"},{"id":3,"name":"Eric Cartman"},{"id":4,"name":"Kenny McCormick"}])
    })
})

test("test db querry to get selected user expenses",()=>{
    let id = 4
    return User.getUsersExpenses(id).then(data=>{
        expect(data[0][0]).toHaveProperty("user_id", 4)
    })
})

test("delete all users expenses", ()=>{
    let id=4
    return User.deleteAllUsersExpenses(id).then(data=>{
        expect(data[0]).toHaveProperty("serverStatus", 2)
    })
})

test("add selected users expense",()=>{
    let id = 4
    let expense = {
        category_name_id : 3,
        user_id : id,
        date: "2022-08-05",
        expense: 2500,
        comment: "test"
    }
    return User.addUserExpense(expense.category_name_id, expense.user_id, expense.date, expense.expense, expense.comment).then(data=>{
        expect(data[0]).toHaveProperty("affectedRows", 1)
    })
})

test("select users expenses by date",()=>{
    let id = 4
    let date = new Date("2022-08-05")
    
    return User.getUsersExpensesByDate(id, date.toISOString()).then(data=>{
        expect(data[0][0].date.getDate()).toBe(date.getDate())
    })
})