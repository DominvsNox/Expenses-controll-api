const request = require('supertest')
const app = require('./user-router')

test("fetch all users from db", ()=>{
    request(app).get('/user', (req, res)=>{
        expect(res.statusCode).toEqual(200)
    })
})

test("fetch selected users expenses from db", ()=>{
    let id = 1
    request(app).get(`/user/${id}`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
    })
})

test("trying to fetch unexisting users expenses from db", ()=>{
    let id = 9999
    request(app).get(`/user/${id}`, (req, res)=>{
        expect(res.body).toBe([])
    })
})

test("add selected users expense", ()=>{
    let id = 1
    request(app).post(`/user/${id}`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})

test("delete all selected users expenses", ()=>{
    let id = 1
    request(app).delete(`/user/${id}`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
    })
})

test("add selected users expense", ()=>{
    let id = 1   
    request(app).post(`/user/${id}/by_date`, (req, res)=>{
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})