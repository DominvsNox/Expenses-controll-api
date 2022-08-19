const request = require('supertest')
const app = require('./expenses-router')

test("fetch all expenses", ()=>{
    request(app).get('/expenses', (req, res)=>{
        expect(res.statusCode).toEqual(200)
    })
})

test("fetch expenses by selected category", ()=>{
    let id = 1
    request(app).get(`/expenses/byCategory/${id}`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
    })
})

test("trying to fetch expenses by unexisting category", ()=>{
    let id = 9999
    request(app).get(`/expenses/byCategory/${id}`, (req, res)=>{
        expect(res.body).toBe([])
    })
})

test("select expenses by date", ()=>{
    request(app).post(`/expense/byDate`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})

test("select expenses by month", ()=>{
    request(app).post(`/expense/byMonth`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})

test("select expenses by year", ()=>{
    request(app).post(`/expense/byYear`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})

test("add expense by selected category", ()=>{
    let id = 1   
    request(app).post(`/expense/byCategory/${id}`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})