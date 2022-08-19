const mysql = require('mysql2')
const config = require('../config/config.json')

const connection = mysql.createPool({
    connectionLimit: 5,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
}).promise()

module.exports = connection