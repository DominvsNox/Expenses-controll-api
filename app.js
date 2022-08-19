const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const PORT = 5000

app.listen(PORT, ()=>console.log(`App runs at port ${PORT}`))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.json())

const userRouter = require('./routes/user-router')
const expensesRouter = require('./routes/expenses-router')
const categoriesRouter = require('./routes/categories-router')

app.get('/', (req, res)=>{
    res.send('Server runs! You are at main page')
})

app.use('/user', userRouter)
app.use('/expenses', expensesRouter)
app.use('/categories', categoriesRouter)